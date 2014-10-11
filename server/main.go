package main

import (
	"github.com/codegangsta/cli"
	"github.com/soveran/redisurl"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

type Config struct {
	IsProduction bool
}

var cfg *Config

const (
	flagPort = "port"
)

func init() {
	cfg = &Config{
		IsProduction: strings.ToLower(os.Getenv("MODE")) == "production",
	}
}

func main() {
	app := cli.NewApp()
	app.Name = "hero"
	app.Version = "0.1"
	app.Usage = "DreamForce 2014 Hackathon Entry"
	app.Flags = []cli.Flag{
		cli.StringFlag{flagPort, "8080", "the port to run on", "PORT"},
	}
	app.Action = Run
	app.Run(os.Args)
}

func Run(c *cli.Context) {
	addr := ":" + c.String(flagPort)

	http.HandleFunc("/check/redis", CheckRedis)
	http.HandleFunc("/", Server())

	log.Println("starting web server on port", addr)
	http.ListenAndServe(addr, nil)
}

func Server() http.HandlerFunc {
	fileServer := http.FileServer(http.Dir("../public"))
	home := template.Must(template.ParseFiles("../public/index.html"))

	return func(w http.ResponseWriter, req *http.Request) {
		switch req.RequestURI {
		case "/", "/index.html":
			home.Execute(w, cfg)
		default:
			fileServer.ServeHTTP(w, req)
		}
	}
}

func Fail(w http.ResponseWriter, err error) {
	w.WriteHeader(500)
	w.Write([]byte(err.Error()))
}

func CheckRedis(w http.ResponseWriter, req *http.Request) {
	c, err := redisurl.ConnectToURL(os.Getenv("REDISCLOUD_URL"))
	if err != nil {
		Fail(w, err)
		return
	}
	defer c.Close()

	// retrieve the previous value
	key := "redis-check"
	v, err := c.Do("GET", key)
	if err != nil {
		Fail(w, err)
		return
	}

	// sets the new value
	_, err = c.Do("SET", key, time.Now().String())
	if err != nil {
		Fail(w, err)
		return
	}

	// simple form for fastly to not cache
	w.Header().Set("Cache-Control", "private")

	w.WriteHeader(200)
	io.WriteString(w, string(v.([]byte)))
}

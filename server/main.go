package main

import (
	"github.com/codegangsta/cli"
	"github.com/soveran/redisurl"
	"io"
	"net/http"
	"os"
	"time"
)

func main() {
	app := cli.NewApp()
	app.Name = "hero"
	app.Version = "0.1"
	app.Usage = "DreamForce 2014 Hackathon Entry"
	app.Flags = []cli.Flag{
		cli.StringFlag{"port", "8080", "the port to run on", "PORT"},
	}
	app.Action = Run
	app.Run(os.Args)
}

func Run(c *cli.Context) {
	addr := ":" + c.String("port")

	http.HandleFunc("/check/redis", CheckRedis)
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(addr, nil)
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

	w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
	w.Header().Set("Pragma", "no-cache")
	w.Header().Set("Expires", "0")

	w.WriteHeader(200)
	io.WriteString(w, string(v.([]byte)))
}

package main

import (
	"github.com/codegangsta/cli"
	"log"
	"net/http"
	"os"
	"strings"
)

type Config struct {
	IsProduction bool
}

var cfg *Config

const (
	flagPort    = "port"
	flagDocroot = "docroot"
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
		cli.StringFlag{flagDocroot, "public", "the directory where our html is located", "DOCROOT"},
	}
	app.Action = Run
	app.Run(os.Args)
}

func Run(c *cli.Context) {
	addr := ":" + c.String(flagPort)
	docroot := c.String(flagDocroot)

	http.HandleFunc("/check/redis", CheckRedis)
	http.HandleFunc("/", Server(docroot))

	log.Println("starting web server on port", addr)
	http.ListenAndServe(addr, nil)
}

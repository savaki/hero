package main

import (
	"github.com/codegangsta/cli"
	"log"
	"net/http"
	"os"
	"strings"
)

type Config struct {
	IsProduction       bool
	UserId             string
	PubNubPublishKey   string
	PubNubSubscribeKey string
	PubNubSecretKey    string
}

var cfg *Config

const (
	flagPort    = "port"
	flagDocroot = "docroot"
)

func init() {
	cfg = &Config{
		IsProduction:       strings.ToLower(os.Getenv("MODE")) == "production",
		PubNubPublishKey:   os.Getenv("PUBNUB_PUBLISH_KEY"),
		PubNubSubscribeKey: os.Getenv("PUBNUB_SUBSCRIBE_KEY"),
		PubNubSecretKey:    os.Getenv("PUBNUB_SECRET_KEY"),
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

	log.Println("starting web server on port", addr)

	routes := CreateRoutes(docroot)
	http.ListenAndServe(addr, routes)
}

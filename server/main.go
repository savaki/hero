package main

import (
	"github.com/codegangsta/cli"
	"net/http"
	"os"
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
	http.ListenAndServe(addr, http.FileServer(http.Dir(".")))
}

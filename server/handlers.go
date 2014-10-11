package main

import (
	"github.com/soveran/redisurl"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"time"
)

func LoadTemplate(docroot, path string) *template.Template {
	log.Printf("loading template, %s\n", path)
	return template.Must(template.ParseFiles(docroot + path))
}

func Server(docroot string) http.HandlerFunc {
	fileServer := http.FileServer(http.Dir(docroot))
	home := LoadTemplate(docroot, "/index.html")

	return func(w http.ResponseWriter, req *http.Request) {
		switch req.RequestURI {
		case "/", "/index.html":
			if !cfg.IsProduction {
				// in development mode reload the template
				home = LoadTemplate(docroot, "/index.html")
			}
			home.Execute(w, cfg)
		default:
			fileServer.ServeHTTP(w, req)
		}
	}
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

func Fail(w http.ResponseWriter, err error) {
	w.WriteHeader(500)
	w.Write([]byte(err.Error()))
}
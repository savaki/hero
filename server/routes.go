package main

import (
	"github.com/gin-gonic/gin"
	"html/template"
	"log"
	"net/http"
)

func CreateRoutes(docroot string) *gin.Engine {
	cors := func(c *gin.Context) {
		c.Writer.Header().Add("access-control-allow-origin", "*")
		c.Writer.Header().Add("access-control-allow-headers", "accept, content-type")
		c.Writer.Header().Add("access-control-allow-methods", "GET,HEAD,POST,DELETE,OPTIONS,PUT,PATCH")
	}

	verify, authorize := AuthProvider()

	routes := gin.New()
	routes.Use(cors)

	routes.GET("/", verify, Home(docroot))
	routes.GET("/salesforce/callback", authorize)

	routes.GET("/check/redis", CheckRedis)
	routes.GET("/check/cors", CheckCors)

	routes.Static("/js", docroot+"/js")
	routes.Static("/dev", docroot+"/dev")
	routes.Static("/styles", docroot+"/styles")

	return routes
}

func LoadTemplate(docroot, path string) *template.Template {
	log.Printf("loading template, %s\n", path)
	return template.Must(template.ParseFiles(docroot + path))
}

func Home(docroot string) gin.HandlerFunc {
	home := LoadTemplate(docroot, "/index.html")

	return func(c *gin.Context) {
		if !cfg.IsProduction {
			// in development mode reload the template
			home = LoadTemplate(docroot, "/index.html")
		}

		userId, _ := c.Get(UserId)
		home.Execute(c.Writer, Config{
			IsProduction:       cfg.IsProduction,
			PubNubPublishKey:   cfg.PubNubPublishKey,
			PubNubSubscribeKey: cfg.PubNubSubscribeKey,
			UserId:             userId.(string),
		})
	}
}

func Fail(w http.ResponseWriter, err error) {
	w.WriteHeader(500)
	w.Write([]byte(err.Error()))
}

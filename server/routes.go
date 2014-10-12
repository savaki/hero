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

	routes := gin.Default()
	routes.Use(cors) // uncomment this if we use salesforce

	routes.GET("/", verify, Page(docroot, "/index.html"))
	routes.GET("/provider/", verify, Page(docroot, "/provider/index.html"))
	routes.GET("/salesforce/callback", authorize)
	routes.POST("/api/requests", verify, CreateRequest())
	routes.GET("/api/requests", verify, FindAllRequests)
	routes.GET("/api/requests/open", verify, FindOpenRequests)

	routes.GET("/check/redis", CheckRedis)
	routes.GET("/check/cors", CheckCors)

	routes.Static("/provider/js", docroot+"/provider/js")
	routes.Static("/provider/dev", docroot+"/provider/dev")
	routes.Static("/js", docroot+"/js")
	routes.Static("/dev", docroot+"/dev")
	routes.Static("/styles", docroot+"/styles")
	routes.Static("/images", docroot+"/images")

	return routes
}

func LoadTemplate(docroot, path string) *template.Template {
	log.Printf("loading template, %s\n", path)
	return template.Must(template.ParseFiles(docroot + path))
}

func Page(docroot, path string) gin.HandlerFunc {
	home := LoadTemplate(docroot, path)

	return func(c *gin.Context) {
		if !cfg.IsProduction {
			// in development mode reload the template
			home = LoadTemplate(docroot, path)
		}

		userId, err := c.Get(UserId)
		if err != nil {
			Fail(c.Writer, err)
			return
		}

		name := ""
		if v, err := c.Get(Name); err == nil {
			name = v.(string)
		}

		phone := ""
		if v, err := c.Get(Phone); err == nil {
			phone = v.(string)
		}

		image := ""
		if v, err := c.Get(Image); err == nil {
			image = v.(string)
		}

		home.Execute(c.Writer, Config{
			IsProduction:       cfg.IsProduction,
			PubNubPublishKey:   cfg.PubNubPublishKey,
			PubNubSubscribeKey: cfg.PubNubSubscribeKey,
			UserId:             userId.(string),
			Name:               name,
			Image:              image,
			Phone:              phone,
		})
	}
}

func Fail(w http.ResponseWriter, err error) {
	log.Println(err)
	w.WriteHeader(500)
	w.Write([]byte(err.Error()))
}

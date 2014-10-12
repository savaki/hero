package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

func CreateRequest(c *gin.Context) {
	input := map[string]interface{}{}
	if c.Bind(&input) {
		log.Println(c)
		c.JSON(200, input)
	}
}

func FindAllRequests(c *gin.Context) {
	c.JSON(200, map[string]string{"status": "ok"})
}

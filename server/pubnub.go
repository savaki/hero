package main

import (
	"github.com/gin-gonic/gin"
	"github.com/pubnub/go/messaging"
	"log"
)

type Note struct {
	Author  string `json:"author"`
	Comment string `json:"comment"`
}

type Request struct {
	Id          string `json:"id"`
	RequestedBy string `json:"requested-by"`
	Notes       []Note `json:"notes"`
	TaskType    string `json:"task-type"`
}

func CreateRequest() gin.HandlerFunc {
	callbackChannel := make(chan []byte, 1024)
	go func() {
		for data := range callbackChannel {
			log.Println(string(data))
		}
	}()

	errorChannel := make(chan []byte, 1024)
	go func() {
		for data := range callbackChannel {
			log.Println(string(data))
		}
	}()

	return func(c*gin.Context) {
		input := Request{}
		if c.Bind(&input) {
			pubnub := messaging.NewPubnub(cfg.PubNubPublishKey, cfg.PubNubSubscribeKey, cfg.PubNubSecretKey, "", true, "")
			pubnub.Publish("request", input, callbackChannel, errorChannel)

			log.Println(c)
			c.JSON(200, input)
		}
	}
}

func FindAllRequests(c *gin.Context) {
	c.JSON(200, map[string]string{"status": "ok"})
}

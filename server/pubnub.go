package main

import (
	"github.com/gin-gonic/gin"
	"github.com/pubnub/go/messaging"
	"github.com/savaki/hero/server/dao"
	"log"
)

type Note struct {
	Author  string `json:"author"`
	Comment string `json:"comment"`
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

	return func(c *gin.Context) {
		request := dao.Request{}
		if c.Bind(&request) {
			pubnub := messaging.NewPubnub(cfg.PubNubPublishKey, cfg.PubNubSubscribeKey, cfg.PubNubSecretKey, "", true, "")
			pubnub.Publish("request", request, callbackChannel, errorChannel)

			_, err := dao.CreateRequest(&request)
			if err != nil {
				Fail(c.Writer, err)
				return
			}

			log.Println(c)
			c.JSON(200, request)
		}
	}
}

func FindAllRequests(c *gin.Context) {
	userId, err := c.Get(UserId)
	if err != nil {
		Fail(c.Writer, err)
		return
	}

	requests, err := dao.FindAllRequest(userId.(string))
	if err != nil {
		Fail(c.Writer, err)
		return
	}

	c.JSON(200, requests)
}

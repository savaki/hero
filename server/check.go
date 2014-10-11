package main

import (
	"github.com/gin-gonic/gin"
	"github.com/soveran/redisurl"
	"io"
	"os"
	"time"
)

func CheckRedis(c *gin.Context) {
	conn, err := redisurl.ConnectToURL(os.Getenv("REDISCLOUD_URL"))
	if err != nil {
		Fail(c.Writer, err)
		return
	}
	defer conn.Close()

	// retrieve the previous value
	key := "redis-check"
	v, err := conn.Do("GET", key)
	if err != nil {
		Fail(c.Writer, err)
		return
	}

	// sets the new value
	_, err = conn.Do("SET", key, time.Now().String())
	if err != nil {
		Fail(c.Writer, err)
		return
	}

	// simple form for fastly to not cache
	c.Writer.Header().Set("Cache-Control", "private")

	c.Writer.WriteHeader(200)
	io.WriteString(c.Writer, string(v.([]byte)))
}

func CheckCors(c *gin.Context) {
	c.JSON(200, map[string]string{"status": "ok"})
}

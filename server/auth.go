package main

import (
	"github.com/boj/redistore"
	"github.com/gin-gonic/gin"
	"github.com/savaki/salesforce-oauth"
	"log"
	"net/url"
	"os"
)

const (
	CookieName    = "hero-session"
	sessionUserId = "userId"
)

func AuthProvider() (verify, authorize gin.HandlerFunc) {
	sessionSecret := os.Getenv("HERO_SESSION_SECRET")
	if sessionSecret == "" {
		log.Fatalln("HERO_SESSION_SECRET not defined")
	}

	address, password := ParseRedistogoUrl()
	store, err := redistore.NewRediStore(2048, "tcp", address, password, []byte(sessionSecret))
	if err != nil {
		log.Fatalln(err)
	}

	sfdc := &oauth.OAuth{
		ConsumerKey:    os.Getenv("SFDC_CONSUMER_KEY"),
		ConsumerSecret: os.Getenv("SFDC_CONSUMER_SECRET"),
		RedirectUri:    os.Getenv("SFDC_REDIRECT_URL"),
	}

	verify = func(c *gin.Context) {
		session, err := store.Get(c.Request, CookieName)
		if err != nil {
			log.Println(err)
		}
		defer session.Save(c.Request, c.Writer)

		if session.Values[sessionUserId] == nil {
			log.Println("no session id, sending to oauth login")
			c.Redirect(302, sfdc.Url("touch"))
			return
		}

		c.Next()
	}

	authorize = func(c *gin.Context) {
		form := struct {
			Code string `form:"code" json:"code"`
		}{}

		if c.Bind(&form) {
			log.Println("retrieving salesforce token")
			token, err := sfdc.FetchToken(form.Code)
			if err != nil {
				Fail(c.Writer, err)
				return
			}

			// create a new session for this user
			log.Println("creating new user session")
			session, err := store.New(c.Request, CookieName)
			if err != nil {
				Fail(c.Writer, err)
				return
			}

			log.Println("saving session data")
			session.Values[sessionUserId] = token.Id
			session.Save(c.Request, c.Writer)

			c.Redirect(302, "/")
		}
	}

	return
}

func ParseRedistogoUrl() (string, string) {
	redisUrl := os.Getenv("REDISCLOUD_URL")
	if redisUrl == "" {
		log.Fatalln("REDISCLOUD_URL not defined")
	}

	redisInfo, _ := url.Parse(redisUrl)
	address := redisInfo.Host
	password := ""
	if redisInfo.User != nil {
		password, _ = redisInfo.User.Password()
	}
	return address, password
}

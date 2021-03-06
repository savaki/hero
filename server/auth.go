package main

import (
	"github.com/boj/redistore"
	"github.com/gin-gonic/gin"
	"github.com/savaki/hero/server/dao"
	"github.com/savaki/salesforce-oauth"
	"log"
	"net/url"
	"os"
)

const (
	CookieName  = "hero-session"
	UserId      = "userId"
	Name        = "name"
	Image       = "image"
	Phone       = "phone"
	AccessToken = "accessToken"
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

		if session.Values[UserId] == nil {
			location := sfdc.Url("touch")
			log.Println("no session id, sending to oauth login =>", location)
			c.Redirect(302, location)
			c.Abort(302)
			return
		}

		c.Set(UserId, session.Values[UserId])
		c.Set(AccessToken, session.Values[AccessToken])
		c.Set(Name, session.Values[Name])
		c.Set(Image, session.Values[Image])
		c.Set(Phone, session.Values[Phone])

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

			user, _ := dao.FindUserBySfdcId(token.Id)
			if user != nil {
				log.Println("saving user data")
				session.Values[Name] = user.Name
				session.Values[Phone] = user.Phone
				session.Values[Image] = user.Image
			}

			log.Println("saving session data")
			session.Values[UserId] = token.Id
			session.Values[AccessToken] = token.AccessToken
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

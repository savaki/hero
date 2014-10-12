package dao

import (
	"code.google.com/p/go-uuid/uuid"
	"database/sql"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"log"
	"os"
	"time"
)

var (
	dataSourceName = os.Getenv("DATABASE_URL")
)

func Open() (*sql.DB, error) {
	return sql.Open("postgres", dataSourceName)
}

type Request struct {
	Id          string    `json:"id"           db:"id"`
	UserId      string    `json:"user-id"      db:"user_id"`
	ProviderId  string    `json:"provider-id"  db:"provider_id"`
	Status      string    `json:"status"       db:"status"`
	RequestType *string   `json:"request-type" db:"request_type"`
	Description *string   `json:"description"  db:"description"`
	CreatedAt   time.Time `json:"created-at"   db:"created_at"`
}

func CreateRequest(request *Request) (string, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return "", err
	}
	defer db.Close()

	id := uuid.New()
	request.Id = id
	request.CreatedAt = time.Now()

	_, err = db.Exec(`
		insert into requests 
			(id, user_id, provider_id, status, created_at, request_type, description)
		values 
			($1, $2, $3, $4, $5, $6, $7)`,
		request.Id, request.UserId, request.ProviderId, request.Status, request.CreatedAt, request.RequestType, request.Description)
	return id, err
}

func UpdateRequest(request *Request) error {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec(`update requests set status = $1 where id = $2`, request.Status, request.Id)
	return err
}

func FindOpenRequests() ([]Request, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return nil, err
	}
	defer db.Close()

	requests := []Request{}
	err = db.Select(&requests, "select id, user_id, provider_id, status, created_at, request_type, description from requests where status = 'submitted' order by created_at desc limit 5")
	return requests, err
}

func FindAllRequest(userId string) ([]Request, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return nil, err
	}
	defer db.Close()

	requests := []Request{}
	err = db.Select(&requests, "select id, user_id, provider_id, status, created_at, request_type, description from requests where user_id = $1 order by created_at desc", userId)
	return requests, err
}

func CreateRating(rating *Rating) (string, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return "", err
	}
	defer db.Close()

	id := uuid.New()
	rating.Id = id
	rating.CreatedAt = time.Now()

	_, err = db.Exec(`
		insert into ratings 
			(id, user_id, role, rating, created_by, created_at) 
		values 
			($1, $2, $3, $4, $5, $6)`,
		rating.Id, rating.UserId, rating.Role, rating.Rating, rating.CreatedBy, rating.CreatedAt)
	return id, err
}

type Rating struct {
	Id        string    `db:"id"`
	UserId    string    `db:"user_id"`
	Role      string    `db:"role"`
	Rating    int       `db:"rating"`
	CreatedBy string    `db:"created_by"`
	CreatedAt time.Time `db:"created_at"`
}

type User struct {
	Id     string `db:"id"`
	UserId string `db:"sfdc_id"`
	Name   string `db:"name"`
	Phone  string `db:"phone"`
	Image  string `db:"image"`
}

func FindUserBySfdcId(sfdcId string) (*User, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		log.Printf("unable to connect to db => %v\n", err)
		return nil, err
	}
	defer db.Close()

	user := User{}
	err = db.Get(&user, "select id, sfdc_id, name, phone, image from users where sfdc_id = $1", sfdcId)
	if err != nil {
		log.Printf("get failed => %v\n", err)
		return nil, err
	}

	log.Printf("found user %#v\n", user)
	return &user, nil
}

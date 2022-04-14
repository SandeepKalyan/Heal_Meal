package config

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateConn() *mongo.Client {
	mClient, err := mongo.NewClient(options.Client().ApplyURI(GetMongoURI()))
	if err != nil {
		log.Fatal(err)
	}

	con, _ := context.WithTimeout(context.Background(), 15*time.Second)
	err = mClient.Connect(con)

	if err != nil {
		log.Fatal(err)
	}

	err = mClient.Ping(con, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connection to MongoDB has been established successfully.")
	return mClient
}

var MClient *mongo.Client = CreateConn()

func GetCollection(mClient *mongo.Client, cN string) *mongo.Collection {
	c := mClient.Database("golangAPI").Collection(cN)
	return c
}
package main

import (
	"backend/database"
	"github.com/gofiber/fiber/v2"
	"backend/routes"
)

func main(){
	database.Connect()
	app := fiber.New()	
	routes.Setup(app)
	app.Listen(":8000")
}
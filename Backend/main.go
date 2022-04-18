package main

import (
	"backend/database"
	"github.com/gofiber/fiber"
	"backend/routes"
	"backend/controllers"
)

func main(){
	database.Connect()

	app := fiber.New()

	routes.Setup(app)
}


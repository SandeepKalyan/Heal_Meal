package controllers

import (
	"backend/models"
	"backend/database"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)


func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {return err}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]),14)

	user:= models.User{
		Name: data["name"],
		Email: data["email"],
		Password: password,
	}
	database.DB.Create(&user)

	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {return err}
	var user models.User

	database.DB.Where("email=?",data["email"]).First(&user)

	//Check if user id exists in the database, return error message if not
	if user.ID==0{
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message" : "user not found",
		})
	}

	//check if password matches the one in the database, return error message if not
	if err := bcrypt.CompareHashAndPassword(user.Password,[]byte(data["password"])); err != nil{
		c.Status(fiber.StatusBadRequest) 
		return c.JSON(fiber.Map{
			"message" : "incorrect password",
		})
	} 

	return c.JSON(user)
}
package controllers

import (
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {return err}

	user:=models.User{
		Name: data["sandeep"],
		Email: data["vvsvsk.1201@gmail.com"],
		Password: data["SanDeeP@12"],
	}

	return c.JSON(data)
}

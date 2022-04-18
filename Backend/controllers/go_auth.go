package controllers

import (
	"backend/database"
	"backend/models"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

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
	
	// Bind the input JSON to the data map 
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
	//return User Json	
	//return c.JSON(user)
	
	//claims is the new jwt token using encryption method and standard props
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256,jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.ID)),
		ExpiresAt: time.Now().Add(time.Hour *24).Unix(),
	})

	//Encrypt the token to a string froma given keyword
	token, err := claims.SignedString([]byte(SecretKey))

	//error handling if token is not created
	if err != nil {
		c.Status(fiber.StatusInternalServerError) 
		return c.JSON(fiber.Map{
			"message" : "could not log in",
		})
	}

	//create a cookie with props of the token and expiry time
	cookie := fiber.Cookie{
		Name: "jwt",
		Value : token,
		Expires: time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message" : "success",
	})
}

func User(c *fiber.Ctx) error  {
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	}) 

	if err!= nil {
		c.Status(fiber.StatusUnauthorized) 
		return c.JSON(fiber.Map{
			"message" : "Unauthenticated",
		})
	}

	claims := token.Claims

	return c.JSON(claims)

}
package controllers

import (
	"backend/database"
	"backend/models"
	"encoding/json"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

func AddToCart(c *fiber.Ctx) error {
	//get the user_________________________
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)

	////Received the user---step 2 is to get the product from the received data__________________
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {return err}

	var prod models.Product
	database.DB.Table("products").Where("name = ?", data["name"]).First(&prod)

	////Received the product---step 3 append the user cart with the product_______

	cart := make([]models.Product,0)
	json.Unmarshal(user.Cart, &cart)
	
	user.Cart,err = json.Marshal(append(cart,prod))
	if err != nil {
		log.Fatal(err)
		return err
	}
	database.DB.Save(&user)

	return c.JSON(fiber.Map{
		"message" : "successfully added to cart",
	})
}

func ClearCart(c *fiber.Ctx) error {
	//get the user_________________________
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)	

	////Received the user now clear his cart_______
	var cart []models.Product 
	cart_json,err := json.Marshal(cart)
	if err!=nil{
		log.Fatal("Cannot jsonify!")
	}
	user.Cart = cart_json

	database.DB.Save(&user)

	return c.JSON(fiber.Map{
		"message" : "successfully cleared cart",
	})
}

func BuyFromCart(c *fiber.Ctx) error {
	//get the user_________________________
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)	

	////Received the user now clear his cart_______
	cart := make([]models.Product,0)
	json.Unmarshal(user.Cart, &cart)

	orders := make([][]models.Product,0)
	json.Unmarshal(user.Orders, &orders)
	orders_json,err := json.Marshal(append(orders,cart))
	if err!=nil{
		log.Fatal("Cannot jsonify!")
	}
	cart_json,err := json.Marshal(make([]models.Product,0))
	if err!=nil{
		log.Fatal("Cannot jsonify!")
	}

	user.Orders = orders_json
	user.Cart = cart_json


	database.DB.Save(&user)

	return c.JSON(fiber.Map{
		"message" : "successfully Ordered Cart",
	})
}

func Cart(c *fiber.Ctx) error {
	//get the user_________________________
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)

	return c.JSON(user.Cart)
}

func Order(c *fiber.Ctx) error {
	//get the user_________________________
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)

	return c.JSON(user.Orders)
}

func ClearOrders (c *fiber.Ctx) error{
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
	//custom token only have a valid function, so need to type cast it to standardClaims (pointer) -> only the type to be casted is mentioned.
	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Table("users").Where("id = ?",claims.Issuer).First(&user)	

	////Received the user now clear his cart_______
	order := make([][]models.Product,0)
	order_json,err := json.Marshal(order)
	if err !=nil{
		log.Fatal(err)
	}
	user.Orders = order_json

	database.DB.Save(&user)

	return c.JSON(fiber.Map{
		"message" : "successfully cleared Orders",
	})
}

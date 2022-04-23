package routes

import (
	"backend/controllers"

	"github.com/gofiber/fiber/v2"
)
func Setup(app *fiber.App){
	app.Post("/api/register",controllers.Register)
	app.Post("api/login", controllers.Login)
	app.Get("api/user",controllers.User)
	app.Post("api/logout",controllers.Logout)
	app.Post("/api/addtocart",controllers.AddToCart)
	app.Post("/api/clearcart",controllers.ClearCart)
	app.Get("/api/getcart",controllers.Cart)
	app.Post("/api/buycart",controllers.BuyFromCart)
}
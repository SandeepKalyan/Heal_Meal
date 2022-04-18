package routes

import(
	"github.com/gofiber/fiber"
	"/Users/sandy/Desktop/Heal_Meal/backend/controllers/authController"
)

func Setup(app *fiber.App){

	app.Get("backend/" , controllers.Hello)
}
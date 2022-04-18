package database

import(
	"backend/models"
	"gorm.io/gorm"
	"gorm.io/driver/mysql"
)
var DB *gorm.DB

func Connect(){
	connection, err := gorm.Open(mysql.Open("root:sandeep12@/go_auth"), &gorm.Config{})

	if err != nil{
		panic("couldn't connect")
	}
	DB = connection
	connection.AutoMigrate(&models.User{})

}
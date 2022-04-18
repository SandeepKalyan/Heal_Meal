package database

import(
	"gorm.io/gorm"
	"gorm.io/driver/mysql"
)

func Connect(){
	_ , err := gorm.Open(mysql.Open("root:sandeep12@/go_auth"), &gorm.Config{})

	if err != nil {
		panic("error connecting")
	}	
}

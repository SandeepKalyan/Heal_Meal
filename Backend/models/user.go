package models

import "gorm.io/datatypes"

type User struct{
	ID uint `json:"id"`
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Email string `json:"email" gorm:"unique"`
	Password []byte `json:"password"`
	Cart datatypes.JSON
	Orders datatypes.JSON
}
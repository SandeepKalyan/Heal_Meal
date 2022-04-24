package models


type Product struct{
	ID uint `json:"id"`
	Name string `json:"name" gorm:"unique"`
	Price uint `json:"price" gorm:"default:3"`
	Image string `json:"url"`
}
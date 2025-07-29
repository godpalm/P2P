package entity

import (
	"time"

	"gorm.io/gorm"
)

type Users struct {
	gorm.Model

	FirstName string `json:"first_name"`

	LastName string `json:"last_name"`

	Email string `json:"email"`

	Age uint8 `json:"age"`

	Password string `json:"-"`

	BirthDay time.Time `json:"birthday"`
}

package config

import (
	"fmt"

	"time"

	"p2p/entity"

	"gorm.io/driver/sqlite"

	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {

	return db

}

func ConnectionDB() {

	database, err := gorm.Open(sqlite.Open("sa.db?cache=shared"), &gorm.Config{})

	if err != nil {

		panic("failed to connect database")

	}

	fmt.Println("connected database")

	db = database

}

func SetupDatabase() {

	db.AutoMigrate(

		&entity.Users{},
	)

	hashedPassword, _ := HashPassword("123456")

	BirthDay, _ := time.Parse("2006-01-02", "1988-11-12")

	User := &entity.Users{

		FirstName: "Software",

		LastName: "Analysis",

		Email: "sa@gmail.com",

		Age: 80,

		Password: hashedPassword,

		BirthDay: BirthDay,
	}

	db.FirstOrCreate(User, &entity.Users{

		Email: "sa@gmail.com",
	})

}

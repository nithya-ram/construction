package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	r.LoadHTMLFiles("index.html")

	r.Static("/assets", "./assets")

	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{})
	})

	r.Run(":8080")
}

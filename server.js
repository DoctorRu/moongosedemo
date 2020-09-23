var express = require('express')
var app = express()

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

var productRouter = require('./productController')
app.use('/productapi', productRouter)


app.listen(8000, (err) => {
    if(err) console.log(err)
    console.log("Application Started on port 8000")
})
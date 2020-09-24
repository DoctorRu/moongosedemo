var express = require('express')
var app = express()
var properties = require('../config/properties')
var db = require('../config/db')
db();

var productRoutes = require('./product/product.routes')

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

var productRouter = express.Router()
productRoutes(productRouter)

app.use('/productapi', productRouter)


app.listen(properties.PORT, (err) => {
    if(err) console.log(err)
    console.log("Application Started on port 8000")
})
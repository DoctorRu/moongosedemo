var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/products')

var productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

var Product = mongoose.model("Product", productSchema)

router.get('/',(req, res)=> {
    res.send("Product API")
})

router.post('/products', (req, res) => {
    var product = new Product(req.body)

    product.save().then(product => {
        res.send(product)
    }).catch(err => {
        console.log(err)
    })
})

router.get('/products', (req, res) => {
    Product.find((err,products) => {
        if(err) console.log(err)

        res.send(products)
    })
})

router.get('/products/:id', (req, res) => {
    Product.findById(req.params.id,(err,product) => {
        if(err) console.log(err)

        res.send(product)
    })    
})

router.put('/products/:id', (req, res) => {
    var product = {
        "name": req.body.name,
        "price": req.body.price
    }

    Product.findByIdAndUpdate({_id: req.params.id}, {$set: product}, (err, result) => {
        if(err) console.log(err)

        res.send("Product updated")
    })
})

router.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete({_id: req.params.id}, (err, result) => {
        if(err) console.log(err)

        res.send("Product deleted!")
    })
})


module.exports = router
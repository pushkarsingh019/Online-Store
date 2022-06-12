const express = require("express");
const products = require("./data/data.js")

const PORT = 5000;

const app = express();

app.route('/')
.get((req,res) => {
    res.send("Api is up and running...");
})

app.route('/api/products')
.get((req, res) => {
    res.json(products);
})

app.route('/api/products/:productId')
.get((req, res) => {
    let productId = req.params.productId;

    let product = products.find((p) => p._id === productId)

    res.json(product);
})



app.listen(PORT, console.log(`server connected on port ${PORT}`))
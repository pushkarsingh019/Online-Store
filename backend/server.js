import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/database.js";

import products from "./data/data.js"

dotenv.config();

const PORT = process.env.PORT;

const app = express();

connectDB();

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



app.listen(PORT, console.log(`server running in  ${process.env.MODE} mode on port ${PORT}`))
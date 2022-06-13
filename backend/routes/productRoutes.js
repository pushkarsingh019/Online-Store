import express from "express";
import Product from "../models/productModel.js"

const Router = express.Router();

Router.get('/', (req, res) => {
    Product.find({}, (err, products) => {
        if(err){
            console.log(`Error : ${err.message}`)
            res.status(404).json({message : "failed to fetch products"});
        }
        else {
            res.json(products);
        }
    })
})

Router.get('/:productId', (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if(err){
            res.status(404).json({message : "product not found"});
        }
        else {
            res.json(product);
        }
    })
})

export default Router;
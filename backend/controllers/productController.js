import Product from "../models/productModel.js";

export function getProducts(req, res){
    Product.find({}, (err, products) => {
        if(err){
            res.json({message : `${err.message}`})
        }
        else {
            res.json(products);
        }
    })
}
export function getProductById(req, res) {
    const productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if(err){
            res.json({message  : err.message});
        }
        else {
            res.json(product);
        }
    })
}


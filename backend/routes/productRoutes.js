import express from "express";
import { getProducts, getProductById } from "../controllers/productController.js";

const Router = express.Router();

Router.route('/').get(getProducts);


Router.route('/:productId')
.get(getProductById);

export default Router;
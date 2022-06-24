import express from "express";
import { createOrder, getOrderById } from "../controllers/orderControllers.js";
import authenticateUser from "../middleware/authenticationMiddleware.js";

const Router = express.Router();

Router.route('/')
.post(authenticateUser , createOrder);

Router.route('/:orderId')
.get(authenticateUser, getOrderById)

export default Router
import express from "express";
import { createOrder } from "../controllers/orderControllers.js";
import authenticateUser from "../middleware/authenticationMiddleware.js";

const Router = express.Router();

Router.route('/')
.post(authenticateUser , createOrder);

export default Router
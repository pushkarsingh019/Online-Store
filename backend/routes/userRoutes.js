import express from "express";
import { userLogin } from "../controllers/userController.js";

const Router = express.Router();

Router.post('/login', userLogin);

export default Router;
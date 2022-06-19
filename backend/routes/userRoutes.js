import express from "express";
import { userLogin, getProfile } from "../controllers/userController.js";
import authenticateUser from "../middleware/authenticationMiddleware.js";

const Router = express.Router();

Router.post('/login', userLogin);

Router.route('/profile')
.get(authenticateUser,getProfile)

export default Router;
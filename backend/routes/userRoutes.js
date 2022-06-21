import express from "express";
import { userLogin, getProfile, addUser, updateUser, getUsers } from "../controllers/userController.js";
import authenticateUser, { updateUserAuthentication } from "../middleware/authenticationMiddleware.js";

const Router = express.Router();

Router.route('/')
.get(getUsers)
.post(addUser)
.put(updateUser)

Router.post('/login', userLogin);

Router.route('/profile')
.get(authenticateUser,getProfile)

export default Router;
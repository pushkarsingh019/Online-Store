import jwt, { decode } from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

export default function authenticateUser(req, res, next){
    let rawToken = req.headers.authorization;
    let TOKEN = rawToken.split(' ')[1];
    let decoded;
    
    
    decoded = jwt.verify(TOKEN, "authentication");
    

    User.findById({_id : decoded.id}, (err, user) => {
        if(err){
            res.status(500).json({"message" : err.nessage})
        }
        else {
            let userObject = user;
            req.id = userObject._id;

            next();
        }
    })
}
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

export default function authenticateUser(req, res, next){
    console.log("in the authentication function");
    let rawToken = req.headers.authorization;
    let TOKEN;
    TOKEN = rawToken.split(" ")[1];

    let decoded;
    console.log(TOKEN);
    
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

export function updateUserAuthentication(token){
    const decoded = jwt.verify(token, "authentication");
    let _id = decoded.id;

    return _id;
}
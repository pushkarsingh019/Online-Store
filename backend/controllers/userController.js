import User from "../models/userModel.js";
import bycrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import express from "express";

export function userLogin(req, res){

    let {email, password} = req.body;

    User.find({email : email}, (err, user) => {

        const userData = user[0];

        if(err){
            console.log("error occured");
        }
        else {
            if(user.length === 0){
                res.json({"message" : "user does not exists"}).status(401);
            }
            else {
                if(bycrypt.compareSync(password, userData.password)){
                    res.send({
                        id : userData._id,
                        name : userData.name,
                        isAdmin : userData.isAdmin,
                        password : userData.password,
                        token : generateToken(userData._id)
                    });
                }
                else{
                    res.json({"message" : "Wrong password", "email" : email}).status(401);
                }
            }
        }
    }) 
}

export function getProfile(req, res){
    let id  = req.id;
    User.findById({_id : id}, (err, user) => {
        if(err){
            res.status(404).json({"message" : "error occured"})
        }
        else {
            res.json(user);
        }
    })
}

export function addUser(req, res){
    let {name, email, password} = req.body;
    password = bycrypt.hashSync(password, 3);
    const newUser = new User({
        name : name, 
        email : email,
        password : password
    })

    newUser.save();

    res.json(newUser);
}
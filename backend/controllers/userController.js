import User from "../models/userModel.js";
import bycrypt from "bcryptjs";

export function userLogin(req, res){

    let {email, password} = req.body;

    User.find({email : email}, (err, user) => {
        if(err){
            console.log("error occured");
        }
        else {
            if(user.length === 0){
                res.json({"message" : "user does not exists"})
            }
            else {
                if(bycrypt.compareSync(password, user[0].password)){
                    res.json(user)
                }
                else{
                    res.json({"message" : "Wrong password", "email" : email})
                }
            }
        }
    }) 
}
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function generateToken(id){
    return (
        jwt.sign({id : id}, "authentication", {
            expiresIn : "30d"
        })
    )
}

export default generateToken;
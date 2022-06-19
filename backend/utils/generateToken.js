import jwt from "jsonwebtoken";

function generateToken(id){
    return (
        jwt.sign({id : id}, "authentication", {
            expiresIn : "30d"
        })
    )
}

export default generateToken;
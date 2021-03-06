import connectDB from "./config/database.js";
import users from "./data/users.js";
import products from "./data/data.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js"
import Order from "./models/orderModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
connectDB();


const importData = async () => {
    console.log("import function activated")
    try {

        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();

        const addedUsers = await User.insertMany(users);

        const adminUserId = addedUsers[0]._id;

        const addProducts = products.map((product) => {
            return {...product, user : adminUserId}
        })

        await Product.insertMany(addProducts);

        console.log("Products added !")
        
    } catch (error) {
        console.log(`Error  : ${error.message}`);
    }
}

const deleteData = async () => {
    console.log("deleted function activated")
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log("Deleted Succesfully!")

        process.exit();
    } catch (error) {
        
        console.log(`Error  : ${error.message}`);
    }
}


process.argv[2] === '-d'?deleteData() : importData();
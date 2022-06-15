import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/database.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use('/api/products', productRoutes);

connectDB();


app.route('/')
.get((req,res) => {
    res.send("Api is up and running...");
})




app.listen(PORT, console.log(`server running in  ${process.env.MODE} mode on port ${PORT}`))
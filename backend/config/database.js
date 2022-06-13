import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/onlineShop";

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(MONGO_URL);

        console.log(`MongoDb Connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Did not connect to database : ${error.message}`)
        process.exit(1);
    }
}

export default connectDB;
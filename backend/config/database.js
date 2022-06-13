import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`MongoDb Connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Did not connect to database : ${error.message}`)
        process.exit(1);
    }
}

export default connectDB;
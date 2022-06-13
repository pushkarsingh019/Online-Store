import mongoose, { mongo } from "mongoose";
import reviewSchema from "./reviewModel.js";

const productSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
        default : "This is a product"
    },
    brand : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true,
        default : "General"
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    countInStock : {
        type : Number,
        required : true,
        default : 0
    },
    rating : {
        type : Number,
        required : true,
        default : 0
    },
    numReviews : {
        type : Number,
        required : true
    },
    reviews : [reviewSchema]

}, {
    timestamps: true
})


const Product = mongoose.model('Product', productSchema);

export default Product;
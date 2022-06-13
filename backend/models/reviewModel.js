import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name : {type : String, required : true},
    rating : {type : Number, required : true},
    review : {type : String}
}, {
    timestamps : true
})


// const Review = mongoosem.model('Review', reviewSchema);

export default reviewSchema;
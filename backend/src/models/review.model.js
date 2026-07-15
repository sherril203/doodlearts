const mongoose=require('mongoose')
const ReviewSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    reviews:{type:String}
})
const ReviewModel= mongoose.model('review',ReviewSchema)
module.exports={ReviewModel}
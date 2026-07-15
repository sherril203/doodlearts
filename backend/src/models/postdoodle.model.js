const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    date:{type:Date},
    published_by:{type:String}
})
const postModel= mongoose.model('doodleform',postSchema)
module.exports={postModel}
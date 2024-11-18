const mongoose =require('mongoose')
const ToyotaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})
const Toyota=mongoose.model("Toyota",ToyotaSchema)
module.exports=Toyota
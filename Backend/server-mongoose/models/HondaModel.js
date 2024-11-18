const mongoose =require('mongoose')
const HondaSchema=new mongoose.Schema({
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
const Honda=mongoose.model("Honda",HondaSchema)
module.exports=Honda
const mongoose =require('mongoose')
const VolkswagenSchema=new mongoose.Schema({
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
const Volkswagen=mongoose.model("Volkswagen",VolkswagenSchema)
module.exports=Volkswagen
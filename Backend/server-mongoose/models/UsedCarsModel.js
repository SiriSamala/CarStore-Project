const mongoose=require('mongoose')
const UsedCarsSchema=new mongoose.Schema({
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
    },
    yearsUsed:{
        type:Number,
        required:true
    }
})
const UsedCars=mongoose.model("Usedcars",UsedCarsSchema)
module.exports=UsedCars
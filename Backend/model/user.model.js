const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user","admin","doctor"]
    }
})

const userModel=mongoose.model("user",userSchema)

module.exports={userModel}
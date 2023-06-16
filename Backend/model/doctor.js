const mongoose=require("mongoose")
const doctorSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialist: {
        type: String,
        enum:["cat","dog","horse","fish","rabbit"],
        required: true,
    },
    img:{
        type:String,
        required:true
    },
    bio: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    experience:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        required: true,
    }
    
},{
    versionKey:false
})

const DocModel=mongoose.model("Doctor",doctorSchema)

module.exports={DocModel}
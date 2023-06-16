const mongoose=require("mongoose")
require("dotenv").config();

const connection1=mongoose.connect(process.env.venkat_mongoDB)

module.exports={connection1}
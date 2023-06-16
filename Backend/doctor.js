const express=require("express");
const {connection1} = require("./config/doctorDB");
const {docRouter} = require("./routes/doctorRoutes")

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/doctor",docRouter);

app.listen(process.env.docPort,async(req,res)=>{
    try{
        await connection1
        console.log("server connected")
    }catch(err){
        console.log(err)
    }
})


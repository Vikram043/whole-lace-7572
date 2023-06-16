const express = require("express");
const {DocModel} = require("../model/doctor")
const docRouter = express.Router();




docRouter.get("/", async (req, res) => {
    try{
        let docDetails= await DocModel.find();
        res.status(200).send(docDetails)
    }catch(err){
        res.status(400).send(err)
    }
});

docRouter.post("/add",async(req,res)=>{
    const {name,specialist,img,bio,email,experience,rating}=req.body
    const product=new DocModel({name,specialist,img,bio,email,experience,rating})
    try{
        await product.save()
         res.status(200).send({"msg":"added"})
    }catch(err){
        res.status(400).send(err)
    }    
})


  module.exports={docRouter}
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

docRouter.patch("/update/:doctorId", async (req, res) => {
    const doctorId = req.params.doctorId;
    const payload = req.body;
    try {
        await DocModel.findByIdAndUpdate({ _id: doctorId },payload)
        res.status(200).send({ "msg": "Updated Succesfully!" })
    } catch (error) {
        res.status(400).send({ "msg": "error.message" })
    }
})

docRouter.delete("/delete/:doctorId", async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        await DocModel.findByIdAndDelete({ _id: doctorId })
        res.status(200).send({ "msg": "deleted Succesfully!" })
    } catch (error) {
        res.status(400).send({ "msg": "error.message" })
    }
})


  module.exports={docRouter}
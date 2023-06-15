const express=require("express")
const {connection}=require("./config/db")
const {clientRouter}=require("./routes/clientRoutes")
const app=express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("This server is basically for clients!");
  });

  app.use("/users", clientRouter);
app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("MongoDb is connected. Successfully!")
    } catch (error) {
        console.log(error)
        console.log("MongoDb is not connected. Please connect the first..")
    }
    console.log(`Server is running on port ${process.env.port}`)
})
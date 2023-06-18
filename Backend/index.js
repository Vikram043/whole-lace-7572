const express = require("express")
const { connection } = require("./config/db")
const { clientRouter } = require("./routes/clientRoutes")
const { docRouter } = require("./routes/doctorRoutes")
const { userRouter } = require("./routes/user.router")
const { authenticate } = require("./middleware/authentication")
const cookieParser = require('cookie-parser');

const app = express()
require("dotenv").config()

const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("This server is basically for clients!");
});

app.use(cookieParser());
app.use("/user", userRouter)
//app.use(authenticate)
app.use("/users", clientRouter);
app.use("/doctor", docRouter);

app.listen(process.env.port, async () => {

    try {
        await connection
        console.log("MongoDb is connected. Successfully!")
    } catch (error) {
        console.log(error)
        console.log("MongoDb is not connected. Please connect the first..")
    }
    console.log(`Server is running on port ${process.env.port}`)
})
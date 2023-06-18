const express = require("express")
const { userModel } = require("../model/user.model")
const{blacklistModel}=require("../model/blacklist.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userRouter = express.Router()



//..........Registation.............
userRouter.post("/register", async (req, res) => {
    const { name, email, pass,role } = req.body;

    try {
       bcrypt.hash(pass, 5, async function (err, hash) {
          if (err) {
             res.send({ "msg": "something went wrong", "error": err.message })
          } else {
                const user = new userModel({ name, email, pass: hash,role })
                await user.save()
                res.send({ "msg": "New user has been registered" })
          }

       });

    } catch (error) {
        res.send({ "msg": "something went wrong", "error": error.message })
    }

})


//...........Login................
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, function (err, result) {
              if (result) {
                 var token = jwt.sign({ userID:user[0]._id }, 'masai',{expiresIn:'1h'});
                    var refresh_token=jwt.sign({ userID:user[0]._id }, 'masai1',{expiresIn: '168h'})

                    //.....store token in cookies.......
                    res.cookie('token', token);
                    res.cookie('refresh_token', refresh_token);
                    //........................................................

                    res.send({ "msg": "Login successful", "token": token ,"refresh_token":refresh_token,"Username":user[0].name})
                } else {
                    res.send("wrong credentials")
                }
            });

        } else {
            res.send("wrong credentials")
        }
    } catch (error) {
        res.send({ "msg": "something went wrong", "error": error.message })
    }

})
///...............logout.............
userRouter.post('/logout', async (req, res) => {
    try {
      // Add token to blacklist collection
      const token = req.cookies.token;
      const blacklistedToken = new blacklistModel({ token });
      await blacklistedToken.save();
  
      res.status(200).send('Logged out successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
 });


  //...............refresh token.....................
  userRouter.get("/refresh-token",(req,res)=>{
     const refresh_token=req.cookies.refresh_token;

     if(!refresh_token){
         res.send({'msg':'pls login'})
     }else{
        jwt.verify(refresh_token,'masai1',(err,decoded)=>{
            if(err){
                res.send({'msg':'pls login'})
            }else{
                //create new simple token again
                var token = jwt.sign({ userID:decoded.userID }, 'masai',{expiresIn: '1h'});
                res.cookie('token', token);
                res.send({'msg':'login successfull','token':token})
            }
        })
     }
  })

  //..... google OAuth.......
  userRouter.get("/findgoogle", async (req, res) => {
    const email = req.body.email
    try {
        const user = await PostModel.findOne({ email })
        
        res.send(user)
    } catch (error) {
        res.status(401).send({ "msg": error.message })

    }
});

module.exports = { userRouter }


const authorise=(permittedRole)=>{
    return (req,res,next)=>{
        const user_role=req.user.role;
        if(permittedRole.includes(user_role)){
            next()
        }else{
            res.send({"msg":"Unauthorized"})
        }
    }
}

module.exports={authorise}

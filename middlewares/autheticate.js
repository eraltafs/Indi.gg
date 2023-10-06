const jwt = require("jsonwebtoken");
require("dotenv").config()

const authenticate = (req,res,next)=>{
    const token = req.headers.authenticate
    
    try {
        if(token){
            jwt.verify(token,process.env.jwtkey,(err,decoded)=>{
                if(decoded){
                    req.user=decoded
                    
                    next()
                }else{
                    console.log(err)
                    res.send("you are not authorised")
                }
            })
        }else{
            res.send("please login")
        }
        
    } catch (error) {
        console.log(error)
        res.send("server error")
    }
}

module.exports = {authenticate}
const jwt = require('jsonwebtoken')
const blacklistModel = require('../model/blacklist.model')

const authMiddleware = async (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"no token found,unautharised"
        })
    }
    const  blacklist = await  blacklistModel.findOne({token})
    if(blacklist){
        return res.status(401).json({
            message:"token is not valid"
        })
    }
    try{
    const decode =jwt.verify(token,process.env.JWT_SECRET)
    req.user = decode
    next()
    }
    catch(err){
        return res.status(401).json({
            message:"unautharised"
        })
    }
    }
    



module.exports = authMiddleware

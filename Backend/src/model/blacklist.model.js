const mongoose = require('mongoose')
const blacklist = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"this is required"],
        unique:true}},
        {
            timesatamp:true
        }

    
)
const blacklistModel = mongoose.model("blacklist",blacklist)
module.exports = blacklistModel;
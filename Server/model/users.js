const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email must be unique"]
    },
    password:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default: Date.now()
    },

})

module.exports=mongoose.model("Users", userSchema)
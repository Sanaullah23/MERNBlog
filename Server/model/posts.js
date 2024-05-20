const mongoose = require("mongoose");

const postSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
        
    },
    category:{
         type:String,

    },
    image:{
        type:String,
        
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
   

})

module.exports=mongoose.model("Posts", postSchema)
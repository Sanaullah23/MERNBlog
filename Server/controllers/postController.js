const Posts =require("../model/posts")

exports.getPosts= async(req, res)=>{
    
    try {
        const allposts= await Posts.find();
        if (allposts.length==0) {
            res.status(404).json({
                message:"Posts Not Found",
                sucess:false

            })
        }else{
            res.status(200).json({
                message:"All Posts",
                sucess:true,
                posts:allposts

            })
        }
   
    } catch (error) {
        res.status(500).json({
            message:"interval server error or check API",
            sucess:false,
            error:error.message

        })
    }
}

exports.getPost= async(req, res)=>{
    res.json("controller")
}

exports.postCategory= async(req, res)=>{
    const {category}=res.body.cat
    const findpostcat= await Posts.findById({category})
    if (findpostcat) {
       return res.status(200).json({
            message:"Category",
            sucess:true,
            categoryposts:findpostcat

        })
    }    
}

exports.createPost= async(req, res)=>{
     try {
        const postcreated= await Posts.create()
     } catch (error) {
        
     }
}


exports.deletePost= async(req, res)=>{
    res.json("controller")
}

exports.updatePost= async(req, res)=>{
    res.json("controller")
}
const Posts =require("../model/posts");
const users = require("../model/users");
const JWT = require("jsonwebtoken")

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
    const token = req.cookies.access_token;

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    jwt.verify(token, 'sanaullahkey', async (err, decode) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
  
      try {
        const user_id = decode.userid;
        const user = await User.findById(user_id);
        if (!user) {
          return res.status(404).json({ message: 'User not found.' });
        }
  
        req.user = user;
  
        const { title, desc } = req.body;
        const newBlog = new Posts({
          title,
          desc,
          userID: req.user._id, // Store the user ID who created the blog
        });
  
        const savedBlog = await newBlog.save();
        res.status(201).json({
          message: 'Blog published successfully',
          success: true,
          post: savedBlog
        });
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
    });
}


exports.deletePost= async(req, res)=>{
    res.json("controller")
}

exports.updatePost= async(req, res)=>{
    res.json("controller")
}
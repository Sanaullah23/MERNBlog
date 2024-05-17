const Users = require("../model/users");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const FindUser = await Users.findOne({ email });
    if (FindUser) {
      return res.status(409).json({
        message: "user exist already",
        success: false,
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const CreatedUser = await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });

      return res.status(201).json({
        message: "successfully created user",
        success: true,
        user: CreatedUser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error",
      error: error.message,
    });
  }
};





exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const CheckUser = await Users.findOne({ email });
    if (!CheckUser) {
      return res.status(404).json({
        message: "Not Found",
        success: false,
      });
    } else {
      if (email == undefined || password == undefined) {
        return res.status(499).json({
          message: "All Fields Are Required",
          success: false,
        });
      } else {
        const comparePassword = await bcrypt.compare(
          password,
          CheckUser.password
        );
        if (!comparePassword) {
          return res.status(401).json({
            message: "Invalid Password",
            success: false,
          });
        } 
         else{
            const TOKEN = JWT.sign({ userid: CheckUser._id }, "sanaullahkey");
           return res.cookie("access_token", TOKEN ,{
               httpOnly:true
            }).status(200).json({
               message:"logged in successfully",
               success:true,
               user:CheckUser,
               token:TOKEN
            })
   
           
         }//else of token
      }// else of compare password
      
    }// else undefin email and password check
  } catch (error) {
    res.status(500).json({
      message: "Interval server error",
      error: error.message,
    });
  }
};




exports.logout = async (req, res) => {
   res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
   }).status(200).json({
    message:"logout successfully",
    success:true
   })
};

const express = require("express");
const mongoose= require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app =express();
const PORT=8080
app.use(express.json())
app.use(cors())
app.use(cookieParser())
//routes
const postRouter = require("./routes/posts")
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
DB_URL="mongodb://localhost:27017/mernblog"

// Databse Connection
mongoose.connect(DB_URL).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log("Error to connect database", err)
})

//API ROUTES

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/posts', postRouter)

// server for listen request and response
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
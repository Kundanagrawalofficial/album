import express from "express"
import colors from "colors"
import dotenv from "dotenv"
//configure env
dotenv.config();
const app=express()
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to amazing</h1>")
})
//Port
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgCyan.white)
})

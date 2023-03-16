import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import conncetDB from './config/db.js';
import authRoutes from "./routes/authRoute.js"
//configure env
dotenv.config();
//database config
conncetDB()
const app=express()

//middle ware
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use('/api/v1/auth',authRoutes)
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to amazing</h1>")
})
//Port
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgCyan.white)
})

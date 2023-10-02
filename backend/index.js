import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/booksRoutel.js";
import cors from "cors";
dotenv.config();
const app=express();

//Middleaware for parsing req.body
app.use(express.json());

//Middleware for handling CORs policy
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }));


mongoose.connect(process.env.URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server stared at port "+process.env.PORT);
    })
    console.log("Connected to DB successfully")
}).catch((error)=>{
    console.log(error);
});

app.get("/",(req,res)=>{
res.status(200).json("Welcome To Book Store")
});

app.use("/",router);




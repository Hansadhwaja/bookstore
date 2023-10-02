import express from "express";
import Book from "../models/bookModel.js";
const router=express.Router();

router.post("/books",async (req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            res.status(400).json({message:
                "Send all required fields:title,author,publish year"})
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        };
        const book=await Book.create(newBook);
        res.status(200).json(book)
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
});

router.get("/books",async(req,res)=>{
    try {
        const allBook=await Book.find();
        res.status(200).json({
            count:allBook.length,
            data:allBook
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
});
router.get("/books/:id",async(req,res)=>{
    try {
        
        const {id}=req.params;
        const book=await Book.findById(id);
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
});

router.put("/books/:id",async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            res.status(400).json({message:
                "Send all required fields:title,author,publish year"})
        }
        const {id}=req.params;
        const result=await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            res.status(400).json({message:"Book not Found"})
        }
        res.status(200).json({message:"Book Updated Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
});

router.delete("/books/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const result=await Book.findByIdAndDelete(id);
        if(!result){
            res.status(400).json({message:"Book not Found"})
        }
        res.status(200).json({message:"Book Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
});


export default router;
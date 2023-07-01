import express, { Router } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";


const app =express();


app.use(morgan('dec'));
app.use(express.json());
app.use('/api/v1',Router);

mongoose.coonect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/questionBackend')
.then(()=>console.log("db connected"))
.catch((error)=>console.log("db error=>",err))


app.listen(8000,()=>console.log("working on port 7000 "))
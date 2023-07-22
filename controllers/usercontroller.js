import fs from "fs";
import  path from "path";


const __dirname = path.resolve();

export const addProduct =(req,res)=>{
    try{
        const Products_data = JSON.parse(fs.readFileSync(__dirname +'/data/products.json','utf-8'));
        for(var i=0;i< Products_data.length;i++){
            var name,price,description,catergory;
            name =Products_data[i]["name"];
            price=Products_data[i]["price"];
            description =Products_data[i]['description'];
            catergory=Products_data[i]["catergory"];


            var newproduct={
                "name":name,
                "description":description,
                "price":price,
                "catergory":catergory
            };
             
            Product_create(newproduct);
            
        }
    }catch(err){
        return res.send(err);
    }
    
    }


    export  const getAllPrdoucts=async(req,res)=>{
        try{
            const product=await Product.find({}.exec());
            const totalproduct=await Product.find({}.count());
            return res.send.status(200).json({'Total products :':totalproduct, product});
        }
        catch(err){
            return res.send(err);
        }
    }


    export const catergory=async(req,res)=>{
        try{
            const {catergory}=req.query;
            if(!catergory) return res.send(400).json({message:"catergory is required"});
            const product =await Product.find({catergory}).exec();
            const totalproduct=await Product.find({catergory}).count().exec();
            if(!product[0]) return res.status(404).json({message:"Products not found!"});
             return res.status(200).json({'Products by catergory':totalproduct,product})       
        }
        catch(error){
            return res.send(error)
        }
    }


    export const byrange=async(req,res)=>{
        try{
            const {min,max}=req.query;
            if(!min )return res.status(400).json({message:"min vvalue is required"});
            if(!max )return res.status(400).json({message:"max vvalue is required"});
             const product =await Product.find({price:{$gte:min,$ite:max}}).count().exec();
            if(!product[0])return res,send(404).json({message:"product not found"})
            const totalProduct=await Product .find({price:{$gte:min,$ite:max}}).count().exec();
            return res.send(200).json({'Product':totalProduct,product})
        }
        catch(error){
            return res.send(error)
        }
    }

export const aboverange=async(req,res)=>{
    try{
        const {range}=req.

    }
    catch(error){
        return res.send(error);
    }
}
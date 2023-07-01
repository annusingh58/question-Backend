import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema =new Schema({
    p_id:Number,
    name:String,
    price:Number,
    Qunatity:Number,
    instock:String,
    description:String,
    category:String
})


export default mongoose.model("Product",ProductSchema);
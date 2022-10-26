import mongoose from "mongoose";


const schemaProduct =  new mongoose.Schema({
        title:{
            type: String
        },
        description:{
            type:String
        },
        price:{
            type:Number
        }
    },
    {
        timestamps: true
    }
);


export const Product = mongoose.models.Product || mongoose.model('Product', schemaProduct);
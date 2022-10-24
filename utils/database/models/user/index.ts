import mongoose from "mongoose";


const schemaUser =  new mongoose.Schema({
        firstName:{
            type:String
        },
        lastName:{
            type:Number
        },
        year:{
            type: Number
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.models.User || mongoose.model('User', schemaUser);
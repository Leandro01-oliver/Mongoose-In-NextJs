import mongoose from "mongoose";


const schemaUser =  new mongoose.Schema({
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        year:{
            type: Number
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('User', schemaUser);

const createCollectionUser = async()=>{
    await User.createCollection();
}

createCollectionUser();
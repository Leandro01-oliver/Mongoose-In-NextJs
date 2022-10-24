import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerDeleteUserAll = async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    if (method === "DELETE") {
        
    }
    
}

export default handlerDeleteUserAll;
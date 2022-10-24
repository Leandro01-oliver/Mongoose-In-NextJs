import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerDeleteProductAll = async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    if (method === "DELETE") {
        
    }
    
}

export default handlerDeleteProductAll;
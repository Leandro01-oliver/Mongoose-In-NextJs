import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerDeleteUserId = async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;

    if (method === "DELETE") {
        
    }

}

export default handlerDeleteUserId
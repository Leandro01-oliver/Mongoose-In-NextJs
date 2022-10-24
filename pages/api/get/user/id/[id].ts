import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerGetUserId = async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;
    
    const {

    } = req.body;

    if (method === "GET") {
        
    }

}

export default handlerGetUserId
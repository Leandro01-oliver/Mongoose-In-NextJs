import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerPutUserId = async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;
    
    const {

    } = req.body;

    if (method === "PUT") {
        
    }

}

export default handlerPutUserId
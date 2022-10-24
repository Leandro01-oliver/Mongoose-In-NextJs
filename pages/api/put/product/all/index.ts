import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerPutProductAll =  async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    const {

    } = req.body;

    if (method === "PUT") {
        
    }
    
}

export default handlerPutProductAll;
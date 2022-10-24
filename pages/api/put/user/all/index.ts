import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const  handlerPutUserAll =  async (req:NextApiRequest,res:NextResponse) =>{
    
    const {
        method
    } = req;

    const {

    } = req.body;

    if (method === "GET") {
        
    }
    
}

export default handlerPutUserAll;
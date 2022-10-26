import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../../../utils/database/models/product";


const  handlerPutProductAll =  async (req:NextApiRequest,res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    const {
        title,
        description,
        price
    } = req.body;

    if (method === "PUT") {
       await Product.updateMany({
            title,
            description,
            price
        })
        .then((result) => {
            console.log(result);
            return res.status(201).json(
                {
                    menssage: "sucess in update product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in update product",
                    typeErro: err,
                }
            )
        })
    }
    
}

export default handlerPutProductAll;
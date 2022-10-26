import { NextApiRequest, NextApiResponse } from "next"
import { Product } from "../../../../../utils/database/models/product";


const handlerGetProductAll = async (req:NextApiRequest,res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    if (method === "GET") {
        await Product.find()
        .then((result) => {
            return res.status(200).json(
                {
                    menssage: "sucess in get all product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(500).json(
                {
                    menssage:"erro in get all product",
                    typeErro: err,
                }
            )
        })
    }
    
}

export default handlerGetProductAll;
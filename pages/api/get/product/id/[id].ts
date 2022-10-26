import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../../../utils/database/models/product";


const  handlerGetProductId = async (req:NextApiRequest,res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;

    const filter = {
        "_id":id
    };

    if (method === "GET") {
        await Product.findById(filter)
        .then((result) => {
            console.log(result);
            return res.status(200).json(
                {
                    menssage: "sucess in get id product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(200).json(
                {
                    menssage:"erro in get id product",
                    typeErro: err,
                }
            )
        })
    }

}

export default handlerGetProductId
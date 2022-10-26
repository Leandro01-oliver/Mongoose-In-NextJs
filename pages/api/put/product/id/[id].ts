import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../../../utils/database/models/product";


const  handlerPutProductId = async (req:NextApiRequest, res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;
    
    const {
        title,
        description,
        price
    } = req.body;

    const filter = {
        "_id":id
    };

    const data = {
        title,
        description,
        price
    };

    if (method === "PUT") {
        await Product.updateOne(
            filter,
            data
        )
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

export default handlerPutProductId
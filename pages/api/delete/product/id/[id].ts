import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../../../utils/database/models/product";


const  handlerDeleteProductId = async (req:NextApiRequest, res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    const {
        id
    } = req.query;

    const filter = {
        "_id":id
    };


    if (method === "DELETE") {
        await Product.deleteOne(filter)
        .then((result) => {
            console.log(result);
            return res.status(204).json(
                {
                    menssage: "sucess in delete id product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in delete id product",
                    typeErro: err,
                }
            )
        })
    }

}

export default handlerDeleteProductId
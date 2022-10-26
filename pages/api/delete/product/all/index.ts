import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../../../utils/database/models/product";


const  handlerDeleteProductAll = async (req:NextApiRequest, res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    if (method === "DELETE") {
        await Product.deleteMany()
        .then((result) => {
            console.log(result);
            return res.status(204).json(
                {
                    menssage: "sucess in delete all product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in delete all product",
                    typeErro: err,
                }
            )
        })
    }
    
}

export default handlerDeleteProductAll;
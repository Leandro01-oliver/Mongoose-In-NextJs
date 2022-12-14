import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../utils/database/models/user";


const  handlerPutUserId = async (req:NextApiRequest,res:NextApiResponse) =>{
    
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
         await User.updateOne(
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

export default handlerPutUserId
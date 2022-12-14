import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../utils/database/models/user";


const  handlerGetUserId = async (req:NextApiRequest,res:NextApiResponse) =>{
    
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
        await User.findById(filter)
        .then((result) => {
            console.log(result);
            return res.status(200).json(
                {
                    menssage: "sucess in get id user",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(200).json(
                {
                    menssage:"erro in get id user",
                    typeErro: err,
                }
            )
        })
    }

}

export default handlerGetUserId
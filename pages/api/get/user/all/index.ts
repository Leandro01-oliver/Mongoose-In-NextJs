import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../utils/database/models/user";


const  handlerGetUserAll = async (req:NextApiRequest,res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    if (method === "GET") {
        await User.find()
        .then((result) => {
            return res.status(200).json(
                {
                    menssage: "sucess in get all user",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(500).json(
                {
                    menssage:"erro in get all uer",
                    typeErro: err,
                }
            )
        })
    }
    
}

export default handlerGetUserAll;
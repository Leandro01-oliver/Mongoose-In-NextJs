import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../utils/database/models/user";


const  handlerDeleteUserId = async (req:NextApiRequest,res:NextApiResponse) =>{
    
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
        await User.deleteOne(filter)
        .then((result) => {
            console.log(result);
            return res.status(204).json(
                {
                    menssage: "sucess in delete id user",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in delete id user",
                    typeErro: err,
                }
            )
        })
    }

}

export default handlerDeleteUserId
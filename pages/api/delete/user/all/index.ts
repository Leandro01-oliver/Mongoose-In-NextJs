import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../../utils/database/models/user";


const  handlerDeleteUserAll = async (req:NextApiRequest,res:NextApiResponse) =>{
    
    const {
        method
    } = req;

    if (method === "DELETE") {
        await User.deleteMany()
        .then((result) => {
            console.log(result);
            return res.status(204).json(
                {
                    menssage: "sucess in delete all user",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in delete all user",
                    typeErro: err,
                }
            )
        })
    }
    
}

export default handlerDeleteUserAll;
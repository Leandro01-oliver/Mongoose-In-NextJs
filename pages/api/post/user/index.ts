import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongoose } from "../../../../config/mongoose";
import { User } from "../../../../utils/database/models/user";

const handlerPostUser = async (
    req: NextApiRequest, 
    res: NextApiResponse) => {

        const {
            method
        } = req;
        
        const {
            firstName,
            lastName,
            year
        } = req.body;
        
        await connectMongoose();

        if (method === "POST") {
            await User.create({
                firstName,
                lastName,
                year
            }).then((result) => {
                console.log(result);
                return res.status(200).json(
                    {
                        menssage: "sucess in create user",
                        data: result
                    }
                )
            }).catch((err) => {
                return res.status(200).json(
                    {
                        menssage:"erro in create user",
                        typeErro: err,
                    }
                )
            })
        }

}

export default handlerPostUser;
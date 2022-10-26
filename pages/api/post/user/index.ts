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
            const user =  await User.create({
                firstName,
                lastName,
                year
            })

            await user.save()
            .then((result) => {
                console.log(result);
                return res.status(201).json(
                    {
                        menssage: "sucess in create user",
                        data: result
                    }
                )
            }).catch((err) => {
                return res.status(404).json(
                    {
                        menssage:"erro in create user",
                        typeErro: err,
                    }
                )
            })
        }

}

export default handlerPostUser;
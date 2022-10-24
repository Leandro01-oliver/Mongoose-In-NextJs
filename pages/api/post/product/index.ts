import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongoose } from "../../../../config/mongoose";
import { Product } from "../../../../utils/database/models/product";

const handlerPostPoduct = async (
    req: NextApiRequest,
    res: NextApiResponse) => {

    const {
        method
    } = req;

    const {
        title,
        description,
        price
    } = req.body;

    await connectMongoose();

    if (method === "POST") {
        await Product.create({
            title,
            description,
            price
        }).then((result) => {
            return res.status(200).json(
                {
                    menssage: "sucesso na criação do produto",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(200).json(
                    {
                        menssage:"erro in create product",
                        typeErro: err,
                    }
                )
        })
    }

}

export default handlerPostPoduct;
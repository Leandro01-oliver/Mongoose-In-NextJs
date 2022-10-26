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

        const product = await Product.create({
            title,
            description,
            price
        })

        await product.save()
        .then((result) => {
            console.log(result);
            return res.status(201).json(
                {
                    menssage: "sucess in create product",
                    data: result
                }
            )
        }).catch((err) => {
            return res.status(404).json(
                {
                    menssage:"erro in create product",
                    typeErro: err,
                }
            )
        })
    }

}

export default handlerPostPoduct;
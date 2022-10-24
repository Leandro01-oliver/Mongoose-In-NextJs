
import axios from "axios"

const putProdctByIdRepository = async (
    id: Number,
    title: String,
    description: String,
    price: Number) => {
    await axios.post(`api/put/product/${id}`, {
        title,
        description,
        price
    })
}

export { putProdctByIdRepository }
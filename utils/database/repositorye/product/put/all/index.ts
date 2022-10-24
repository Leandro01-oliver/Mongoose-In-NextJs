
import axios from "axios"

const putProductAllRepositorye = async (
    title: String,
    description: String,
    price: Number) => {
    await axios.post("api/put/product/", {
        title,
        description,
        price
    })
}

export { putProductAllRepositorye }
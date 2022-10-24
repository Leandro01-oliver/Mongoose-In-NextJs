
import axios from "axios"

const postProductRepositorye =  (
    title: String,
    description: String,
    price: Number) => {
     axios.post("api/post/product/", {
        title,
        description,
        price
    })
}

export { postProductRepositorye }

import axios from "axios"

const postUserByIdRepositorye = async (
    id: Number,
    firstName: String,
    lastName: String,
    year: Number) => {
    await axios.post(`api/put/user/${id}`, {
        firstName,
        lastName,
        year
    })
}

export { postUserByIdRepositorye }
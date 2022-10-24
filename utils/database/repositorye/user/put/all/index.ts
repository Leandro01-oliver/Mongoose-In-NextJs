
import axios from "axios"

const putUserAllRepositorye = async (
    firstName: String,
    lastName: String,
    year: Number) => {
    await axios.post("api/put/user/", {
        firstName,
        lastName,
        year
    })
}

export { putUserAllRepositorye }
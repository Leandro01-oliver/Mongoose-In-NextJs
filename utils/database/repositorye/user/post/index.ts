
import axios from "axios"

const postUserRepositorye =  (
    firstName: String,
    lastName: String,
    year: Number) => {
     axios.post("api/post/user/", {
        firstName,
        lastName,
        year
    })
}

export { postUserRepositorye }

import axios from "axios"


  const getUserByIdRepository = async (id:Number) => {
    await axios.get(`api/get/user/id/${id}`)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.error(err);
    })
  }

  export { getUserByIdRepository }
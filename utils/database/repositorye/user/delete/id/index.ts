
import axios from "axios"


const deleteUserByIdRepository = async (id:Number) => {
  await axios.delete(`api/delete/user/id/${id}`)
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { deleteUserByIdRepository }
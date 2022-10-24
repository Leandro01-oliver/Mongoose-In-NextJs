
import axios from "axios"


const deleteProductByIdRepository = async (id:Number) => {
  await axios.delete(`api/delete/product/id/${id}`)
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { deleteProductByIdRepository }
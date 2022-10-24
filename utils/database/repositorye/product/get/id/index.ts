
import axios from "axios"


  const getProductByIdRepository = async (id:Number) => {
    await axios.get(`api/get/product/id/${id}`)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.error(err);
    })
  }

  export { getProductByIdRepository }
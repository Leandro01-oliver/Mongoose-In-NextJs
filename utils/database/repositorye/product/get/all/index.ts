 import axios from "axios"


const getProductAllRepository = async () => {
   await axios.get('api/get/product/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { getProductAllRepository }
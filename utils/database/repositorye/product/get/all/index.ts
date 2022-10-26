 import axios from "axios"


const getProductAllRepository =  () => {
    axios.get('api/get/product/all/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { getProductAllRepository }
 import axios from "axios"


const getUserAllRepository =  () => {
    axios.get('api/get/user/all/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { getUserAllRepository }
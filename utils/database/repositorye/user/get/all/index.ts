 import axios from "axios"


const getUserAllRepository = async () => {
   await axios.get('api/get/user/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { getUserAllRepository }
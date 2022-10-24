import axios from "axios"


const deleteUserAllRepository = async () => {
   await axios.delete('api/delete/user/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { deleteUserAllRepository }
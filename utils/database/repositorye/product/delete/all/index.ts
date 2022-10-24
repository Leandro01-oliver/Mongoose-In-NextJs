import axios from "axios"


const deleteProductAllRepository = async () => {
   await axios.delete('api/delete/product/')
  .then((res)=>{
      console.log(res.data);
  })
  .catch((err)=>{
      console.error(err);
  })
}

export { deleteProductAllRepository }
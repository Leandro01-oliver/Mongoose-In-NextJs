import type { NextPage } from 'next'
import { ProductController } from '../utils/database/controller/product'
import { UserController } from '../utils/database/controller/user';

const Home: NextPage = () => {
  return (
   <>
   <button
   onClick={()=>{
    const product = new ProductController();
    product.postProductController("teste","teste",18.00)
   }}
   >
     Criar um produto
   </button>
   <button
   onClick={()=>{
    const user = new UserController();
    user.postUserController("João","Paulo",25)
   }}
   >
     Criar um user
   </button>
   </>
  )
}

export default Home

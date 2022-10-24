import { deleteProductAllRepository } from "../../repositorye/product/delete/all";
import { deleteProductByIdRepository } from "../../repositorye/product/delete/id";
import { getProductAllRepository } from "../../repositorye/product/get/all";
import { getProductByIdRepository } from "../../repositorye/product/get/id";
import { postProductRepositorye } from "../../repositorye/product/post";
import { putProductAllRepositorye } from "../../repositorye/product/put/all";
import { putProdctByIdRepository } from "../../repositorye/product/put/id";

class ProductController {

  getProductAllController() {
    getProductAllRepository();
  }

  getProductByIdController(id: Number) {
    getProductByIdRepository(id);
  }

  postProductController(title: String, description: String, price: Number) {
    postProductRepositorye(title, description, price);
  }

  putProductAllController(title: String, description: String, price: Number) {
    putProductAllRepositorye(title, description, price);
  }

  putProductByIdController(id: Number, title: String, description: String, price: Number){
    putProdctByIdRepository(id, title, description, price)
  }
  
  deleteProductAllController(){
    deleteProductAllRepository()
  }

  deleteProductByIdController(id:Number){
    deleteProductByIdRepository(id);
  }
}

export { ProductController }
import { deleteUserAllRepository } from "../../repositorye/user/delete/all";
import { deleteUserByIdRepository } from "../../repositorye/user/delete/id";
import { getUserAllRepository } from "../../repositorye/user/get/all";
import { getUserByIdRepository } from "../../repositorye/user/get/id";
import { postUserRepositorye } from "../../repositorye/user/post";
import { putUserAllRepositorye } from "../../repositorye/user/put/all";
import { postUserByIdRepositorye } from "../../repositorye/user/put/id";


class UserController {

  getUserAllController() {
    getUserAllRepository();
  }

  getUserByIdController(id: Number) {
    getUserByIdRepository(id);
  }

  postUserController(firstName: String, lastName: String, year: Number) {
    postUserRepositorye(firstName, lastName, year);
  }

  putUserAllController(firstName: String, lastName: String, year: Number) {
    putUserAllRepositorye(firstName, lastName, year);
  }

  putUserByIdController(id: Number, firstName: String, lastName: String, year: Number) {
    postUserByIdRepositorye(id, firstName, lastName, year);
  }

  deleteUserAllController(){
    deleteUserAllRepository();
  }

  deleteUserByIdController(id:Number){
    deleteUserByIdRepository(id);
  }

}

export { UserController }
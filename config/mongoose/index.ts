import mongoose  from "mongoose";


  const connectMongoose = async() =>
   await mongoose.connect("mongodb://localhost:27017/db_marktplace")
    .then((res)=>{
        console.log("Sucesso na conexão com o mongonose : ");
    })
    .catch((err)=>{
      console.error(err);
      console.log("Não foi possível se conectar ao mongoose")
    })


export { connectMongoose }
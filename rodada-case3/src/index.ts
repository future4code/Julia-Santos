//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import connection from "./connection";

//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


const procurarProdutos = async ( dado: any, campo: string): Promise<any> => {
  const resultado = await connection.select().from('products').column('*').whereLike(campo,"%"+dado+"%");
  console.log(resultado);
  //const resultado = await connection("tb_titular").column(["cd_id"]).where("cd_documento",documento);
  return resultado;
};

const procurarProduto = async ( dado: any): Promise<any> => {
  const resultado = await connection.select().from('products').column('*').where('id',dado);
  console.log(resultado);
  //const resultado = await connection("tb_titular").column(["cd_id"]).where("cd_documento",documento);
  return resultado;
};
const procurarProdutosTodos = async (): Promise<any> => {
  const resultado = await connection.select().from('products');
  console.log(resultado);
  //const resultado = await connection("tb_titular").column(["cd_id"]).where("cd_documento",documento);
  return resultado;
};

const insertProducts = async (
  products:any
): Promise<void> => {
  let formatedData = products.map((item:any) => {
    return ({id: item.id, name:item.name, tags:item.tags.join()})
  })

  await connection('products').insert(formatedData);
  
};



app.post("/cadastrarProdutos",  async (req:Request,res:Response): Promise<void> =>{
  try {
    await insertProducts(
      req.body.products
  );
 
    res.status(201).send("Produtos cadastrados com sucesso!");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
   }
});

app.get("/procurarProdutos",  async (req:Request,res:Response): Promise<void> =>{
  try {
    let option = req.query
    let products:any = null;

    if(option.id){
      console.log(req.query)
      products = await procurarProduto(option.id)

      res.status(200).send(products);
    }else if(option.name){
      console.log(req.query)
      console.log(req.query)
      products = await procurarProdutos(option.name, "name")

      res.status(200).send(products);
    }else if(option.tag){
      console.log(req.query)
      console.log(req.query)
      products = await procurarProdutos(option.tag, "tag")

      res.status(200).send(products);
    }else{
      products = await procurarProdutosTodos()

      res.status(200).send(products);
    }
    

 } catch (error: any) {
   res.status(500).send(error.sqlMessage || error.message);
  }
});

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

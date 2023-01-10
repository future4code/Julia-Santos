import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();


app.use(express.json());
app.use(cors());


const consultarPokemons = async ( pagina: any): Promise<any> => {
  const resultado = await connection("pokemons").limit(10).offset(pagina);
  return resultado;
};

const consultarPokemonsSemPage = async (): Promise<any> => {
  const resultado = await connection("pokemons");
  return resultado;
};

const consultarPokemonsSemPageComPesquisa = async (campo:any, dado:any): Promise<any> => {
  const resultado = await connection("pokemons").whereLike(campo,"%"+dado+"%");
  return resultado;
};

const consultarPokemonsSemPageComOrdenacao = async (campo:any, dado:any): Promise<any> => {
  console.log(campo);
  const resultado = await connection("pokemons").orderBy([{ column: campo, order: dado }]);
  return resultado;
};

const consultarPokemonsSemPageComPesquisaComOrdenacao = async (searchField:any, searchValue:any, filterName:any, order:any): Promise<any> => {
  const resultado = await connection("pokemons").whereLike(searchField,"%"+searchValue+"%").orderBy(filterName,order);
  return resultado;
};

const consultarPokemonsComPesquisa = async ( pagina: any, campo:any, dado:any): Promise<any> => {
  const resultado = await connection("pokemons").whereLike(campo,"%"+dado+"%").limit(10).offset(pagina);
  return resultado;
};

const consultarPokemonsComOrdenacao = async (pagina: any,campo:any, dado:any): Promise<any> => {
  const resultado = await connection("pokemons").orderBy([{ column: campo, order: dado }]).limit(10).offset(pagina);
  return resultado;
};

const consultarPokemonsComPesquisaComOrdenacao = async (pagina:any ,searchField:any, searchValue:any, filterName:any, order:any): Promise<any> => {
  const resultado = await connection("pokemons").whereLike(searchField,"%"+searchValue+"%").orderBy(filterName,order).limit(10).offset(pagina);
  return resultado;
};
// nova api


app.get("/listaPokemons",  async (req:Request,res:Response): Promise<void> =>{
  try {
    let page:any;
    let listaPokemons:any;
    page = req.query.page;
    page = parseInt(page);
    console.log(req.query);
    if(page === 0){
      if((req.query.filterName && req.query.Order) || (req.query.searchField && req.query.searchValue)){
        if(!req.query.filterName && !req.query.Order){
          listaPokemons = await consultarPokemonsSemPageComPesquisa(
            req.query.searchField,
            req.query.searchValue
          )
        }else if(!req.query.searchField && !req.query.searchValue){
          listaPokemons = await consultarPokemonsSemPageComOrdenacao(
            req.query.filterName,
            req.query.Order
          )
        }else{
          listaPokemons = await consultarPokemonsSemPageComPesquisaComOrdenacao(req.query.searchField,
            req.query.searchValue,req.query.filterName,req.query.Order)
        }
      }else{
        listaPokemons = await consultarPokemonsSemPage();
      }
      
    }else if(page === 1){
      if((req.query.filterName && req.query.Order) || (req.query.searchField && req.query.searchValue)){
        if(!req.query.filterName && !req.query.Order){
          listaPokemons = await consultarPokemonsComPesquisa(0,
            req.query.searchField,
            req.query.searchValue
          )
        }else if(!req.query.searchField && !req.query.searchValue){
          listaPokemons = await consultarPokemonsComOrdenacao(0,
            req.query.filterName,
            req.query.Order
          )
        }else{
          listaPokemons = await consultarPokemonsComPesquisaComOrdenacao(0,req.query.searchField,
            req.query.searchValue,req.query.filterName,req.query.Order)
        }
      }else{
        listaPokemons = await consultarPokemons(0);
      }
    }else{ 
      if((req.query.filterName && req.query.Order) || (req.query.searchField && req.query.searchValue)){
        if(!req.query.filterName && !req.query.Order){
          listaPokemons = await consultarPokemonsComPesquisa((page -1) * 10,
            req.query.searchField,
            req.query.searchValue
          )
        }else if(!req.query.searchField && !req.query.searchValue){
          listaPokemons = await consultarPokemonsComOrdenacao((page -1) * 10,
            req.query.filterName,
            req.query.Order
          ) 
        }else{
          listaPokemons = await consultarPokemonsComPesquisaComOrdenacao((page -1) * 10,req.query.searchField,
            req.query.searchValue,req.query.filterName,req.query.Order)
        }
      }else{
        listaPokemons = await consultarPokemons((page -1) * 10);  
      }
    }

   res.status(200).send(listaPokemons);
 } catch (error: any) {
   res.status(500).send(error.sqlMessage || error.message);
  }
});



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

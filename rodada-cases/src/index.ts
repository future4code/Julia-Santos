import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from "./connection";
const app = express()
app.use(express.json())
app.use(cors())

const cadastrarCompeticao = async (
  competicao: string,
): Promise<void> => {
  await connection.raw(`
        INSERT INTO competicoes
          (competicao, status)
        VALUES (
        "${competicao}",
        "não iniciada"
       );
    `);
};

const iniciarCompeticao = async (
  competicao: string,
): Promise<void> => {
  await connection.raw(`
        Update 
          competicoes
        set 
          status = "aberta"
        where
          competicao = "${competicao}" and status = "não iniciada";
    `);
};

const fecharCompeticao = async (
  competicao: string,
): Promise<void> => {
  await connection.raw(`
        Update 
          competicoes
        set 
          status = "fechada"
        where
          competicao = "${competicao}" and status = "aberta";
    `);
};

const consultaCompeticaoAberta = async ( competicao: string): Promise<any> => {
  const resultado = await connection("competicoes").column(["competicao"]).where({"competicao":competicao, "status":"aberta"});
  //console.log(resultado[0]);
  return resultado[0];
};
const consultaCompeticoes = async (): Promise<any> => {
  const resultado = await connection("competicoes").column(["id","competicao","status"]);
  //console.log(resultado[0]);
  return resultado[0];
};

const consultaCompeticao = async (competicao: string): Promise<any> => {
  const resultado = await connection.select("atleta","valor", "unidade").from('resultados')
  .innerJoin('competicoes_resultados', 'resultados.id', 'competicoes_resultados.fk_id_resultado')
  .innerJoin('competicoes','competicoes_resultados.fk_id_competicao','competicoes.id')
  .where('competicoes.competicao', '=', competicao)
  return resultado;
};

const consultaClassificaoCompeticaoAsc = async (data: any): Promise<any> => {
  const resultado = await connection.raw(`
  select 
  RANK() OVER (
       ORDER BY r.valor
   ) posicao,
     r.atleta,
     CAST(r.valor AS DECIMAL(10,2)) as valor,
     r.unidade
   from 
     resultados as r
   inner join 
     competicoes_resultados 
   on
     r.id = competicoes_resultados.fk_id_resultado
   inner join
     competicoes as c
   on
     c.id = competicoes_resultados.fk_id_competicao
   where c.competicao = "${data.competicao}"
   order by CAST(valor AS DECIMAL(10,3)) ASC ;
    `)
  
  return resultado;
};

const consultaClassificaoCompeticaoDesc = async (data: any): Promise<any> => {
  const resultado = await connection.raw(`
  select 
  RANK() OVER (
       ORDER BY r.valor
   ) posicao,
     r.atleta,
     CAST(r.valor AS DECIMAL(10,2)) as valor,
     r.unidade
   from 
     resultados as r
   inner join 
     competicoes_resultados 
   on
     r.id = competicoes_resultados.fk_id_resultado
   inner join
     competicoes as c
   on
     c.id = competicoes_resultados.fk_id_competicao
   where c.competicao = "${data.competicao}"
   order by CAST(valor AS DECIMAL(10,3)) ASC ;
    `)
  
  return resultado;
};

const cadastrarResultado = async (
  data: any
): Promise<void> => {
  await connection.raw(`

        INSERT INTO resultados
          ( atleta,
            valor,
            unidade)
        VALUES (
        "${data.atleta}",
        "${data.value}",
        "${data.unidade}"
       );
       
       INSERT INTO competicoes_resultados
          (
            fk_id_competicao,
            fk_id_resultado
          )
          VALUES(
            (select MAX(id) from competicoes where competicao = "${data.competicao}"),
            (select LAST_INSERT_ID())
          );
    `);
};

app.post("/cadastrarCompeticao",  async (req:Request,res:Response): Promise<void> =>{
  let errorCode: number = 400;

  try {

    if (!req.body?.competicao) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }

   await cadastrarCompeticao(
     req.body.competicao,
   );

   res.status(201).send("Competicao cadastrado!");
 } catch (error: any) {
   res.status(errorCode).send(error.sqlMessage || error.message);
  }
});

app.put("/iniciarCompeticao", async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;
  let data = req.body?.competicao;
  try {

    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }
   
    await iniciarCompeticao(data)

    res.status(200).send({ message: `Competição ${data} Aberta.` });
    
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
});

app.put("/fecharCompeticao", async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;
  let data = req.body?.competicao;

  try {

    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }

    await fecharCompeticao(data)

    res.status(200).send({ message: `Competição ${data} Fechada.`});
    
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.put("/cadastrarResultado", async(req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;
  let data = req.body;

  try {

    if (!data.competicao || !data?.atleta || !data?.value  || !data?.unidade) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }
    const competicoesAbertas = await consultaCompeticaoAberta(data.competicao);
    

    // await cadastrarResultado(data);
    // console.log(competicoesAbertas?.competicao);
    if(competicoesAbertas?.competicao !== undefined){
      console.log("encontrei o erro");
      await cadastrarResultado(
        data
      );
      res.status(200).send({ message: "Resultado de competição atualizado." });
    }else{
      res.status(404).send({ message: "Nenhuma competicão aberta com esse nome ou cadastrada." });
    }
    
    
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.get("/listaCompeticoes", async (req: Request, res: Response):Promise<void>=>{
  let errorCode: number = 400;
  try {

    const competicoes = await consultaCompeticoes();
    console.log(competicoes)
    res.status(200).send(competicoes);
  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/listaCompeticao", async(req: Request, res: Response):Promise<void>=>{
  let errorCode: number = 400;
  try {
    let data: any = req.body?.competicao;
    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }
  
    const competicao =  await consultaCompeticao(data)
    console.log(competicao.length);
  if(competicao.length === 0 ){
    res.status(200).send("Competicao vazia");
  }else{
    res.status(200).send(competicao);
  }

  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/listaRanqueadaCompeticao", async(req: Request, res: Response): Promise<void>=>{
  let errorCode: number = 400;
  try {
    let data: any = req.body;
    if (!data.competicao || !data.ordenacao) {
      errorCode = 422;
      throw new Error("Por favor preencha os campos vazios!");
    }
    let competicao : any;

    
        if(data.ordenacao === "Crescente"){
           competicao =  await consultaClassificaoCompeticaoAsc(data);
         }else{
          competicao =  await consultaClassificaoCompeticaoDesc(data);         
        }
      if(competicao.length === 0 ){
        res.status(200).send("Competicao vazia");
      }else{
        console.log(competicao[0])
        res.status(200).send(competicao[0]);
      }

  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

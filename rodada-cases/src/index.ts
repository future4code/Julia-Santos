import express, { Request, Response } from 'express'
import cors from 'cors'

type competicao = {
  id: number;
  competicao: string;
  status: string;
  resultados:Array<resultados>;
};

type resultados = {
  id:number;
  atleta: string;
  valor: number;
  unidade: string;
  posicao:any;
}


let competicoes: Array<competicao> = [];

const app = express()
app.use(express.json())
app.use(cors())

app.post("/cadastrarCompeticao", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {

    if (!req.body?.competicao) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }
    const data = {
      "id":competicoes.length + 1,
      "competicao": req.body?.competicao,
      "status": "",
      "resultados": []
    };
    
    competicoes.push(data);

    res.status(201).send({ message: "Competição salva com sucesso." });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }  
});


app.put("/iniciarCompeticao", (req: Request, res: Response) => {
  let errorCode: number = 400;
  let data = req.body?.competicao;

  try {

    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }

    competicoes.map((item: any) =>{
      if (item.competicao === data) {
        item.status = "Aberto";
      }
    })

    res.status(200).send({ message: "Competição Aberta." });
    
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.put("/fecharCompeticao", (req: Request, res: Response) => {
  let errorCode: number = 400;
  let data = req.body?.competicao;

  try {

    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }

    competicoes.map((item: any) =>{
      if (item.competicao === data  && item.status === "Aberto") {
        item.status = "Fechado";
      }
    })

    res.status(200).send({ message: "Competição Fechada." });
    
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.put("/cadastrarResultado", (req: Request, res: Response) => {
  let errorCode: number = 400;
  let data = req.body;

  try {

    if (!data.competicao) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }

    competicoes.map((item: any) =>{
      if (item.competicao === data.competicao && item.status === "Aberto") {
        item.resultados.push({
          id: item.resultados.length + 1,
          atleta: data.atleta,
          valor: data.valor,
          unidade: data.unidade
        })
      }
    })

    res.status(200).send({ message: "Resultado de competição atualizado." });
    
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

app.get("/listaCompeticoes", (req: Request, res: Response)=>{
  let errorCode: number = 400;
  try {
    res.status(200).send(competicoes);
  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/listaCompeticao", (req: Request, res: Response)=>{
  let errorCode: number = 400;
  try {
    let data: any = req.body?.competicao;
    if (!data) {
      errorCode = 422;
      throw new Error("Por favor preencha o campo vazio!");
    }
    let listCompeticao: any;

    competicoes.map((item:any) =>{
      if(item.competicao === data){
        listCompeticao = item.resultados;
      }
  })

    res.status(200).send(listCompeticao);
  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/listaRanqueadaCompeticao", (req: Request, res: Response)=>{
  let errorCode: number = 400;
  try {
    let data: any = req.body;
    if (!data.competicao || !data.ordenacao) {
      errorCode = 422;
      throw new Error("Por favor preencha os campos vazios!");
    }
    let listCompeticao: any;

    competicoes.map((item:any) =>{
      if(item.competicao === data.competicao){
        listCompeticao = item.resultados;
        if(data.ordenacao === "Crescente"){
          listCompeticao.sort((a:any,b:any) => a.valor - b.valor);
        }else{
          listCompeticao.sort((a:any,b:any) => b.valor - a.valor);
        }
      }
    });

    listCompeticao.forEach(function(itm:any){
      itm.posicao = listCompeticao.findIndex((x:any) => x.id === itm.id) + 1;
     });
    res.status(200).send(listCompeticao);
  } catch (error: any) {
  
    res.status(errorCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

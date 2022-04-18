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


const consultaTitular = async ( documento: string): Promise<any> => {
  const resultado = await connection("tb_titular").column(["cd_id"]).where("cd_documento",documento);
  return resultado[0];
};

const consultaCartao = async ( numero: string): Promise<any> => {
  const resultado = await connection("tb_cartao").column(["cd_id"]).where("vl_numero",numero);
  return resultado[0];
};

const consultaPagamentos = async ( ): Promise<any> => {

  const resultado = await connection("tb_pagamento").column([
    'tb_pagamento.vl_total as Valor', 
    'tb_pagamento.nm_status as Status', 
    'tb_cliente.cd_id as IdCliente',
    'tb_cliente.nm_cliente as NomeCliente', 
    'tb_comprador.cd_id as IdComprador', 
    'tb_comprador.nm_comprador as NomeComprador', 
    'tb_comprador.nm_email as EmailComprador', 
    'tb_comprador.cd_cpf as CpfComprador',
    'tb_forma_pagamento.nm_forma_pagamento as formaPagamento',
    'tb_cartao.vl_numero as  umeroCartao',
    'tb_cartao.dt_expira as DataExpira',
    'tb_cartao.cd_cvv as CVV',
    'tb_cartao.nm_bandeira as Bandeira',
    'tb_boleto.cd_boleto as BoletoCodigo',
    'tb_titular.nm_titular as Titular',
    'tb_titular.dt_aniversario as Aniversario',
    'tb_titular.cd_documento as Documento'])
    .innerJoin('tb_cliente','tb_pagamento.fk_cliente_cd_id','tb_cliente.cd_id')
    .innerJoin('tb_comprador','tb_pagamento.fk_comprador_cd_id','tb_comprador.cd_id')
    .innerJoin('tb_forma_pagamento','tb_pagamento.fk_forma_pagamento_cd_id','tb_forma_pagamento.cd_id')
    .leftJoin('tb_cartao','tb_forma_pagamento.fk_cartao_cd_id','tb_cartao.cd_id')
    .leftJoin('tb_boleto','tb_forma_pagamento.fk_boleto_cd_id','tb_boleto.cd_id')
    .leftJoin('tb_titular','tb_cartao.fk_titular_cd_id','tb_titular.cd_id');
  return resultado;
};

const inserirNovoCliente = async (
  nome: string,
): Promise<void> => {
  await connection.raw(`
        INSERT INTO tb_cliente
          ( nm_cliente)
        VALUES (
        "${nome}"
       );
    `);
};

const inserirNovoComprador = async (
  nome: string,
  email:string,
  cpf:string
): Promise<void> => {
  await connection.raw(`
        INSERT INTO tb_comprador
          ( nm_comprador,
            nm_email,
            cd_cpf)
        VALUES (
        "${nome}",
        "${email}",
        "${cpf}"
       );
    `);
};

const inserirNovoPagamentoCartao1 = async (
  nome: string,
  aniversario:string,
  documento:string, 
  bandeira: string,
  expira: string,
  cvv:string,
  numeroCartao:string,
  metodo:string,
  valor:number,
  comprador:number,
  cliente:number
): Promise<void> => {
  await connection.raw(`

  INSERT INTO tb_titular
  (
    nm_titular,
    dt_aniversario,
    cd_documento)
  VALUES
  ( "${nome}",
  "${aniversario}",
  "${documento}");
  

  INSERT INTO tb_cartao
  (vl_numero,
  dt_expira,
  cd_cvv,
  nm_bandeira,
  fk_titular_cd_id)
  VALUES
  (
    "${numeroCartao}",
    "${expira}",
    "${cvv}",
    "${bandeira}",
    (select LAST_INSERT_ID())
  );

  INSERT INTO tb_forma_pagamento
  (
  fk_cartao_cd_id,
  nm_forma_pagamento)
  
  VALUES
  ((select LAST_INSERT_ID()),
  "Cartao de Credito");

  INSERT  INTO tb_pagamento
        (
        vl_total,
        nm_status,
        fk_forma_pagamento_cd_id,
        fk_comprador_cd_id,
        fk_cliente_cd_id)
        VALUES
        (${valor},
          "pendente",
        (select LAST_INSERT_ID()),
        ${comprador},
        ${cliente}
        );
       

        
        
    `);
};
const inserirNovoPagamentoCartao2 = async (
  documento:string, 
  bandeira: string,
  expira: string,
  cvv:string,
  numeroCartao:string,
  metodo:string,
  valor:number,
  comprador:number,
  cliente:number
): Promise<void> => {
  await connection.raw(`

  INSERT INTO tb_cartao
  (vl_numero,
  dt_expira,
  cd_cvv,
  nm_bandeira,
  fk_titular_cd_id)
  VALUES
  (
    "${numeroCartao}",
    "${expira}",
    "${cvv}",
    "${bandeira}",
    (select cd_id from tb_titular where cd_documento = "${documento}")
  );

  INSERT INTO tb_forma_pagamento
  (
  fk_cartao_cd_id,
  nm_forma_pagamento)
  
  VALUES
  ((select LAST_INSERT_ID()),
  "Cartao de Credito");

  INSERT  INTO tb_pagamento
        (
        vl_total,
        nm_status,
        fk_forma_pagamento_cd_id,
        fk_comprador_cd_id,
        fk_cliente_cd_id)
        VALUES
        (${valor},
          "pendente",
        (select LAST_INSERT_ID()),
        ${comprador},
        ${cliente}
        );
    `);
};

const inserirNovoPagamentoCartao3 = async (
  id:number,
  metodo:string,
  valor:number,
  comprador:number,
  cliente:number
): Promise<void> => {
  await connection.raw(`

  

  INSERT INTO tb_forma_pagamento
  (
  fk_cartao_cd_id,
  nm_forma_pagamento)
  
  VALUES
  (${id},
  "Cartao de Credito");

  INSERT  INTO tb_pagamento
        (
        vl_total,
        nm_status,
        fk_forma_pagamento_cd_id,
        fk_comprador_cd_id,
        fk_cliente_cd_id)
        VALUES
        (${valor},
          "pendente",
        (select LAST_INSERT_ID()),
        ${comprador},
        ${cliente}
        );
    `);
};

const inserirNovoPagamentoBoleto = async (
  boleto:string,
  valor:number,
  comprador:number,
  cliente:number
): Promise<void> => {
  await connection.raw(`

  INSERT INTO tb_boleto
  (
  cd_boleto)
  
  VALUES
  (
  "${boleto}");

  INSERT INTO tb_forma_pagamento
  (
  fk_boleto_cd_id,
  nm_forma_pagamento)
  
  VALUES
  ((SELECT LAST_INSERT_ID()),
  "Boleto");

  INSERT  INTO tb_pagamento
        (
        vl_total,
        nm_status,
        fk_forma_pagamento_cd_id,
        fk_comprador_cd_id,
        fk_cliente_cd_id)
        VALUES
        (${valor},
          "pendente",
        (select LAST_INSERT_ID()),
        ${comprador},
        ${cliente}
        );
    `);
};

app.post("/novoCliente",  async (req:Request,res:Response): Promise<void> =>{
     try {
      await inserirNovoCliente(
        req.body.nome,
      );
  
      res.status(201).send("Cliente cadastrado!");
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
     }
});


app.post("/novoComprador",  async (req:Request,res:Response): Promise<void> =>{
  try {
   await inserirNovoComprador(
     req.body.nome,
     req.body.email,
     req.body.cpf
   );

   res.status(201).send("Comprador cadastrado!");
 } catch (error: any) {
   res.status(500).send(error.sqlMessage || error.message);
  }
});

app.post("/pagamento",  async (req:Request,res:Response): Promise<void> =>{
  try {
    
    if(req.body.metodo === "Cartao Credito"){
      const documento:any = await consultaTitular(
        req.body.documento
      )
       if(!documento || documento === null || documento === undefined ){
           await inserirNovoPagamentoCartao1(
            req.body.nome,
            req.body.aniversario,
            req.body.documento,
            req.body.bandeira,
            req.body.expira,
            req.body.cvv,
            req.body.numero,
            req.body.metodo,
            req.body.valor,
            req.body.comprador,
            req.body.cliente
          );
          res.status(201).send("Cadastro de pagamento feito com sucesso, em Processamento");
       }else{
        const cartao:any = await consultaCartao(
          req.body?.numero
        )

        if(!cartao || documento === null || cartao === undefined ){
          await inserirNovoPagamentoCartao2(
            req.body.documento,
            req.body.bandeira,
            req.body.expira,
            req.body.cvv,
            req.body.numero,
            req.body.metodo,
            req.body.valor,
            req.body.comprador,
            req.body.cliente
          );
        }else{
          await inserirNovoPagamentoCartao3(
            cartao.cd_id,
            req.body.metodo,
            req.body.valor,
            req.body.comprador,
            req.body.cliente
          );
        }

        
        res.status(201).send("Cadastro de pagamento feito com sucesso, em Processamento");
       } 
    }else{
      let code:string = "";
      for(let i = 0; i < 27; i++){
          let numberRandom = Math.floor(Math.random() * 10);
          code += numberRandom 
      }
      await inserirNovoPagamentoBoleto(
        code,
        req.body.valor,
        req.body.comprador,
        req.body.cliente,
        
      )
        
      res.status(201).send(code);
    }
    

   
 } catch (error: any) {
   res.status(500).send(error.sqlMessage || error.message);
  }
});


app.get("/pagamentos",  async (req:Request,res:Response): Promise<void> =>{
  try {
 
    const pagamentos:any = await consultaPagamentos()

   res.status(200).send(pagamentos);
 } catch (error: any) {
   res.status(500).send(error.sqlMessage || error.message);
  }
});


//Exemplos - endpoints




//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

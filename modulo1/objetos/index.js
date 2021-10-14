// Exercício de interpretação de código 1

//Exibe no console os 2 primeiros horarios e canais que serão exibidos o filme "Auto da Compadecida""
// E os nomes Matheus Nachtergaele e Virginia Cavendish

// Exercício de interpretação de código 2

// nome: Juca - idade:3 - raca: SRD
// nome:Juba - idade:3 - raca:SRD
// nome: Jubo - idade:3 - raca:SRD
//  os três pontos, servem para espelhar as informações.

// Exercício de interpretação de código 3 

// False, undefined 
// Isso aconteceu porque uma informação é falsa e a outra informação não existe.

// Exercício de escrita de código 1

let pessoa ={
    nome:"Julia",
    apelido:["Juh","Jubz","Juba"]
}

function imprimeApelidos(pessoinha){
    console.log(pessoinha)
    let frase = `Meu nome é ${pessoinha.nome}, mas pode me chamar de:${pessoinha.apelido}.`;
    console.log(frase)
}
 imprimeApelidos(pessoa)

 function imprimeApelidos(pessoinha){
     console.log(pessoinha)
     let novaPessoa = {...pessoa, apelido:["julieta", "ju", "julinha"]
    }
     console.log(novaPessoa)    
 }
imprimeApelidos(pessoa)

 // Exercício de escrita de código 2 

let inform01 ={
    nome:"Rubens",
    idade:"23",
    profissao:"programador"
  }
  let inform02 ={
    nome:"Julia",
    idade:"23",
    profissao:"estagiario"
  }

function imprimeInfor(informação){
    let arryInform = []
    arryInform.push(informação.nome)
    arryInform.push(informação.nome.length)
    arryInform.push(informação.idade)
    arryInform.push(informação.profissao)
    arryInform.push(informação.profissao.length)
    console.log(arryInform)
  }
  imprimeInfor(inform01)
  imprimeInfor(inform02)
  

//   Exercício de escrita de código 3

let carrinho = []

let banana = {
    nome:"banana",
    disponibilidade:true    
}

let morango = {
    nome:"morango",
    disponibilidade:false
}

let pitaya = {
    nome:"pitaya",
    disponibilidade:true
}

function meuCarrinhoSacolao(fruta){
    carrinho.push(fruta)
}
meuCarrinhoSacolao(banana)
meuCarrinhoSacolao(morango)
meuCarrinhoSacolao(pitaya)

console.log(carrinho)


// Desafio

let nomedUsuario = prompt("qual é o seu nome?")
let idadeUsuario = prompt("qual é a sua idade?")
let profissaoUsuario = prompt("qual é sua profissao?")

let informUsuario = {
    nome:nomedUsuario,
    idade:idadeUsuario,
    profissao:profissaoUsuario
}
console.log(informUsuario)
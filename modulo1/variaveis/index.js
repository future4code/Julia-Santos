// Exercícios de Interpretação de código

// Exercício 1 de Interpretação de código
//Irá aparecer os números 10 10 e 5 nessa ordem

// Exercício 2 de Interpretação de código
// Aparecera o número 10 nas 3 posições 
// a - 10/ b- 10/ c- 10

//Exercício 3 de Interpretação de código

//let horaDia = prompt("Quantas horas você trabalha por dia?")
//let valorDia = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${horaDia/valorDia} por hora`

//O código em questão perguntará ao usuario quantas horas ele trabalha por dia e quanto recebe por dia.
//E devolverá o valor que o mesmo receberá por hora trabalhada.

// Exercício 1 de Escrita de código

let nomeUsuario
let idadeUsuario

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

//resultado undefined em ambos, pois não possuem valor atribuido.

nomeUsuario = prompt("Qual é o seu nome?")
idadeUsuario = prompt("Qual é a sua idade?")

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

//agora ambas aparecem como tipo string, após o valor atribuido 

console.log("Olá meu nome é", nomeUsuario , "eu tenho" , idadeUsuario , "anos.")


// Exercício 2 de Escrita de código

let roupaUsuario = prompt("Você esta usando vestido hoje?")
let sapatoUsuario = prompt("Você esta de tênis?")
let acessorioUsuario = prompt("Voce esta com a sua bolsa?")

let positivo = "Sim"
let negativo = "Não"

console.log("Voce esta usando vestido hoje?",positivo)
console.log("Você esta de tênis?",negativo)
console.log("Você esta com a sua bolsa?",positivo)

roupaUsuario = true
sapatoUsuario = false
acessorioUsuario = true

console.log(roupaUsuario)
console.log(sapatoUsuario)
console.log(acessorioUsuario)



//Exercício 3 de Escrita de código

let a = 10
let b = 25

c = a
a = b
b = c

console.log("o novo valor de a é",a)
console.log("o novo valor de b é",b)

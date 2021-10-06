// Exercícios de Interpretação de código
 
// Exercício 1 de Interpretação de código

// & = E                 ! = negação         || = OU

// resultado = bool1(true) E bool2(false)
// console.log = a, false
// resultado = bool1(true) E bool2(false) E bool3(true)
// console.log = b, false
// resultado = !resultado(negativo passa para positivo) E (bool1 ou bool2) 
// console.log = c, true 
// console.log= d,boleano 
 
// Exercício 2 de Interpretação de código

//Como a variavel esta para texto e não definida como numeração para soma, acaba concatenando.

//Exercício 3 de Interpretação de código

//a solução é definir as duas variaveis como Number



// Exercício 1 de Escrita de código 

let idadeUsuario = Number(prompt("Qual é sua idade?"))
let idadeAmigo = Number(prompt("Qual é a sua idade"))

console.log("Minha idade", idadeUsuario , "anos")
console.log("Idade do meu melhor amigo" , idadeAmigo , "anos")

let resultadoIdade = (idadeUsuario > idadeAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo." , resultadoIdade )

console.log(idadeUsuario - idadeAmigo)


// Exercício 2 de Escrita de código
 
let numeroPar = Number(prompt("Insira um numero par"))
let restoDivisao = numeroPar % 2
console.log(restoDivisao)

//toda numeração que for par, o resultado será igual a 0.
// todo numeração que for ímpar, o resultado sera 1, pois sempre havera resto.

// Exercício 3 de Escrita de código 

let idade01 = Number(prompt("Quantos anos você tem?"))
console.log(idade01)

let resultado = idade01 * 12 
console.log(resultado)

let resultado01 = idade01 * 365
console.log(resultado01)

let resultado02 = idade01 * 24 * 365
console.log(resultado02)

// Execício 4 de Escrita de código 

let numero01 = Number(prompt("Digite um número"))
let numero02 = Number(prompt("Digite outro número"))
console.log(" O primeiro numero é maior que o segundo?", numero01 > numero02 )
console.log(" O primeiro numero é igul ao segundo?" , numero01 == numero02)
console.log("O primeiro numero é divisivel pelo segundo número?" , (numero01 > 0) &&(numero02 > 0))
console.log("O segundo numero é divisivel pelo primeiro número?" , (numero01 > 0) && (numero02 > 0))
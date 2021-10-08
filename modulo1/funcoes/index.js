// Exercício 1 de Interpretação de código

// Serão impressos os números 10 e 50.
// O código não iria quebrar, no entanto, não exibiria no console.

// Exercício 2 de Interpretação de código 

// Primeiro pede para que o usuario insira um texto.
// Segundo deixa a frase minuscula e inclui uma palavra ao texto 
//Depois imprimi no console a modificação feita


// Exercício 1 de escrita de código 

function a() {
    console.log("Eu sou Julia, tenho 23 anos, moro em Praia Grande e sou estudante.")
}

a()

function b(nome, idade, endereco, profissao) {
    return console.log(" Eu sou " + nome + " , " + " tenho " + idade + " , " + " moro na cidade " + endereco + " atualmente  sou  " + profissao )
}

b("Julia" , "23 anos", "Praia Grande", "estudante")


// Exercício 2 de escrita  de código 


function numero(numero1, numero2) {
    return console.log(numero1 + numero2)
}
numero(5,10)

function numero01(numero1, numero2){
    return console.log(numero1 > numero2)
}
numero01(5, 10)

function numero02(numero1){
    let numeros = numero1 % 2
    return console.log(numeros == 0)
}
numero02(3)

function texto(texto01){
    return console.log(texto01.length, texto01.toUpperCase())
}
texto("Meu nome é Julia")

// Exercício 3 de escrita de código

function soma(numero01,numero02){
return console.log(numero01 + numero02)
}
function subtracao(numero01,numero02){
    return console.log(numero01 - numero02)
}
function divisao(numero01,numero02){
    return console.log(numero01 / numero02)
}
function multiplicacao(numero01,numero02){
    return console.log(numero01 * numero02)
}

let numerosOperacoes = Number(prompt("Digite o primeiro numero."))
let numeroOperacoes01 = Number(prompt("Digite o segundo numero"))

console.log("Os numeros inseridos " + numerosOperacoes + " e " + numeroOperacoes01)

soma(numerosOperacoes, numeroOperacoes01)
subtracao(numerosOperacoes, numeroOperacoes01)
divisao(numerosOperacoes, numeroOperacoes01)
multiplicacao(numerosOperacoes, numeroOperacoes01)


// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let area01 = prompt("Defina uma altura:")
  let area02 = prompt("Defina uma largura")
  let area = area01* area02
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Em que ano estamos?")
  let nascimentoUsuario = prompt("Em que ano você nasceu?")
  let idadeUsuario = anoAtual - nascimentoUsuario
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imcCalculo = peso / (altura * altura)
  return imcCalculo.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
let nomeUsuario = prompt("Qual é o seu nome?")
let idadeUsuario01 = prompt("Qual é a sua idade?")
let emailUsuario = prompt("Qual é o seu email?")
console.log("Meu nome é " + nomeUsuario + "," + " tenho " + idadeUsuario01 +" anos" + "," + " e o meu email é " + emailUsuario + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 let coresFavoritas = []
 let cor01 = prompt("Digite sua primeira cor favorita:")
 coresFavoritas.push(cor01)
  cor01 = prompt("Digite sua segunda cor favorita:")
 coresFavoritas.push(cor01)
  cor01 = prompt("Digite sua terceira cor favorita:")
 coresFavoritas.push(cor01)
 console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 custoPorIngresso = custo/valorIngresso
return custoPorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let valor = string1.length === string2.length
return valor  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let ultimoElemento = array[array.length-1]
let primeiroElemento = array[0]
array.splice(0,1,ultimoElemento);
array.splice(array.length-1,1,primeiroElemento);
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtualUsuario = prompt("Qual é o ano atual?")
  let anoNascimentoMelhorAmigo = prompt("Em que ano seu melhor amigo nasceu?")
  let carteiraDeIdentidade = prompt("Em que ano foi emitida a sua carteira de identidade?")
  let idadeComparacao = anoAtualUsuario - anoNascimentoMelhorAmigo
  let renovacaoComparacao = anoAtualUsuario - carteiraDeIdentidade
  let jovem = idadeComparacao <= 20 && renovacaoComparacao >= 5
  console.log(jovem)
  let adulto = idadeComparacao > 20 && idadeComparacao <= 50 && renovacaoComparacao >= 10
  console.log(adulto)
  let idoso = idadeComparacao > 50 && renovacaoComparacao >= 15 
  console.log(idoso)
  console.log("------------------------------")
  console.log(jovem || adulto || idoso)
  console.log("-------------------------------")
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
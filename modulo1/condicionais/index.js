// Exercício de interpretação de código 01

//  Mostra o resultado positivo ou negativo de números que forem dividos por 2 
//  Imprime o resultado "passou no teste" para números pares.
//  Imprime o resultado "não passou no teste" para números ímpares.

//  Exercício de interpretação de código 02 

//  Para mostrar as frutas e os valores das mesmas
// "O preço da fruta ", maçã, " é ", "R$ ", 2,25)
// Sem o breack o valor subscreve 

//  Exercício de interpretação de código 03

// Perguntando um número para o usuário
// Com número 10 será exibida a mensagem "Esse número passou no teste."
// No caso do -10 não irá exibir nada.
// O código pede para que seja um número maior que 0, nesse caso então, não há o que executar.


// Exercício de escrita de código 1 

let idadeUsuario = prompt("Qual é a sua idade?")

 if (idadeUsuario >= 18) {
    console.log("você pode dirigir!!")
}
 else {
    console.log("você não pode dirigir!!")
}


// // Exercício de escrita de código 2

let periodoEstudo = prompt("Em qual turno você estuda?Digite;M - Matutino/ V - Vespertino/ N - Noturno.")

  if (periodoEstudo.toUpperCase() === "M") {
    console.log("Bom dia!!!")
}
     else if (periodoEstudo.toUpperCase() === "V") {
    console.log("Boa tarde!!!")
}
     else if (periodoEstudo.toUpperCase() === "N") {
    console.log("Boa noite!!!")
}



// Exercício de escrita de código 3

let periodo = prompt("Em qual turno você estuda?Digite;M - Matutino/ V - Vespertino/ N - Noturno.")

switch(periodo){
    case "M":
        console.log("Bom dia!!!")
        break;
}
switch(periodo){
    case "V":
        console.log("Boa tarde!!!")
        break;
}
switch(periodo){
    case "N":
        console.log("Boa noite!!!")
        break;
        default:
        break;
}


// Exercício de escrita de código 4

let generoFilme = prompt("Qual é o gênero do filme que você deseja assistir")
let valorIngresso = prompt("Qual valor do ingresso?")

if(generoFilme === "fantasia", valorIngresso < 15){
    console.log("Bom filme!")
}
else{
    console.log("Escolha outro filme :(")
}
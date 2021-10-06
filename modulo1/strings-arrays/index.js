// Exercício 1 de Interpretação de código 

// a. undefined
// b. null
// c. 11 elementos  de arrays 
// d. o numero 3 se encontra na posição 0
// e. substuiu o elemento da posição 1. de 4 para 19
// f. mostra o numero da posição 6 no caso o numero 9


// Exercício 2 de Interpretação de código 

// SUBI NUM ONIBUS EM MIRROCOS  e a quantidade de caracteres, que são 29.


// Exercício 1 de Escrita de código 

let nomeUsuario = prompt("Qual é o seu nome?")
let emailUsuario = prompt("Qual é o seu email?")
 console.log("O email " + emailUsuario + " foi cadastrado com sucesso." + "Seja bem-vinda(o)," + nomeUsuario)

 
 // Exercício 2 de Escrita de código 
 
 let comidasFavoritas = ["comida japonesa", "salada" , "coxinha", "churrasco", "nhoque"]
 console.log(comidasFavoritas)

 let comidaFavorita01 = comidasFavoritas[0]
 console.log("Essas são minhas comidas favoritas " + comidaFavorita01)

 comidaFavorita01 = comidasFavoritas[1]
 console.log("Essas são minhas comidas favoritas " + comidaFavorita01)

 comidaFavorita01 = comidasFavoritas[2]
 console.log("Essas são minhas comidas favoritas " + comidaFavorita01)

 comidaFavorita01 = comidasFavoritas[3]
 console.log("Essas são minhas comidas favoritas " + comidaFavorita01)

 comidaFavorita01 = comidasFavoritas[4]
 console.log("Essas são minhas comidas favoritas " + comidaFavorita01)

 let comidaUsuario = prompt("Qual é sua comida favorita?")
 let adcComida =  comidasFavoritas.splice(1, 1, comidaUsuario)
 console.log(comidasFavoritas)

 // Exercício 3 de Escrita de código 

 let listaDeTarefas =[]
 let tarefaUsuario01 = prompt("Qual a primeira tarefa que você faz no dia?")
 let tarefaUsuario02 = prompt("Qual é a segunda tarefa que você faz no dia?")
 let tarefaUsuario03 = prompt("Qual é terceira tarefa que você faz no dia ?")

 listaDeTarefas.push(tarefaUsuario01)
 console.log(listaDeTarefas)

 listaDeTarefas.push(tarefaUsuario02)
 console.log(listaDeTarefas)

 listaDeTarefas.push(tarefaUsuario03)
 console.log(listaDeTarefas)

 let indiceTarefa = Number(prompt("Qual é o indice da tarefa que voce ja fez hoje?"))
 let removeTarefa = listaDeTarefas.splice(indiceTarefa, 1)
 console.log(listaDeTarefas)
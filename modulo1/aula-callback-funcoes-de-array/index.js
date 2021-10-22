//EXEMPLOS--------------------------------------------------
//callback
// const verificaPar = (numero, imprimir) => {
//     // console.log(numero)
//     // console.log("imprimir: ", imprimir)
//     if(numero % 2 === 0){
//         const resultado = numero/2
//         imprimir(resultado)
//     }
// }

// const imprimirMensagem = function(valor){
//     console.log(valor)
// }

// verificaPar(2, imprimirMensagem)


//sintax map
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
//  (pokemon, indice, array) => {
//     return pokemon.nome
//  }

//callback para verificar os itens do array
// const imprimirItem = (elemento, indice, array) =>{
//     console.log(elemento, "indice:", indice, "array:", array)
// }

// const pegarNomesDosPokemons = (pokemon) => {
//     return pokemon.nome 
// }

//  const nomeDosPokemons =  pokemons.map(pegarNomesDosPokemons)
//  console.log("array original:", pokemons)
//  console.log(nomeDosPokemons)


//sintax filter

// const pegarPokemonsDoTipoGrama = (pokemon) => {
//     if(pokemon.tipo === "água") {
//         return true
//     }else {
//         return false
//     }
// }
// console.log(pokemons)
// const pokemonsDeGrama = pokemons.filter(pegarPokemonsDoTipoGrama)
// console.log(pokemonsDeGrama)

//EXERCÍCIO 1-----------------------------------------------
//Faça um código que determine se um número é ímpar
//construção do pensamento...
// const numero = 1
// if(numero % 2 !== 0){
//     console.log("Sim, é ímpar")
// }

//definição da função
//A ideia é que ele receba um único número 
// const verificaImpar = (numero, imprimir) => {
//    console.log("imprimir: ", imprimir)
//     if(numero % 2 !== 0){
//         //imprima no terminal "Sim, é ímpar" somente se o número for ímpar.
//         // imprimir()
//     }
// }

// //Use uma função de callback para imprimir a mensagem no console

// const imprimirMensagem = () => {
//     console.log("Sim, é ímpar")
// }

// verificaImpar( 1, prompt)



//EXERCÍCIO 2-----------------------------------------------
//Faça um programa que tenha uma lista de numbers
// const listaDeNumeros = [10,11,12,13,14,15]
// //transforme-a numa nova lista contendo strings
// const transformarConteudoEmString = (valor, index) => {
//     //O formato das strings deve ser: O elemento ${index} é ${valor}
//     return `O elemento ${index} é ${valor}`
// }

// const novoArray = listaDeNumeros.map(transformarConteudoEmString)

// console.log(novoArray)

//EXERCÍCIO 3-----------------------------------------------
//1 - Faça um programa que tenha uma lista de números
    // const listaDeNumeros = [1,2,3,4,5,8,10,11,13,15,20]
// 2 - crie dois novos arrays
//a. Um só com números maiores que 10
// const pegarNumerosMaioresQue10 = (numero) => {
//     return numero > 10
// }

// const numerosMarioresQue10 = listaDeNumeros.filter(pegarNumerosMaioresQue10)

// console.log(numerosMarioresQue10)

// //b. Outro só com números pares
// // const pegarNumerosPares = (numero) => {
// //     return numero % 2 === 0
// // }
// // const numerosPares = listaDeNumeros.filter(pegarNumerosPares)

// //comum ver em documentações
// const numerosPares = listaDeNumeros.filter((numero) => {
//      return numero % 2 === 0
// })
// console.log(numerosPares)

//EXERCÍCIO 4-----------------------------------------------
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//  ]
 
//  const pegarProdutosDeLimpeza = (produto) => {
//      return produto.categoria === "Limpeza"
//  }

//  const produtosDeLimpeza = produtos.filter(pegarProdutosDeLimpeza)
//  console.log(produtosDeLimpeza)

//  const pegarNomeDosProdutosDeLimpeza = (produto) => {
//     return produto.nome
//  }

//  const nomeDosProdutosDeLimpeza = produtosDeLimpeza.map(pegarNomeDosProdutosDeLimpeza)

//  console.log(nomeDosProdutosDeLimpeza)

//simplificado
// const nomeDosProdutosDeLimpeza = produtos.filter(pegarProdutosDeLimpeza).map(pegarNomeDosProdutosDeLimpeza)

// console.log(nomeDosProdutosDeLimpeza)



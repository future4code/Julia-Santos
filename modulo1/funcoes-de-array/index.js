// Exercício de Interpretação de código 01

// o item exibe cada objeto dentro da matriz
// o índice exibe uma posição de cada objeto dentro da matriz
// o array exibe todas as informações presentes no array


// Exercício de Interpretação de código 02 

// Exibiu uma nova array 


// Exercício de Interpretação de código 03

// Exibiu os nomes e apelidos diferentes de "Leticia" e "Chijo"


//  Exercício de escrita de código 01

let petz = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

let novaArray = petz.map((item, index, array ) => {
    return item.nome
})

console.log(novaArray)

let novaArray02 = petz.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(novaArray02)

let novaArray03 = petz.filter((item,index,array) => {
    return item.raca === "Poodle"
}).map((pet, i, array) => {
    return "Você ganhou um cupom de desconto de 10% para tosar o/a " + pet.nome
})

console.log(novaArray03)


//  Exercício de escrita de código 02

let produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 let novaLista = produtos.map((item, index, array) =>{
     return item.nome
 })
console.log(novaLista)

let novaLista01 = produtos.map((item, index, array) => {
    return {nome:item.nome, preco:item.preco - (item.preco * 0.05)}
})
console.log(novaLista01)

let bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(bebidas)

let limpeza = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(limpeza)

let limpeza01 = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
}).map((item, index, array) => {
    return " Compre " + item.nome + " por " + item.preco
})
console.log(limpeza01)
//  Exercicio de interpretacao de código  01

//  Incrimentou números somando com o anterior, até o número 5 dando o resultado 10 


// Exercicio de interpretacao de código  02

// Ira mostrar os números maiores que 18 
// Colocando .entries() voce consegue acessar o indice e o valor dela e com keys() da indice


// Exercicio de interpretacao de código  03

//  ele concatena os caracteres pelo valor colocado no prompt, sendo 4 estrelinhas na mesm linha


//  Exercício de escrita de código 01

// let animaisUsuario = prompt("Quantos bichinhos de estimação você tem?")
// let animais = []
// if(animaisUsuario == 0) {
//     console.log("Que pena! Você pode adotar um pet")
// }
// else{
//     for(let i = 0; i < animaisUsuario; i ++){
//         let nomeAnimal = prompt("Qual o nome do bichinho?")
//         animais.push(nomeAnimal)
//     }
// }
// console.log(animais)


//  Exercício de escrita de código 02

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function letraA(array) {
    for(let numero of array){
        console.log(numero)
    }
}
letraA(array)

function letraB(array) {
    for(let numero of array){
        console.log(numero / 10)
    }
}

letraB(array)

let novaArray = []
function letraC(array) {
    for(let numero of array){
        if((numero % 2) == 0){
            novaArray.push(numero)
        }else{

        }
    }
    console.log(novaArray)
}

letraC(array)

function letraD(array) {
    for(let i = 0; i < array.length;i ++){
        console.log("O elemento do índex " + i + " é:" + array[i])
    }
}

letraD(array)

function letraE(array) {
    let valorMaximo = 0
    let valorMinimo = array[0]
    for(let numero of array){
        if (numero > valorMaximo) {
            valorMaximo = numero
        }
        if (numero < valorMinimo) {
            valorMinimo = numero
            
        }
    }
    console.log(valorMaximo)
    console.log(valorMinimo)
}

letraE(array)
//escreva o seu 

//exercicio 1 (a)

// const minhaString:string = 2
// console.log(minhaString)
    
// A type number não é atribuivel a type string


//(b)

const meuNumero:number| string = "amigaum"
console.log(meuNumero)

//(c)

type pessoas = {
    nome:string,
    idade:number,
    corFavorita:string
}

const pessoa1:pessoas = {
    nome:"Julia",
    idade:23,
    corFavorita:"rosa"
}

const pessoa2:pessoas = {
    nome:"Rubens",
    idade:23,
    corFavorita:"vermelho"
}

const pessoa3:pessoas = {
    nome:"Dexter",
    idade:2,
    corFavorita:"azul"
}

//(d)

enum corFavorita {
    VERMELHA = "vermelha",
    AZUL = "azul",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VIOLETA = "violeta",
    VERDE = "verde"
}

const pessoa4:pessoas = {
    nome:"Dexter",
    idade:2,
    corFavorita: corFavorita.AZUL
}

const pessoa5:pessoas = {
    nome:"Julia",
    idade:23,
    corFavorita:corFavorita.VIOLETA
}

const pessoa6:pessoas = {
    nome:"Rubens",
    idade:23,
    corFavorita:corFavorita.VERMELHA
}

console.log(pessoa1, pessoa2, pessoa3)
console.log(pessoa4, pessoa5, pessoa6)

//exercicio2

//(a)

function obterEstatisticas(numeros:number[]):number {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([0, 5, 4, 7]))


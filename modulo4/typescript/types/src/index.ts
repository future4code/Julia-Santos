// exercicio 1 

function checaTriangulo(
    a: number,
    b:number,
    c:number
    ):any{
        if (a !== b && b !== c) {
            return "Escaleno";
          } else if (a === b && b === c) {
            return "Equilátero";
          } else {
            return "Isósceles";
          }
        
} 
console.log(checaTriangulo(5, 5, 3))

console.log("eu sou a julia")


//exercicio 2

function imprimeTresCoresFavoritas(){
    const cor1:string = "roxo"
    const cor2:string = "azul"
    const cor3:string = "vermelho"
    console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()


//exercicio 3 

function checarAnoBissexto(ano:number){
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log(checarAnoBissexto(2024))


//exercicio 4

function compararDoisNumeros(num1:number, num2:number){

    let maiorNumero:number
    let menorNumero:number

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
      } else {
        maiorNumero = num2;
        menorNumero = num1;
      }
    
      const diferenca = maiorNumero - menorNumero;
    
      return diferenca 
}

console.log(compararDoisNumeros(8,4))


function checaRenovacaoRG() {
    const anoAtual = Number(2023)
    const anoNascimento = Number(1986)
    const anoEmissao = Number(2006)

    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG())
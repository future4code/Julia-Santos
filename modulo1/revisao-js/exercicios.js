// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort(comparaNumeros)
}

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }



// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let  numerosPares = array.filter((item, indice, array) => { 
      return  item % 2 === 0
  })
      return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let  numerosPares = array.filter((item, indice, array) => { 
      return  item % 2 === 0
  })
  let numeroMultiPorSiMesmo = numerosPares.map(( item, indice, array) => {
     return item * item
  })
  return numeroMultiPorSiMesmo
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
   for(let i = 0; i < array.length; i++){
      if(maiorNumero < array[i]){
         maiorNumero = array[i]
      }
   } 

  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero 
   let diferenca
   let validacao
   if(num1 < num2){
      maiorNumero = num2
      diferenca = num2 - num1
      if (num2 % num1) {
         
      }else{

      }
   }else{
      maiorNumero = num1
      diferenca = num1 - num2
   }

   console.log(num1,num2,maiorNumero,diferenca)
   return {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor:true,
      diferenca:diferenca
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
//Exercício 1

// function informPerson(name:string, birth:number){}

type inform = {
    nameIs:string | any
    birthDay:number | any
    birthMonth:number | any
    birthYear:number | any
}

const informs:inform = {
    nameIs:"Julia",
    birthDay:1,
    birthMonth:7,
    birthYear:1998
}


console.log("Olá me chamo", )


function imprimeTresCores(){
    const cor1:string = "roxo"
    const cor2:string = "azul"
    const cor3:string = "vermelho"
    console.log([cor1, cor2, cor3])
}

imprimeTresCores()

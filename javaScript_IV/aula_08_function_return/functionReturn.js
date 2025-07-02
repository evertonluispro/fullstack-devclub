/*
Functions / Funções
    
Função void (vazia), não retorna nada.
Função return, retorna um valor para quem chamou a função
*/

function sum(value, value2) { 
    return value + value2
}

//function sum(value, value2) { // void
//    console.log(value + value2)
//}

const result = sum(10, 20)
console.log(result + " é o resultado da soma")
/* Functions / Funções

    Function padrão -> function() {}
    arrow function -> () => {}

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".

*/

function sayMyName(name) {
  return `Seu nome é ${name}`;
}   

const sum = (number1, number2) => number1 + number2;

console.log(sayMyName('João'))
console.log(sum(2, 3))
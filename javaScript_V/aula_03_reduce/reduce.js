/* 
    Reduce
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parãmetros
        - acumulador
        - valor atual
        - index
        - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7];

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',  
        fpundedOn: 1975,
    },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004,
    },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
]

const marketValue = companies.reduce((acumulador, value) => {
    return acumulador + value.marketValue;
}, 0); 

console.log(marketValue); // 1840

const cart = [
    { productName: 'Abóbora', valuePerKg: 5, kg: 1},
    { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3},
    { productName: 'Limão', valuePerKg: 1.2, kg: 2},
    { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67},
    { productName: 'Morango', valuePerKg: 11.9, kg: 3},
]

const finalValue = cart.reduce((acumulador, value) => {
    return acumulador + (value.valuePerKg * value.kg);
}, 0);

console.log(`O valor final é R$ ${finalValue.toFixed(2)}`); // 55.81
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {name: 'Microsoft',marketValue: 415,CEO: 'Satya Nadella', foundedOn: 1975,},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {name: 'Facebook',marketValue: 383,CEO: 'Mark Zuckerberg',foundedOn: 2004,},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
]

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado de todas as companhias -> REDUCE

const add10Percent = (company) => {
    company.marketValue += (company.marketValue / 10);
    return company;
}

const filterComppanies = (company) => company.foundedOn < 1990;

const calculateTotalMarketValue = (accumulator, company) => {
    return accumulator + company.marketValue;
}

const marketValueOldCompanies = companies
.map(add10Percent)
.filter(filterComppanies)
.reduce(calculateTotalMarketValue, 0);

console.log(`O valor de mercado das companhias fundadas antes de 1990 é R$ ${marketValueOldCompanies.toFixed(2)}`); // 112.70

// Subtrair 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas depois de 1980 -> FILTER
// Somar o valor de mercado de todas as companhias -> REDUCE

const sub10Percent = (company) => {
    company.marketValue -= (company.marketValue / 10);
    return company;
}

const filterCompanies = (company) => company.foundedOn > 1980;

const calculateTotalMarketValue1 = (accumulator, company) => {
    return accumulator + company.marketValue;
}

const marketValueOldCompanies1 = companies
.map(sub10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue1, 0);

console.log(`O valor de mercado das companhias fundadas depois de 1980 é R$ ${marketValueOldCompanies1.toFixed(2)}`); // 112.70
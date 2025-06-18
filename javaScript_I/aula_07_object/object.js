/*
4. Object -> Objetos.

*/

let everton = {
    name: "Everton",
    age: 26,
    address: {
        street: "Rua dos bobos",
        number: 0,
        city: "São Paulo",
        state: "SP",
        country: "Brasil"
    }
}

everton.address.number = 1

console.log(everton.address.number)
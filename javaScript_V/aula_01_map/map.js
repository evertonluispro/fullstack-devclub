/* 
    MAP => Mapear o nosso array.
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map( item => {
    const newItem = item * 2
    return newItem
})

console.log(double); // [2, 4, 6, 8, 10, 12, 14]
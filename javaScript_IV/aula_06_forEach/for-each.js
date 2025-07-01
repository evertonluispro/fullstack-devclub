/*

    ForEach(item, index, array)

*/

const users = [
    {name: 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    {name: 'Paulo', age: 21, contact: '(12) 93443-3434'},
    {name: 'Aline', age: 40, contact: '(13) 94566-3434'},
    {name: 'Maria', age: 12, contact: '(14) 94343-3476'},
]

users.forEach( (item) => {
    console.log(item.name)
});
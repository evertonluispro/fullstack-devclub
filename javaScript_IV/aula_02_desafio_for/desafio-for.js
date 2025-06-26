let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {name: "Rodolfo", number: "(19) 94343-3434"},
    {name: "Paulo", number: "(12) 93443-3434"},
    {name: "Aline", number: "(13) 94566-3434"},
    {name: "Maria", number: "(14) 94343-3476"}
]

function search() {
    
    for(let i = 0; i < contacts.length ; i++) {
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado. Nome:${contacts[i].name}, Tel: ${contacts[i].number}`
            
            break
        } else {
            p.innerHTML = "Contato não encontrado. Tente novamente!"
        }
    }
}
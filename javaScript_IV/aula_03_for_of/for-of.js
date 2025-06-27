/*

    Estrutura de Repetição - LOOP
        - FOR OF

*/

const contacts = [
  { name: "Rodolfo", number: "(19) 94343-3434" },
  { name: "Paulo", number: "(12) 93443-3434" },
  { name: "Aline", number: "(13) 94566-3434" },
  { name: "Maria", number: "(14) 94343-3476" },
];

function search() {
    let found = false;

    for (const contact of contacts) {
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = `Contato encontrado. Nome: ${contact.name}, Tel: ${contact.number}`;
            found = true;
            break;
        }
    }

    if (!found) {
        p.innerHTML = "Contato não encontrado. Tente novamente!";
    }
}

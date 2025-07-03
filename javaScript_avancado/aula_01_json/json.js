/* JSON - JavaScript Object Notation

    - Padrão de troca e armazenamento de informações
    - Padrão lógico simples
    - Leve para ser enviado e recebido
    - Simples e fácil de entender
    - Derivado do JavaScript
    - Utiliza o formato chave / valor
*/

const user = {
    nome: "Rodolfo",
    idade: 31,
    filhos: null,
    hobbies: ["Codar", "Filmes", "Séries", "Academia"],
    casado: true,
    empresas: {
        devclub: {
            fundada: 2021,
            colaboradores: 40
        },
        monsterapp: {
            fundada: 2023,
            colaboradores: 4
        },
        atlas: {
            fundada: 2023,
            colaboradores: 5
        },
        agendasua: {
            fundada: 2023,
            colaboradores: 4
        }
    }
}

const userJson = JSON.stringify(user)

const userJsonToJS = JSON.parse(userJson)
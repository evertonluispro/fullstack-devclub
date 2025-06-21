/*
Alterando e Acessando Textos

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto
*/

const element = document.querySelector(".paragraph-js")

element.innerHTML = "Texto novo <b>Olá</b>"
console.log(element.textContent) // só HTML
console.log(element.innerText) // LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO
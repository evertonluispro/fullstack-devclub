/*

Operadores Lógicos

&& -> E -> Pessoa Exigente
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz
    true && true = true
    true && false = true
    false && false = false

! -> Negação
    !true = false
    !false = true

*/

const digitarASenha = true;
const digitarOToken = true;
const numeroDaConta = true;


if(digitarASenha && digitarOToken && numeroDaConta) {
    console.log("Logado com Sucesso")
} else {
    console.log("Autenticação FALHOU")
}
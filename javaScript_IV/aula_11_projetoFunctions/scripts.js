/* Desafio JokenPô

*/

const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    
    playGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

const playGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu empate!";
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        result.innerHTML = "Você ganhou!";
        humanScore.innerHTML = humanScoreNumber += 1
    } else {
        result.innerHTML = "Você perdeu para a Alexa!";
        machineScore.innerHTML = machineScoreNumber += 1
    }
};

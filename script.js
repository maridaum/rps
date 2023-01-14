let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'rock';
    playRound();
    updateScore();
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'paper';
    playRound();
    updateScore();
})


const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    getComputerChoice();
    playerChoice = 'scissors';
    playRound();
    updateScore();
})

const narratorText = document.querySelector('.narrator-text')
const pScore = document.querySelector('.p-score')
const cScore = document.querySelector('.c-score')

function getComputerChoice () {
    const choices=['rock', 'paper', 'scissors']
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

 function playRound() {
    if (playerChoice === computerChoice) {
        narratorText.innerText = 'Tie!'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        narratorText.innerText = `You win- ${playerChoice} beats ${computerChoice}.`
        ++playerScore;
        checkWinner()
  
    } else {
        narratorText.innerText = `You lost- ${computerChoice} beats ${playerChoice}.`
        ++computerScore;
        checkWinner()

    };
 }

 function updateScore () {
    pScore.innerText = `${playerScore}`
    cScore.innerText = `${computerScore}`
 }

 function checkWinner() {
    if (playerScore === 5) {
        narratorText.innerText = `You beat the computer!`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        narratorText.innerText = `The computer beat you. Try again. ):`
        playerScore = 0;
        computerScore = 0;
    }
 }
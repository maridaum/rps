function getComputerChoice () {
    const choices=['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice () {
    let userInput = prompt('Choose your weapon! Rock, paper, or scissors?')
    userInput = userInput.toLowerCase();
    if (userInput !== 'rock' || userInput !== 'paper' || userInput !== 'scissors') {
        return 'Invalid response'
    } else {
        return userInput;
    }
};


function checkWinner (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
    return 'Player';
    } else {
        return 'Computer';
    };
 };

function playRound (playerChoice, computerChoice) {
    const result = checkWinner(playerChoice, computerChoice);
    if (result === 'Tie') {
        return 'Tie!'
    } else if (result === 'Player') {
        return `You win- ${playerChoice} beats ${computerChoice}.`
    } else {
        return `You lost- ${computerChoice} beats ${playerChoice}.`
    }
 }; 

 

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound (playerChoice, computerChoice));
        if (checkWinner(playerChoice, computerChoice) === 'Player'){
            playerScore++;
        } else if (checkWinner(playerChoice,computerChoice) === 'Computer') {
            computerScore++;
        }
    };
    if (playerScore > computerScore) {
        console.log(`You won! Your score is ${playerScore} and the computer score is ${computerScore}.`);
    } else {
        console.log(`You lost! Your score is ${playerScore} and the computer score is ${computerScore}.`)
    };
}

game()
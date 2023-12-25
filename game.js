//Establish all the DOM nodes that wull need manipulation

//Entire game UI portion of the window
const gameUI = document.querySelector('.game-ui');

//Allows to display all game information relevant to the gameplay
const resultsDisplay = document.querySelector('.results');

//Count number of rounds
const roundCountDisplay = document.querySelector('.round-count');

//Display scores
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

//Allows to display computer and player's choice
const selectionDisplay = document.querySelector('.selections');

//Player or computer's choice for the specific round
const roundPlayerChoiceDisplay = document.querySelector('#player-selection-display');
const roundComputerChoiceDisplay = document.querySelector('#computer-selection-display');

//Display results for the specific round
const roundResultDisplay = document.querySelector('.round-result-display');

//Allow player to make a selection through buttons
const playerButtonSelection = document.querySelector('.player-selection');

//Play again button
const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.textContent = "Play again";

// Randomly select a value between rock, paper, and scissors.
function getComputerChoice() {
    let numberSelection = Math.ceil(Math.random() * 3);
    switch(numberSelection) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}

//create a variable to represent the winner
let winner;

//Play one round of rock, paper, scissors.
function playRound(playerSelection, computerSelection) {
    //Determine who wins.
    if (playerSelection === computerSelection) {
        winner = undefined;
        return `It's a tie, ${playerSelection} vs ${computerSelection}!`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "player";
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "computer";
        return `You lose, ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "player";
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "computer";
        return `You lose, ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "player";
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "computer";
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    } else {
        //The winner is "none" because without specifying a winner,
        //The program will assume the winner is the same than in the last round.
        winner = "none";
        return "Please write a valid choice! (Rock, paper or scissors).";
    }
}

//When player clicks a button, the option is logged.
let roundPlayerChoice = '';
let roundComputerChoice = '';

let playerScore = 0;
let computerScore = 0;

playerButtonSelection.addEventListener('click', (buttonClicked) => {
    let whichButtonClicked = buttonClicked.target;

    switch (whichButtonClicked.id) {
        case 'rock':
            roundPlayerChoice = 'rock';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "Your choice: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "Computer choice: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Player score: " + playerScore;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
            countRounds();
            break;
        case 'paper':
            roundPlayerChoice = 'paper';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "Your choice: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "Computer choice: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Player score: " + playerScore;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
            countRounds();
            break;
        case 'scissors':
            roundPlayerChoice = 'scissors';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "Your choice: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "Computer choice: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Player score: " + playerScore;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
            countRounds();
            break;
    }
});

//Count rounds from 1 to 5
let round = 1;

function countRounds() {
    if (round < 5 ) {
        round++;
        roundCountDisplay.textContent = "Round: " + round;
    } else if (round == 5) {
        round++;
        roundCountDisplay.textContent = determineGameWinner(playerScore, computerScore);
        resultsDisplay.removeChild(selectionDisplay);
        resultsDisplay.removeChild(roundResultDisplay);
        gameUI.removeChild(playerButtonSelection);
        gameUI.appendChild(buttonPlayAgain);
    } else {
        round = 1;
        roundCountDisplay.textContent = "Round: " + round;
        resultsDisplay.appendChild(selectionDisplay);
        resultsDisplay.appendChild(roundResultDisplay);
        gameUI.appendChild(playerButtonSelection);
        gameUI.removeChild(buttonPlayAgain);
    }

}

//Play again functionality
buttonPlayAgain.addEventListener('click', () => {
    countRounds();
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player score: " + playerScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;
});

//Determine game winner after 5 rounds
function determineGameWinner (finalPlayerScore, finalComputerScore) {
    if (finalPlayerScore > finalComputerScore) {
        return "Player victory!";
    } else {
        return "Game over!";
    }
}

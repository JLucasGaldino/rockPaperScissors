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
/*
//Play a succession of rounds and keep track of score
function game() {
    //Create variables to keep track of the score
    let playerScore = 0;
    let computerScore = 0;
    //Make the game continue indefinetily.
    while (true) {
        let roundPlayerChoice = whichButtonClicked;
        prompt("What is your choice?").toLowerCase();
        console.log("The player's choice is: " + roundPlayerChoice);
        //Create a local variable to store the computer's selection specific to this round.
        let roundComputerChoice = getComputerChoice();
        console.log("The computer's choice is: " + roundComputerChoice);
        //Start playing a round.
        console.log(playRound(roundPlayerChoice, roundComputerChoice));
        //update scores
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        console.log("Current player's score: " + playerScore);
        console.log("Current computer's score is: " + computerScore);
    }
}
*/
//When player clicks a button, the option is logged.
let roundPlayerChoice = '';
let roundComputerChoice = '';

let playerScore = 0;
let computerScore = 0;

const roundPlayerChoiceDisplay = document.querySelector('#player-selection-display');
const roundComputerChoiceDisplay = document.querySelector('#computer-selection-display');
const roundResultDisplay = document.querySelector('.round-result-display');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerButtonSelection = document.querySelector('.player-selection');

playerButtonSelection.addEventListener('click', (buttonClicked) => {
    let whichButtonClicked = buttonClicked.target;

    switch (whichButtonClicked.id) {
        case 'rock':
            roundPlayerChoice = 'rock';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "The player's choice is: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "The computer's choice is: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Current player's score: " + playerScore;
            computerScoreDisplay.textContent = "Current computer's score is: " + computerScore;
            countRounds();
            break;
        case 'paper':
            roundPlayerChoice = 'paper';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "The player's choice is: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "The computer's choice is: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Current player's score: " + playerScore;
            computerScoreDisplay.textContent = "Current computer's score is: " + computerScore;
            countRounds();
            break;
        case 'scissors':
            roundPlayerChoice = 'scissors';
            roundComputerChoice = getComputerChoice();
            roundPlayerChoiceDisplay.textContent = "The player's choice is: " + roundPlayerChoice;
            roundComputerChoiceDisplay.textContent = "The computer's choice is: " + roundComputerChoice;
            roundResultDisplay.textContent = playRound(roundPlayerChoice, roundComputerChoice);
            if (winner === "player") {
                playerScore++;
            } else if (winner === "computer") {
                computerScore++;
            }
            playerScoreDisplay.textContent = "Current player's score: " + playerScore;
            computerScoreDisplay.textContent = "Current computer's score is: " + computerScore;
            countRounds();
            break;
    }
});

//Count rounds
let round = 1;
const roundCountDisplay = document.querySelector('.round-count');
const resultsDisplay = document.querySelector('.results');
const selectionDisplay = document.querySelector('.selections');
const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.textContent = "Play again";
const gameUI = document.querySelector('.game-ui');

function countRounds() {
    //Count rounds from 1 to 5
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
    playerScoreDisplay.textContent = "Current player's score: " + playerScore;
    computerScoreDisplay.textContent = "Current computer's score is: " + computerScore;
});

//Determine game winner after 5 rounds
function determineGameWinner (finalPlayerScore, finalComputerScore) {
    if (finalPlayerScore > finalComputerScore) {
        return "Player victory!";
    } else {
        return "Game over!";
    }
}

//Start the game
//PROBLEM: starts running before DOM fully loaded on screen when loaded for first time.
//PSEUDO: start game when any button is pressed that hasn't been previously.
//game();

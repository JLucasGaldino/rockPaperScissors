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

//Play 5 rounds
function game() {
    //Create variables to keep track of the score
    let playerScore = 0;
    let computerScore = 0;
    //Make the game continue indefinetily.
    while (true) {
        let roundPlayerChoice = prompt("What is your choice?").toLowerCase();
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

//Start the game
game();

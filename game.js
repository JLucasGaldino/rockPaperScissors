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
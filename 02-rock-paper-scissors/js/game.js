// variables
const CHOICES = ["rock", "paper", "scissor"];

// functions
function getComputerSelection() {
    let computerChoice = Math.floor(Math.random()*3);
    return CHOICES[computerChoice];
}

function startRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = `You tied!`;
    }
    else {
        if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "rock")) {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    return result;
}

// prompt selection from player
function getPlayerSelection() {
}

// play game num__rounds
function startGame()
{
    console.log(startRound(`rock`, getComputerSelection()));
}



startGame();
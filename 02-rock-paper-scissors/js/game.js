// variables
const CHOICES = ["rock", "paper", "scissor"];
const NUM__ROUNDS = 5;

// functions
// generate random computerSelection
function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3);
    return CHOICES[computerChoice];
}

// simulate one round
function playRound(playerSelection, computerSelection) {
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
    return prompt("Please enter rock, paper, or scissor").toLowerCase();
}

// check if player typed in valid selection
function isValidSelection(playerSelection)
{
    return CHOICES.includes(playerSelection);
}

// play game num__rounds
function play()
{
    let playerSelection;
    for (let count = 1; count <= NUM__ROUNDS; count++)
    {
        playerSelection = getPlayerSelection();
        if (isValidSelection(playerSelection)) {
            console.log(playRound(playerSelection, computerPlay()));
        }
        else {
            console.log(`${playerSelection} is an invalid choice`);
        }
    }
}

play();
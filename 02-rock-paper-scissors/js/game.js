// variables
const CHOICES = [`rock`, `paper`, `scissor`];

// functions
function getComputerSelection() {
    let computerChoice = Math.floor(Math.random()*3);
    return CHOICES[computerChoice];
}

function startRound(playerSelection, computerSelection) {
    let ifPlayerWins = false;
    if (playerSelection === computerSelection) return 0;
    if (playerSelection === `rock` && computerSelection === `scissor`) {
        ifPlayerWins = true;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        ifPlayerWins = true;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        ifPlayerWins = true;
    }
    return ifPlayerWins;
}

function startGame()
{
    console.log(startRound(this.dataset.id, getComputerSelection()));
}


// event listeners
const buttons = document.querySelectorAll(`button`);
buttons.forEach(button => button.addEventListener(`click`, startGame));
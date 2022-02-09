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

function updateScores(result) {
    if (result === 0) return;
    let player = document.querySelector(`.score--player`);
    let computer = document.querySelector(`.score--computer`);
    let playerScore = parseInt(player.innerHTML);
    let computerScore = parseInt(computer.innerHTML);
    if (result) {
        player.textContent = ++playerScore;
    } else {
        computer.textContent = ++computerScore;
    }

}

function startGame()
{
    let result = startRound(this.dataset.id, getComputerSelection());
    updateScores(result);
}


// event listeners
const buttons = document.querySelectorAll(`button`);
buttons.forEach(button => button.addEventListener(`click`, startGame));
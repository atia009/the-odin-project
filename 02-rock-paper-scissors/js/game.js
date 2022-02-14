// variables
const CHOICES = [`rock`, `paper`, `scissor`];
const MAX_POINTS = 5;

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
    const player = document.querySelector(`.score--player`);
    const computer = document.querySelector(`.score--computer`);
    if (result) {
        setScore(player, getPlayerScore());
    } else {
        setScore(computer, getComputerScore());
    }
}

function setScore(participant, score) {
    participant.textContent = ++score;
}


// fix this function, tied not displaying
function updateMessage(result) {
    let message = `You tied this round!`;
    if (isGameOver()) {
        message = (getPlayerScore == 5) ? `Game over! You win!!` : `Game over! You lose!!`;
    } else {
        message = (result) ? `You win this round!` : `You lose this round!`;
    }
    setMessage(message);
}

function setMessage(resultMessage) {
    let message = document.querySelector(`.result__message`);
    message.textContent = resultMessage;
}

function isGameOver() {
    return (getPlayerScore() < 5 && getComputerScore() < 5) ? false : true;
}

function getPlayerScore() {
    return parseInt(document.querySelector(`.score--player`).innerHTML);
}

function getComputerScore() {
    return parseInt(document.querySelector(`.score--computer`).innerHTML);
}

function startGame()
{
    if (isGameOver()) return;
    const result = startRound(this.dataset.id, getComputerSelection());
    updateScores(result);
    updateMessage(result);
}


// event listeners
const buttons = document.querySelectorAll(`button`);
buttons.forEach(button => button.addEventListener(`click`, startGame));
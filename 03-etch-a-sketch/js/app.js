// variables
const MAX_NUMBER = 100;
const TOTAL_SIDE = 960;

// functions
function startController() {
    createGrid();
    setGridColumns();
    setGridRows();
    startHoverController();
    startButtonFunctionality();
}

function createGrid(numEachSide = 16) {
    const numSquares = numEachSide ** 2;
    const side = TOTAL_SIDE / numEachSide;
    for (let count = 1; count <= numSquares; count++) {
        createSquare(side);
    }
}

function createSquare(sideOfSquare) {
    const grid = document.querySelector(`.grid`);
    let newSquare = document.createElement(`div`);
    newSquare.classList.add(`grid__square`);
    newSquare.setAttribute(`style`, `width:${sideOfSquare}px; height:${sideOfSquare}px`);
    grid.insertAdjacentElement(`beforeend`, newSquare);
}

function setGridColumns(columns = 16) {
    const grid = document.querySelector(`.grid`);
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function setGridRows(rows = 16) {
    const grid = document.querySelector(`.grid`);
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function startHoverController(hoverEffectName) {
    const squares = document.querySelectorAll(`.grid__square`);
    switch (hoverEffectName) {
        case `random`:
            squares.forEach(square => square.addEventListener(`mouseenter`, startRandomHover));
            break;
        case `trail`:
            squares.forEach(square => square.addEventListener(`mouseenter`, startTrailHover));
            break;
        default: 
            squares.forEach(square => square.addEventListener(`mouseenter`, startNormalHover));
            break;
    }
}

function startNormalHover() {
    this.style.backgroundColor = `#000`;
}

function startRandomHover() {
    console.log("Random");
}

function startTrailHover() {
    console.log("Trail");
}

function startButtonFunctionality() {
    const buttons = document.querySelectorAll(`.button`);
    buttons.forEach(button => button.addEventListener(`click`, startButtonController));
}

function getUserGridInput() {
    return prompt(`Please enter size of desired grid between 1 to 100:`);
}

function isUserInputValid(gridSize) {
    return (gridSize >= 1 && gridSize <= 100);
}

function createErrorMessage(number) {
    alert(`${number} is out of range!`);
}

function deleteGrid() {
    document.querySelector(`.grid`).innerHTML = ``;
}

// event listeners
window.addEventListener(`DOMContentLoaded`, startController);

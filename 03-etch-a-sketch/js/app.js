// variables
const MAX_NUMBER = 100;
const TOTAL_SIDE = 960;
const normalBtn = document.querySelector(`#normal`);

// functions
function startController() {
    createGrid();
    setGridColumns();
    setGridRows();
    startHoverController();
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

function changeProperty(element, property, value) {
    element.style.property = value;
}

// event listeners
window.addEventListener(`DOMContentLoaded`, startController);
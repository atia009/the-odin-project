// variables
const MAX_NUMBER = 100;
const TOTAL_SIDE = 960;
const normalBtn = document.querySelector(`#normal`);

// functions
function startController() {
    createGrid();
    setGridColumns();
    setGridRows();
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

// event listeners
window.addEventListener(`DOMContentLoaded`, startController);
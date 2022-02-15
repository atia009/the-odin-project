const TOTAL_SIDE = 960;

function createGrid(numEachSide = 16) {
    const grid = document.querySelector(`.grid`);
    const numSquares = numEachSide ** 2;
    const side = TOTAL_SIDE / numEachSide;
    for (let count = 1; count <= numSquares; count++) {
        let newSquare = document.createElement(`div`);
        newSquare.setAttribute(`style`, `width:${side}px; height:${side}px`);
        grid.insertAdjacentElement(`beforeend`, newSquare);
    }
    setGridColumns();
    setGridRows();
}

function setGridColumns(columns = 16) {
    const grid = document.querySelector(`.grid`);
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function setGridRows(rows = 16) {
    const grid = document.querySelector(`.grid`);
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

createGrid();
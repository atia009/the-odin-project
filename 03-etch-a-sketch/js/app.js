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
}

createGrid();
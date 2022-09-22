const displayController = (function(){
  let squareCount = 0;
  let message;
  let isGameOver = false;
  const squareCombinations = [
    {
      name: `topLeftSquare`,
      matches: {
        horizontal: [0, 1, 2],
        vertical: [0, 3, 6]
      }
    },
    {
      name: `middleSquare`,
      matches: {
        horizontal: [3, 4, 5], 
        vertical: [1, 4, 7],
        topLeftDiagonal: [0, 4, 8],
        topRightDiagonal: [2, 4, 6],
      }
    },
    {
      name: `botRightSquare`,
      matches: {
        horizontal: [6, 7, 8],
        vertical: [2, 5, 8]
      }
    },
  ]

  // cache DOM
  const el = document.querySelector(`.display-module`);
  const template = document.querySelector(`.display-template`).innerHTML;
  const displayTemplate = el.querySelector(`.display`);

  render();
  // functions
  function render() {
    setMessage();
    let templateHTML = template.replace(/{{.}}/g, message);
    displayTemplate.innerHTML = templateHTML;
  }

  function updateSquareCount() {
    if (squareCount < 8) {
      squareCount++;
      startSquareCheck();
    } else {
      isGameOver = true;
    }
    render();
  }

  function setMessage() {
    if (isGameOver) {
      message = `Game Over!`;
    } else {
      message = `Turn ${squareCount + 1}`;
    }
  }

  function startSquareCheck() {
    const board = gameBoard.getBoard();
    if (board[0] != ``) getSquareCombinations(squareCombinations[0].matches);
    if (board[4] != ``) getSquareCombinations(squareCombinations[1].matches);
    if (board[8] != ``) getSquareCombinations(squareCombinations[2].matches);
  }

  function getSquareCombinations(matches){
    for (const pattern in matches) {
      if (hasThreeMatchingSquares(matches[pattern])) {
        isGameOver = true;
        break;
      };
    }
  }

  function hasThreeMatchingSquares(squares) {
    const board = gameBoard.getBoard(); 
    if (board[squares[0]] === board[squares[1]] && board[squares[0]] === board[squares[2]]) return true;
    return false;
  }

  
  return {
    updateSquareCount: updateSquareCount
  }
  
})();

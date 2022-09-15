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

  render();
  // functions
  function render() {
    setMessage();
    let templateHTML = template.replace(/{{.}}/g, message);
    el.innerHTML = templateHTML;
  }

// start square check after turn 6

  function updateSquareCount() {
    if (squareCount < 8) {
      squareCount++;
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
  
  return {
    updateSquareCount: updateSquareCount
  }
  
})();

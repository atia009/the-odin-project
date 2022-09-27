const displayController = (function(){
  let squareCount = 0;
  let message = `Click to Start`;
  let isGameOver = false;
  let gameState = false;
  const players = [];
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
  ];

  // cache DOM
  const el = document.querySelector(`.display-module`);
  const template = document.querySelector(`.display-template`).innerHTML;
  const displayTemplate = el.querySelector(`.display`);
  const button = el.querySelector(`.display-btn`);
  const player1 = el.querySelector(`.player-1`);
  const player2 = el.querySelector(`.player-2`);  

  // bind events
  button.addEventListener(`click`, updateGameState);

  render();
  // functions
  function render() {
    let templateHTML = template.replace(/{{.}}/g, message);
    displayTemplate.innerHTML = templateHTML;
  };

  function updatePlayers() {
    if (players.length === 2) {
      player1.textContent = `${players[0].getName()}(X)`;
      player2.textContent = `${players[1].getName()}(O)`;
    } else {
      player1.textContent = `Player 1(X)`;
      player2.textContent = `Player 2(O)`;
    }
  }
    
  function updateGameState() {
    if (gameState) {
      gameState = false;
      gameBoard.deleteBoard();
      deleteDisplayState();
    } else {
      createPlayer();
      createPlayer();
      gameState = true;
      setMessage();
      updatePlayers();
      render();
    }
    updateButton();
  };

  function getGameState() {
    return gameState;
  };

  function updateButton() {
    if (button.textContent === `Start`) {
      button.textContent = `Restart`;
    } else {
      button.textContent = `Start`;
    }
  };

  function updateSquareCount() {
    if (squareCount < 9) {
      squareCount++;
      startSquareCheck();
    } else {
      updateIsGameOver();
    }
    setMessage();
    render();
  };

  function deleteDisplayState() {
    deleteSquareCount();
    isGameOver = false;
    message = `Click to Start`;
    render();
    removePlayers();
    updatePlayers();
  };

  function deleteSquareCount() {
    squareCount = 0;
  };

  function setMessage() {
    if (isGameOver && !message.includes(`won`)) {
      message = `Tied!`;
    } else if (!isGameOver) {
      message = `Turn ${squareCount + 1}`;
    }
  }

  function startSquareCheck() {
    const board = gameBoard.getBoard();
    if (board[0] != ``) getSquareCombinations(squareCombinations[0].matches);
    if (board[4] != ``) getSquareCombinations(squareCombinations[1].matches);
    if (board[8] != ``) getSquareCombinations(squareCombinations[2].matches);
  };

  function getSquareCombinations(matches){
    for (const pattern in matches) {
      if (hasThreeMatchingSquares(matches[pattern])) {
        setWinnerMessage(matches[pattern]);
        updateIsGameOver();
        break;
      };
    };
  };

  function hasThreeMatchingSquares(squares) {
    const board = gameBoard.getBoard(); 
    if (board[squares[0]] === board[squares[1]] && board[squares[0]] === board[squares[2]]) return true;
    return false;
  };

  function getIsGameOver() {
    return isGameOver;
  };

  function updateIsGameOver() {
    if (isGameOver) {
      isGameOver = false;
    } else {
      isGameOver = true;
    }
  };

  function createPlayer() {
    const playerName = prompt(`Enter your name: `);
    const newPlayer = player(playerName);
    addPlayer(newPlayer);
  } 

  function addPlayer(playerToAdd) {
    players.push(playerToAdd);
  }

  function removePlayers() {
    players.pop();
    players.pop();
  }

  function setWinnerMessage(squares) {
    const board = gameBoard.getBoard();
    if (board[squares[0]] == `X`) {
      message = `${players[0].getName()} has won!`;
    } else {
      message = `${players[1].getName()} has won!`;
    }
  }

  return {
    getGameState: getGameState,
    getIsGameOver: getIsGameOver,
    updateSquareCount: updateSquareCount
  };

})();

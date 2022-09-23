const gameBoard = (function(){
  const board = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  let mark = `X`;
  let gameState = false;

  // cache DOM
  const el = document.querySelector(`.gameboard-module`);
  const template = el.querySelector(`.gameboard-template`).innerHTML;
  const boardTemplate = el.querySelector(`.gameboard`);
  const button = el.querySelector(`.start-btn`);

  // bind events
  el.addEventListener(`click`, addMark);
  button.addEventListener(`click`, updateGameState);

  render();
  // functions
  function render() {
    let templateHTML = ``;
    board.forEach(square => {
      templateHTML += template.replace(/{{.}}/g, square);
    });
    boardTemplate.innerHTML = templateHTML;
  };

  function addMark(event) {
    const index = Array.from(document.querySelectorAll(`.square`)).indexOf(event.target.closest(`div`));
    if (isSquareEmpty(index) && !displayController.getIsGameOver() && gameState) {
      board.splice(index, 1, mark);
      updateMark();
      render();
      displayController.updateSquareCount();
    }
  };

  function isSquareEmpty(index) {
    return board[index] === ``;
  }

  function updateMark() {
    mark = (mark === `X`) ? `O` : `X`;
  };

  function getBoard() {
    return board.slice(0);
  }

  function updateGameState() {
    if (gameState) {
      gameState = false;
    } else {
      gameState = true;
      updateButton();
    }
  }

  function updateButton() {
    if (button.textContent === `Start`) {
      button.textContent = `Restart`;
    } else {
      button.textContent = `Start`;
    }
  }

  return {
    getBoard: getBoard,
  }

})();


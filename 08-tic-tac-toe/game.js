const gameBoard = (function(){
  const board = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  let mark = `X`;

  // cache DOM
  const el = document.querySelector(`.gameboard-module`);
  const template = el.querySelector(`.gameboard-template`).innerHTML;
  const boardTemplate = el.querySelector(`.gameboard`);

  // bind events
  el.addEventListener(`click`, addMark);

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
    if (isSquareEmpty(index) && !displayController.getIsGameOver()) {
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

  return {
    getBoard: getBoard,
  }

})();


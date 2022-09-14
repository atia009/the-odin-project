const gameBoard = (function(){
  const board = [``, ``, ``, ``, ``, ``, ``, ``, ``];

  // cache DOM
  const el = document.querySelector(`.gameboard-module`);
  const template = el.querySelector(`.gameboard-template`).innerHTML;

  render();
  // functions
  function render() {
    let templateHTML = ``;
    board.forEach(square => {
      templateHTML += template.replace(/{{.}}/g, square);
    });
    el.innerHTML = templateHTML;
  }
})();
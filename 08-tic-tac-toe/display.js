const displayController = (function(){
  let markCount = 0;
  let message;
  let isGameOver = false;

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

  function updateMarkCount() {
    if (markCount < 8) {
      markCount++;
    } else {
      isGameOver = true;
    }
    render();
  }

  function setMessage() {
    if (isGameOver) {
      message = `Game Over!`;
    } else {
      message = `Turn ${markCount + 1}`;
    }
  }

  return {
    updateMarkCount: updateMarkCount
  }
  
})();

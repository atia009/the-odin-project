const displayController = (function(){
  let markCount = 0;

  // cache DOM
  const el = document.querySelector(`.display-module`);
  const template = document.querySelector(`.display-template`).innerHTML;

  render();
  // functions
  function render() {
    let templateHTML = template.replace(/{{.}}/g, `Game Over`);
    el.innerHTML = templateHTML;
  }

  function updateMarkCount() {
    if (markCount < 8) {
      markCount++;
      console.log(markCount);
    } else {
      console.log("game over");
    }
  }

  return {
    updateMarkCount: updateMarkCount
  }
  
})();

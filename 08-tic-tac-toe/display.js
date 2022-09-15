const displayController = (function(){

  // cache DOM
  const el = document.querySelector(`.display-module`);
  const template = document.querySelector(`.display-template`).innerHTML;

  render();
  // functions
  function render() {
    let templateHTML = template.replace(/{{.}}/g, `Game Over`);
    el.innerHTML = templateHTML;
  }
  
})();

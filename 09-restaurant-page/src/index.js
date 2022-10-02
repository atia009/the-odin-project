import Home from './home.js';

function component() {
  const element = Home();

  return element;
}

document.querySelector('#content').appendChild(component());
function appendArrayToElement(array, element) {
  array.forEach(item => {
    element.appendChild(item);
  })
}

function createHTMLfromArray(array, className = '') {
  const arrayHTML = array.map(item => {
    return `<li class="${className}">${item}</li>`;
  });
  return arrayHTML;
}


export {appendArrayToElement, createHTMLfromArray};
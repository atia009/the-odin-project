function appendArrayToElement(array, element) {
  array.forEach(item => {
    element.appendChild(item);
  })
}

function createHTMLfromArray(array) {
  const arrayHTML = array.map(item => {
    return `<li>${item}</li>`;
  });
  return arrayHTML;
}


export {appendArrayToElement, createHTMLfromArray};
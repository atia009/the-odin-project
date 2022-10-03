function createHTMLfromArray(array) {
  const arrayHTML = array.map(item => {
    return `<li>${item}</li>`;
  });
  return arrayHTML;
}


export {createHTMLfromArray};
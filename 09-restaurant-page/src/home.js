const Home = () => {
  const pages = ['Home', 'Menu', 'Contact'];
  const title = {
    img: `../src/chickpea.png`,
  };
  const about = {
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, numquam! Nihil cum illo laudantium ipsa consequuntur earum corporis libero fugit?`,
    img: `../src/plant.png`
  };
  const hours = [
    `Sunday: 5am - 7pm`,
    `Monday: 5am - 9pm`,
    `Tuesday: 5am - 9pm`,
    `Wednesday: 5am - 9pm`,
    `Thursday: 5am - 9pm`,
    `Friday: 5am - 8pm`,
    `Saturday: 5am - 7pm`
  ];
  const location = `1234 Plant Drive, Plantsville, California`;
  const copyright = [
    `Background image created by tripitaka1 - www.freepik.com`,
    `Chickpea icon made by Freepik - www.flaticon.com`,
    `Plant icon made by Freepik - www.flaticon.com`
  ]


  // dom
  const element = document.createElement('div');
  const header = document.createElement('header');
  const nav = document.createElement(`nav`);
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  // functions
  function createHTMLfromArray(array) {
    const arrayHTML = array.map(item => {
      return `<li>${item}</li>`;
    })
    return arrayHTML.join(``);
  }

  // header
  header.appendChild(nav);
  nav.innerHTML = createHTMLfromArray(pages);
  element.appendChild(header);

  // main
  main.innerHTML = `<section>
  <section>
    <h1>Nala's Plant Bar</h1>
    <img src="${title.img}" alt="chickpea icon">
    <img src="${title.img}" alt="chickpea icon">
  </section>
  <section>
    <h2>About</h2>
    <img src="${about.img}" alt="plant in pot icon">
    <p>${about.desc}</p>
  </section>
  <section>
    <h2>Hours</h2>
    <ul>
     ${createHTMLfromArray(hours)}
    </ul>
  </section>
  <section>
    <h2>Location</h2>
    <p>${location}</p>
  </section>
</section>`;
element.appendChild(main);

// footer
footer.innerHTML = createHTMLfromArray(copyright);
element.appendChild(footer);


  return element;
};

export default Home;
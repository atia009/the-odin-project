(()=>{"use strict";function n(n){return n.map((n=>`<li>${n}</li>`))}(()=>{const e="../src/chickpea.png",i=document.createElement("header"),a=document.createElement("nav"),t=document.createElement("main"),c=document.createElement("footer");var o,m;i.appendChild(a),a.innerHTML=n(["Home","Menu","Contact"]).join(""),t.innerHTML=`<section>\n  <section>\n    <h1>Nala's Plant Bar</h1>\n    <img src="${e}" alt="chickpea icon">\n    <img src="${e}" alt="chickpea icon">\n  </section>\n  <section>\n    <h2>About</h2>\n    <img src="../src/plant.png" alt="plant in pot icon">\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, numquam! Nihil cum illo laudantium ipsa consequuntur earum corporis libero fugit?</p>\n  </section>\n  <section>\n    <h2>Hours</h2>\n    <ul>\n     ${n(["Sunday: 5am - 7pm","Monday: 5am - 9pm","Tuesday: 5am - 9pm","Wednesday: 5am - 9pm","Thursday: 5am - 9pm","Friday: 5am - 8pm","Saturday: 5am - 7pm"]).join("")}\n    </ul>\n  </section>\n  <section>\n    <h2>Location</h2>\n    <p>1234 Plant Drive, Plantsville, California</p>\n  </section>\n</section>`,c.innerHTML=n(["Background image created by tripitaka1 - www.freepik.com","Chickpea icon made by Freepik - www.flaticon.com","Plant icon made by Freepik - www.flaticon.com"]).join(""),o=[i,t,c],m=document.querySelector("#content"),o.forEach((n=>{m.appendChild(n)}))})()})();
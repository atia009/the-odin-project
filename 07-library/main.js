let userDrinks = [];

// constructor
function Drink() {
    this.name = getDrinkProperty(`name`);
    this.size = getDrinkProperty(`size`);
    this.temperature = getDrinkProperty(`temp`);
    this.category = getDrinkProperty(`category`);
    this.hasTried = getDrinkProperty(`tried`);
    this.comment = getDrinkProperty(`comment`);
}

Drink.prototype.createInfo = function() {
    return `<tr>
        <td>${this.name}</td>
        <td>${this.size}</td>
        <td>${this.temperature}</td>
        <td>${this.category}</td>
        <td>${this.hasTried}</td>
        <td>${this.comment}</td>
    </tr>`
}

// functions
function getDrinkProperty(property) {
    if (isRadioProperty(property)) return document.querySelector(`input[name="${property}"]:checked`).value;
    return document.querySelector(`[name="${property}"]`).value;
}

function isRadioProperty(property) {
    return property === `size` || property === `temp` || property === `tried`;
}

function createDrink() {
    return new Drink();
}

function addDrinkToUserDrinks(drink) {
    userDrinks.push(drink);
}

function addDrinkToBaristaLibrary(drink) {
    const library = document.querySelector(`.barista-table`);
    library.insertAdjacentHTML(`beforeend`, drink);
}

function startSubmitFunctionality() {
    const drink = createDrink();
    const drinkInfo = drink.createInfo();
    userDrinks.push(drink);
    addDrinkToBaristaLibrary(drinkInfo);
    clearForm();
}

function clearForm() {
    document.querySelector(`.form`).reset();
}


function isFormValid() {
    const controls = document.querySelectorAll(`[required]`);
    for (let i = 0; i < controls.length; i++) {
        if (!controls[i].checkValidity()) {
            alert(`Please fill out ${controls[i].getAttribute(`name`)}`);
            return;
        }
    }
    startSubmitFunctionality();
    
    // For testing output
    userDrinks.forEach(element => {
        console.log(element);
    });
}

// event listeners
document.querySelector(`.form__btn`).addEventListener(`click`, isFormValid);
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

function startSubmitFunctionality() {
    userDrinks.push(createDrink());
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
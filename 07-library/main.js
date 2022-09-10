// GLOBALS
const userDrinks = [];

// OBJECTS
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
        <td><img class="barista-table__img" src="images/minus-circle.svg" alt="Remove drink icon" data-class="${this.index}"></td>
        <td>${this.name}</td>
        <td>${this.size}</td>
        <td>${this.temperature}</td>
        <td>${this.category}</td>
        <td>${this.hasTried}</td>
        <td>${this.comment}</td>
    </tr>`
}

Drink.prototype.setIndex = function(index) {
    this.index = index;
}

// FUNCTIONS
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

function getUserDrinksIndex(drink) {
    let drinkCount = 0;
    for (userDrink of userDrinks){
        if (userDrink.name === drink.name) {
            break;
        }
        drinkCount++;
    }
    return drinkCount;
}

function addDrinkToUserDrinks(drink) {
    userDrinks.push(drink);
}

function removeDrinkFromUserDrinks(drinkIndex) {
    userDrinks.splice(drinkIndex, 1);
}

function addDrinkToBaristaLibrary(drink) {
    const library = document.querySelector(`.barista-table__drinks`);
    library.insertAdjacentHTML(`afterbegin`, drink);
}


function createBaristaLibrary() {
    removeBaristaLibraryContents();
    userDrinks.forEach(drink => {
        const userDrinkIndex = getUserDrinksIndex(drink);
        drink.setIndex(userDrinkIndex);
        addDrinkToBaristaLibrary(drink.createInfo());
    });
}

function removeBaristaLibraryContents() {
    const library = document.querySelector(`.barista-table__drinks`);
    library.textContent = ``;
}

function startSubmitFunctionality() {
    const drink = createDrink();
    userDrinks.push(drink);
    clearForm();
    createBaristaLibrary();
    toggleFormDrink();
    startRemoveDrinkBtn();
    // TESTING
    // userDrinks.forEach(element => {
    //     console.log(element);
    // });
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
}

function toggleFormDrink() {
    const ui = document.querySelector(`.ui`);
    if (ui.style.display === `none` || ui.style.display === ``) {
        ui.style.display = `block`;
    } else {
        ui.style.display = `none`;
    }
}

function startRemoveDrinkBtn() {
    const removeBtns = document.querySelectorAll(`.barista-table__img`);
    removeBtns.forEach(remove => {
        remove.addEventListener(`click`, startRemoveDrinkFunctionality);
    });
}

function startRemoveDrinkFunctionality() {
    const drinkIndexToRemove = this.dataset.class;
    removeDrinkFromUserDrinks(drinkIndexToRemove);
    createBaristaLibrary();
    startRemoveDrinkBtn();
}

// EVENT LISTENERS
document.querySelector(`.form__btn`).addEventListener(`click`, isFormValid);
document.querySelector(`.main__btn`).addEventListener(`click`, toggleFormDrink);
document.querySelector(`.ui__btn`).addEventListener(`click`, toggleFormDrink);
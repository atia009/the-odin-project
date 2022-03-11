
// functions
function startAdd(num1, num2) {
    return num1 + num2;
}

function startSubtract(num1, num2) {
    return num1 - num2;
}

function startMultiply(num1, num2) {
    return num1 * num2;
}

function startDivide(num1, num2) {
    return num1 / num2;
}

function startOperate(operator, num1, num2) {
    switch (operator) {
        case "add": 
            startAdd(num1, num2);
            break;
        case "subtract":
            (startSubtract(num1, num2));
            break;
        case "multiply":
            startMultiply(num1, num2);
            break;
        case "divide": 
            startDivide(num1, num2);
            break;
    }
}

function startButtonEvent() {
    getButtons().forEach(btn => btn.addEventListener(`click`, startButtonFunctionality));
}

function startButtonFunctionality() {
    setDisplay(setValueToInt(this.textContent));
}


function getDisplay() {
    return document.querySelector(`.calculator__display`);
}

function getButtons() {
    return [...document.querySelectorAll(`.button`)]; // convert nodeList to array
}

function setDisplay(value) {
    getDisplay().textContent = value;
}

function setValueToInt(value) {
    return parseInt(value);
}

// test
startButtonEvent();
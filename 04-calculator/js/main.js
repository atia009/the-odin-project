// globals
const inputStack = [];
const operators = {
    add: `\u002b`,
    minus: `\u2212`,
    multiply: `\u00d7`,
    divide:`\u00f7`,
    equals: `\u003d`,
}


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
        case operators.add: 
            startAdd(num1, num2);
            break;
        case operators.startSubtract:
            startSubtract(num1, num2);
            break;
        case operators.multiply:
            startMultiply(num1, num2);
            break;
        case operators.divide: 
            startDivide(num1, num2);
            break;
    }
}

function startButtonEvent() {
    getButtons().forEach(btn => btn.addEventListener(`click`, startButtonFunctionality));
}

function startButtonFunctionality() {
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
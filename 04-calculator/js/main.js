// globals
const inputStack = [0];
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
            setDisplay(startAdd(num1, num2));
            break;
        case operators.startSubtract:
            setDisplay(startSubtract(num1, num2));
            break;
        case operators.multiply:
            setDisplay(startMultiply(num1, num2));
            break;
        case operators.divide: 
            setDisplay(startDivide(num1, num2));
            break;
    }
}

function startButtonEvent() {
    getButtons().forEach(btn => btn.addEventListener(`click`, startButtonFunctionality));
}

function startButtonFunctionality() {
    // will return NaN if it is an operator
    if (isNaN(setValueToInt(this.textContent))) {
        startOperatorFunctionality(this.textContent);
    } else {
        startOperandFunctionality(setValueToInt(this.textContent));
    }
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

function isOperator(input) {
    return (typeof(input) === `string`) ? true : false;
}

function isInputTypesEqual(input1, input2) {
    return isOperator(input1) === isOperator(input2);
}

function joinNumberInputs(input, previous) {
    if (previous === 0) return input;
    return parseInt(`` + previous + input);
}

function startOperatorFunctionality(operator) {
    if (isInputTypesEqual(operator, getIndexOfFromTop(1))) {
        inputStack.pop();
    }
    if (hasPreviousOperator()) {
        const previous = getIndexOfFromTop(2);
        startOperate(previous, getIndexOfFromTop(3), getIndexOfFromTop(1));
    }
    inputStack.push(operator);
}

function startOperandFunctionality(operand) {
    const previous = getIndexOfFromTop(1);
    if (isInputTypesEqual(operand, previous)) {
        inputStack.pop();
        inputStack.push(joinNumberInputs(operand, previous));
    } else {
        inputStack.push(setValueToInt(operand));
    }
    setDisplay(getIndexOfFromTop(1));
}

function hasPreviousOperator() {
    return getIndexOfFromTop(2) != undefined;
}

// start from top of stack
function getIndexOfFromTop(index) {
    return inputStack[inputStack.length-index];
}

// test
startButtonEvent();
console.log(typeof (setValueToInt(inputStack[0])));
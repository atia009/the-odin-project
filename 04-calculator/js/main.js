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
    if (num1 === 0 || num2 === 0) return `error`;
    return num1 / num2;
}

function startOperate(operator, num1, num2) {
    let result;
    switch (operator) {
        case operators.add: 
            result = startAdd(num1, num2);
            break;
        case operators.minus:
            result = startSubtract(num1, num2);
            break;
        case operators.multiply:
            result = startMultiply(num1, num2);
            break;
        case operators.divide: 
            result = startDivide(num1, num2);
            break;
        default:
            result = 0;
            break;
    }
    if(isDecimal(result) && result != `error`) {
        result = Math.round(result * 1000000) / 1000000;
    }
    setDisplay(result);
    if (result === `error`) {
        result = 0;
    }
    inputStack.push(result);
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
    if (operator === `c`) {
        removeStackInputs();
        startOperate(operator, undefined, undefined);
        return;
    } else if (isInputTypesEqual(operator, getIndexOfFromTop(1))) {
        inputStack.pop();
    } else if (hasPreviousOperator()) {
        const previousOperator = getIndexOfFromTop(2);
        const operand1 = getIndexOfFromTop(3);
        const operand2 = getIndexOfFromTop(1);
        removeStackInputs();
        startOperate(previousOperator, operand1, operand2);
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

function removeStackInputs() {
    while (inputStack.length) {
        inputStack.pop();
    }
}

function isDecimal(number) {
    return (number % 1 != 0);
} 

// function calls
startButtonEvent();
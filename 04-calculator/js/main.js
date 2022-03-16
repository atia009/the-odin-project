

// globals
const inputStack = [`0`];
const operators = {
    add: `\u002b`,
    minus: `\u2212`,
    multiply: `\u00d7`,
    divide:`\u00f7`,
    equals: `\u003d`,
    clear: `c`,
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

function startOperate(operator, num1 = 0, num2 = 0) {
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
    }
    if(isDecimal(result) && result != `error`) {
        result = Math.round(result * 1000000) / 1000000;
    }
    setDisplay(result);
    if (result === `error`) {
        return;
    }
    startInputStackPush(result.toString());
}

function startButtonEvent() {
    getButtons().forEach(btn => btn.addEventListener(`click`, startButtonFunctionality));
}

function startButtonFunctionality() {
    if (isOperator(this.textContent)) {
        startOperatorFunctionality(this.textContent);
    } else {
        startOperandFunctionality(this.textContent);
    }
}

function getDisplay() {
    return document.querySelector(`.calculator__display`);
}

function getButtons() {
    return [...document.querySelectorAll(`.button`)]; // convert nodeList to array
}

function setDisplay(value) {
    if (value === `.`) {
        value = `0.`;
    }
    getDisplay().textContent = value;
}

function setValueToInt(value) {
    if (isPeriod(value)) return `.`;
    let newValue;
    if (value.includes(`.`)) {
        newValue = parseFloat(value);
    } else {
        newValue = parseInt(value);
    }
    return newValue;
}

function isOperator(input) {
    const operatorChars = Object.values(operators);
    const result = operatorChars.find(operator => operator === input);
    return result != undefined;
}

function isInputTypesEqual(input1, input2) {
    return isOperator(input1) === isOperator(input2);
}

function joinNumberInputs(input, previous) {
    if (previous === `0`) return input;
    return `` + previous + input;
}

function startOperatorFunctionality(operator) {
    if (operator === operators.clear) return startClearFunctionality();
    if (isInputTypesEqual(operator, getIndexOfFromTop(1))) {
        inputStack.pop();
    } else if (hasPreviousOperator()) {
        startPreviousOperatorFunctionality();
    }
    startInputStackPush(operator);
}

function startOperandFunctionality(operand) {
    const previous = getIndexOfFromTop(1);
    if (hasPreviousPeriod(previous) && isPeriod(operand)) return;
    if (previous != undefined && isInputTypesEqual(operand, previous)) {
        inputStack.pop();
        startInputStackPush((joinNumberInputs(operand, previous)));
    } else if (previous === operators.equals) {
        removeStackInputs();
        startInputStackPush(operand);
    } else {
        startInputStackPush(operand);
    }
    setDisplay(getIndexOfFromTop(1));
}

function hasPreviousOperator() {
    return getIndexOfFromTop(2) != undefined;
}

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

function isPeriod(input) {
    return input === `.`;
}

function hasPreviousPeriod(input) {
    if (input === undefined) return false;
    return input.includes(`.`);
}

function startClearFunctionality() {
    removeStackInputs();
    setDisplay(`0.`);
    startInputStackPush(`0`);
    return ``;
}

function startPreviousOperatorFunctionality() {
    const previousOperator = getIndexOfFromTop(2);
    const operand1 = setValueToInt(getIndexOfFromTop(3));
    const operand2 = setValueToInt(getIndexOfFromTop(1));
    removeStackInputs();
    startOperate(previousOperator, operand1, operand2);
}

function startInputStackPush(input) {
    if (input === `.`) {
        input = `0.`;
    }
    inputStack.push(input);
}

function isInputStackEmpty() {
    return inputStack.length == 0;
}

// function calls
startButtonEvent();
// globals
const INPUT_STACK = [`0`];
const OPERATORS = {
    add: `\u002b`,
    clear: `c`,
    divide:`\u00f7`,
    equals: `\u003d`,
    multiply: `\u00d7`,
    minus: `\u2212`,
}


// functions

// alteration functions
function setDisplay(value) {
    if (value === `.`) {
        value = `0.`;
    }
    getDisplay().textContent = value;
}

function setStringToNumerical(input) {
    if (isPeriod(input)) return `.`;
    if (input.includes(`.`)) return parseFloat(input);
    return parseInt(input);
}

function joinNumberInputs(input, previous) {
    if (previous === `0`) return input;
    return `` + previous + input;
}

function removeStackInputs() {
    while (INPUT_STACK.length) {
        INPUT_STACK.pop();
    }
}

function startClearFunctionality() {
    removeStackInputs();
    setDisplay(`0.`);
    startInputStackPush(`0`);
}

function startPreviousOperatorFunctionality() {
    const previousOperator = getIndexOfFromTop(2);
    const operand1 = setStringToNumerical(getIndexOfFromTop(3));
    const operand2 = setStringToNumerical(getIndexOfFromTop(1));
    removeStackInputs();
    startOperate(previousOperator, operand1, operand2);
}

function startInputStackPush(input) {
    if (input === `.`) {
        input = `0.`;
    }
    INPUT_STACK.push(input);
}


// creation functions

// establishment functions
function startOperate(operator, num1 = 0, num2 = 0) {
    let result;
    switch (operator) {
        case OPERATORS.add: 
            result = startAdd(num1, num2);
            break;
        case OPERATORS.minus:
            result = startSubtract(num1, num2);
            break;
        case OPERATORS.multiply:
            result = startMultiply(num1, num2);
            break;
        case OPERATORS.divide: 
            result = startDivide(num1, num2);
            if (result === `error`) {
                setDisplay(result);
                return;
            }
            break;
    }
    if(isDecimal(result) && result != `error`) {
        result = Math.round(result * 1000000) / 1000000;
    }
    setDisplay(result);
    startInputStackPush(result.toString());
}

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

function startOperatorFunctionality(operator) {
    if (operator === OPERATORS.clear) return startClearFunctionality();
    if (isInputTypesEqual(operator, getIndexOfFromTop(1))) {
        INPUT_STACK.pop();
    } else if (hasPreviousOperator()) {
        startPreviousOperatorFunctionality();
    }
    startInputStackPush(operator);
}

function startOperandFunctionality(operand) {
    const previous = getIndexOfFromTop(1);
    if (hasPreviousPeriod(previous) && isPeriod(operand)) return;
    if (previous != undefined && isInputTypesEqual(operand, previous)) {
        INPUT_STACK.pop();
        startInputStackPush((joinNumberInputs(operand, previous)));
    } else if (previous === OPERATORS.equals) {
        removeStackInputs();
        startInputStackPush(operand);
    } else {
        startInputStackPush(operand);
    }
    setDisplay(getIndexOfFromTop(1));
}



// obtainment functions
function getDisplay() {
    return document.querySelector(`.calculator__display`);
}

function getButtons() {
    return [...document.querySelectorAll(`.button`)]; // convert nodeList to array
}

function getIndexOfFromTop(index) {
    return INPUT_STACK[INPUT_STACK.length-index];
}


// true or false functions
function isOperator(input) {
    const operatorChars = Object.values(OPERATORS);
    const result = operatorChars.find(operator => operator === input);
    return result != undefined;
}

function isInputTypesEqual(input1, input2) {
    return isOperator(input1) === isOperator(input2);
}

function hasPreviousOperator() {
    return getIndexOfFromTop(2) != undefined;
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

function isInputStackEmpty() {
    return INPUT_STACK.length == 0;
}

// function calls
startButtonEvent();
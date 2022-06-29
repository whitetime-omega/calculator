function operate(operator, num1, num2) {
    let result = undefined;
    switch(operator) {
        case "Addition":
            result = add(num1, num2);
            break;
        case "Subtraction":
            result = subtract(num1, num2);
            break;
        case "Multiply":
            result = multiply(num1, num2);
            break;
        case "Division":
            result = divide(num1, num2);
    }

    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function display(text) {
    const screen_text = document.getElementById("screen-text");
    screen_text.innerHTML = text;
}

function calculate() {
    let currentValue = [];
    let operation = undefined;
    let currentNumber = undefined;
    let oldNumber = undefined;

    let result = 0;

    const operands = document.querySelectorAll(".display");
    operands.forEach((operand) => {
        operand.addEventListener('click', () => {
            //the displayed value needs to be the concactenated string with all decimal values for a number
            currentValue.push(operand.innerHTML);
            
            currentNumber = currentValue.join("");

            display(currentNumber);
        })
    })

    const operators = document.querySelectorAll(".operator");
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {

            //logic that checks for two numbers and an operator leading to result being shown
            if (oldNumber != undefined && currentNumber != undefined && operation != undefined) {


                result = operate(operation, oldNumber, currentNumber);
                display(result);
            }

            //resets for second number to be inputted
            oldNumber = currentNumber;
            currentValue = [];
            currentNumber = undefined;

            switch(operator.innerHTML) {
                case "/":
                    operation = "Division";
                    break;
                case "X": 
                    operation = "Multiply";
                    break;
                case "-":
                    operation = "Subtraction";
                    break;
                case "+":
                    operation = "Addition";
            }
        })
    })

    const equals = document.querySelector(".equals");
    equals.addEventListener('click', () => {
        result = operate(operation, oldNumber, currentNumber);
        display(result);
    })
}

calculate();
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-button');

let firstValue = null;
let operatorValue = '';
let awaitingNextValue = false;





// Calculate first and second values depending on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber
};

function sendNumberValue(number) {
    // Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If current display value is 0, replace it, otherwise append to it
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number
    }
}

function addDecimal() {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return; // this conditional says that if the value is true then just return so we don't add decimal
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}




function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    
    // Prevent pressing = twice or changing operators too fast
    if (operatorValue && awaitingNextValue) {
        if (operator === '=') return;
        operatorValue = operator;
        return;
    }

    // First number ever entered
    if (firstValue === null) {
        firstValue = currentValue;
    } else if (operatorValue) {
        // Do the math with the PREVIOUS operator
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation; // <-- THIS stores the result for the next operation

        // If we just pressed =, we're done. Keep firstValue as the result
        // but clear operator so next operator press starts a new chain
        if (operator === '=') {
            operatorValue = '';
            awaitingNextValue = true;
            return;
        }
    }

    awaitingNextValue = true;
    operatorValue = operator;
}



// Reset all values, display
function resetAll() {
    firstValue = null;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}



// Add event listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
        return;
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
        return;
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
        return;
    }
});


// Event Listener
clearBtn.addEventListener('click', resetAll);
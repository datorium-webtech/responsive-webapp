console.log("Starting calculator!");

a = 12;
b = 9;

function calculatorSum() {
    let result = a + b;
    document.querySelector(".calculator").innerHTML = result;
}


/**
 * @contant The element which displays the result of the calculator.
 */
const calculatorResultElement = document.querySelector(".calculator .result");

/**
 * Mathetmatical operation to be performed by calculator.
 */
let calculatorOperation;

/**
 * The current calculator result.
 */
let calculatorResult;

/**
 * Implements the calculator functionality.
 * @param {string} operation Type of mathematical operation to use.
 */
function useCalculator(operation) {
    // 1. Receive the input (the number) from the result element.
    let input = calculatorResultElement.value;
    console.log("User entered: " + input);

    // 2. Check operation

    // 2.1 If the operation is not "equals" (it is add, subtract, etc):
    //     Record the current operation being used and also the input number (in variables)

    // 2.2 Otherwise (it is equals), calculate the result using the old input, the new one
    //     and the previously selected operation

    // 3. Output the calculated result in the result element.
}

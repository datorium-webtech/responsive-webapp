// This is a comment: console.log(...) writes something to console in browser.
console.log("These are the basics of JavaScript.");

/**
 * The PI number up to 10 decimals.
 */
const pi = 3.1415926535;

/*
 * Variables store data that can be used later.
 * Most popular data types are number, string and boolean.
 */
var number1 = 10;
var string1 = "apple";
var boolean1 = true;
let thisIsALet = "let is block scoped";

console.log(number1 + string1);

var sum = number1 + 12;
console.log(sum);
sum = sum + 2;
console.log(sum);

/*
 * Create two new variables (any two numbers).
 * Create another variable that calculates the difference (-).
 * Write the difference variable to console.
 */
var a = 7;
var b = 9;
var diff = a - b;
console.log("The difference between a and b: " + diff);

function manipulateDiff() {
    console.log("Start of manipulateDiff function");
    // Take the diff variable and add 5 to it, then divide everything with 2;
    diff = (diff + 5) / 2;
}

manipulateDiff();
console.log(diff);
manipulateDiff();
manipulateDiff();
console.log(diff);

/*
 * Create a function called "manipulateA".
 * Take the variable a and multiply it by 2.
 * Call the manipulateDiff() inside this function.
 * console.log the sum of a and diff.
 */
function manipulateA() {
    a = a * 2;
    manipulateDiff();
    console.log(a + diff);
}

manipulateA();

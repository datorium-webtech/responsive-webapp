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

// Set the variable a to 10 and b to 5 * 2;
a = 10;
b = 5 * 2;

if (a === b) {
    // code if true
    console.log("A is equal to B.");
} else {
    // code if false
    console.log("A is different from B.");
}

/*
    most popular comparisons
    ===         ?equal
    >   <       larger than, less than
    >=  <=      equal or larger/less than
    !           not (reverses boolean)    

    && (AND) checks if both conditions are true
    || (OR)  checks if at least 1 is true
 */

let vehicle = "plane";
let wings = false;

// If the vehicle is a car OR a bike, then log "road"
// Else If the vehicle is a plane AND has wings, then log "sky"
// Else if the vehicle is a boat, then log "water"
// If everything was false, then log "unknown"

if (vehicle === "car" || vehicle === "bike") {
    console.log("road");
} else if (vehicle === "plane" && wings) {
    console.log("sky");
} else if (vehicle === "boat") {
    console.log("water");
} else {
    console.log("unknown");
}

// Recap exercise
a = 10;
let fruit = "apple";

// If a is larger than 5 AND fruit is "orange", then set a to 1
// Else if fruit is just "orange", then set a to -1
// Otherwise, set a to 2
// Write a to console with a string "A is now " ... a
if (a > 5 && fruit === "orange") {
    a = 1;
} else if (fruit === "orange") {
    a = -1;
} else {
    a = 2;
}
console.log("A is now " + a);

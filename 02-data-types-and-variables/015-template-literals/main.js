/* Template Literals (Template Strings) */
/*
    -Template literals are a way to write strings in JavaScript using backticks (``) instead of quotes
    -They allow:
        # String interpolation (insert variables directly)
        # Multi-line strings
        # Expression evaluation (You can do operations of comparison, calculations, use conditions...)
*/

/* Basic Syntax */
let name = "Hamza";
// ${...} is called interpolation, and it's how you insert variables or expressions inside the string
console.log(`Hello ${name}`); // Hello Hamza

/* String Interpolation */
// You can insert any variable or expression directly into the string
let a = 10;
let b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // The sum of 10 and 5 is 15

/* Multi-line Strings (no \n needed) */
// Before ES6
let oldWay = "Line 1\nLine 2";
// With template literals
let newWay = `Line 1
Line 2`;
console.log(newWay);
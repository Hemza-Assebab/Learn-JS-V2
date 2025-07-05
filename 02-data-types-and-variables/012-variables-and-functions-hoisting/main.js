/* Variables and Funtions Hoisting */
/*
    -Hoisting is a JavaScript behavior where variable and function declarations are
     moved to the top of their scope before the code is executed
*/

/* Variable Hoisting */
// When you write this:
console.log(a); // Logs "undefined" in the console
var a = 10;
// JavaScript Internally changes it to:
var a;
console.log(a); // Logs "undefined" in the console
a = 10;
// So "var" a is hoisted to the top, and initialized as undefined until it's assigned a value.

// "let" and "const" behave differently
// console.log(b); // Reference error
let b = 20;
/*
    -This throws an error because "let" is also hoisted, but NOT initialized
    -It lives in something called the "temporal dead zone" from the start of the block to where it's defined
    -During that time, it cannot be accessed

    -In summary of variables hoisting:
    | Keyword | Hoisted? | Initialized on hoist?  | Can access before declaration?   |
    | ------- | -------- | ---------------------- | -------------------------------- |
    |  var    |   Yes    |   Yes (to `undefined`) |   Yes (but value is `undefined`) |
    |  let    |   Yes    |   No                   |   ReferenceError                 |
    |  const  |   Yes    |   No                   |   ReferenceError                 |
*/

/* Functions Hoisting */
// Just like variables, function declarations are hoisted to the top of their scope

/* Function Declarations */
/*
    -Function declarations are fully hoisted
    -This works because the entire function is hoisted to the top of its scope before any code runs
*/
greet(); // Hello
function greet() {
    console.log("Hello");
}
// It like JS engine does this:
function greet() {
    console.log("Hello");
}
greet(); // Hello

/* Function Expressions */
/*
    -Function expressions with "var" are not fully hoisted

    // In the example below
        -The variable "sayHi" is hoisted, but only the declaration (var sayHi;)
        -The actual function is not assigned yet when you call it
*/
// sayHi(); // TypeError - sayHi is not a function
var sayHi = function () {
    console.log("Hi");
}
// So this becomes:
var sayHi;
// sayHi(); // It's still undefined here
sayHi = function () {
    console.log("Hi");
}

/* Arrow Functions */
/*
    -Arrow functions behave the same way as function expressions

    // In the example below
        -"sayHello" is hoisted like a "const" or "let" (So it's not initialized)
        -So trying to use it before its definition causes a "ReferenceError"
*/
sayHello(); // ReferenceError - It's not accessible before initialization
const sayHello = () => {
    console.log("Hello");
}
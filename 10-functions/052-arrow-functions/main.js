/* Arrow Functions */
/*
    -An arrow function is a shorter syntax for writing function expressions
    -It looks like this:
*/
const greet = () => {
    console.log("Hello");
}
greet(); // "Hello"

/* When to Use Arrow Functions ? */
/*
    -Use Arrow Functions When:
        # You want shorter, cleaner code
        # Writing simple callbacks
        # You don’t need "this" keyword inside

    -Here are some basic syntax tips when using arrow functions:
*/

/* No parameters */
const sayHi = () => {
    console.log("Hi !");
}
sayHi(); // "Hi"

/* One Parameter */
// When using only 1 parameter you don't need to place it between parentheses "()"
const greet2 = name => {
    console.log("Hello " + name);
}
greet2("Hemza"); // "Hello Hemza";

/* Multiple Parameters */
const add = (a , b) => {
    return a + b;
}
console.log(add(2, 3)); // 5

/* Implicit Return (no curly braces) */
// If your function returns a single value and it has only 1 statement, you can skip the return and {}:
const multiply = (a, b) => a * b;
console.log(multiply(2,6)); // 12
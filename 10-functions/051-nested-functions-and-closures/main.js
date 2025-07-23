/* Nested Functions and Closures */
/*
    -A nested function is a function defined inside another function
    -In JavaScript, functions are first-class objects, so you can define one function inside another and use it normally
*/
function outerFunction() {
    function innerFunction() {
        console.log("I'm inside the outer function");
    }
    innerFunction(); // Calling the nested function
}
// Here are some key concepts of nested functions

/* Scope Access */
/*
    -The inner function has access to all variables and parameters of the outer function
    -But the outer function cannot access anything declared inside the inner one
*/
function outer() {
    let outerVar = "Outer";

    function inner() {
        console.log(outerVar); // Accessible
    }
    inner();
}

/* Encapsulation */
/*
    -Nesting functions helps encapsulate logic that doesn't need to be used elsewhere
    -It's useful for organizing related functionality
*/

/* Closures */
/*
    -When an inner function is returned or saved, it "remembers" variables from its outer scope.
    -This behavior is called a closure.
*/
function outer() {
  let counter = 0;
  console.log("This is outer");
  
  return function() {
    counter++;
    console.log(counter);
  };
}
const countUp = outer();
countUp();  // 1
countUp();  // 2

/* Example Of a Nested Helper Function */
function calculateArea(length, width) {
    function validate(num) {
        return typeof num === "number" && num > 0;
    }

    if (!validate(length) || !validate(width)) {
        return "Invalid input";
    }

    return length * width;
}
console.log(calculateArea(5, 10)); // 50

/* Example Function Factories */
function makeMultiplier(x) {
    return function (y) { // This closure remembers the "x" passed to the outer function
        return x * y;
    }
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(3)); // 6
console.log(triple(3)); // 9

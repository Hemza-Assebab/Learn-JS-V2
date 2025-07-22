/* Anonymous Functions */
/*
    -An anonymous function is simply a function without a name
    -Anonymous functions are widely used in JavaScript, especially when you need quick, temporary functions without naming them
*/
// Here the function is stored in the variable "greet" and it has no name, it's anonymous
const greet = function () {
    console.log("Hello !");
}
greet();

/* Why Use Anonymous Functions ? */
/*
    | Benefit             | Reason                               |
    | ------------------- | ------------------------------------ |
    | Simplicity          | No need to name temporary functions  |
    | Cleaner Code        | Especially for short, one-time tasks |
    | Scoped Execution    | Useful in IIFEs or limited scopes    |
    | Useful in Callbacks | When passing a function directly     |

    -Below are practical use cases:
*/

/* Callbacks (Passing functions as arguments) */
// Used in methods like setTimeout, setInterval, event listeners...
setTimeout(function () {
    console.log("Executed after 1 second");
}, 1000);

/* Array Methods */
// Anonymous functions are often used inside array methods like map(), forEach(), filter()...
let numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number * 2);
});

/* Assigning to Variables (Function Expressions) */
// When you want to store a function in a variable but don’t need to name the function itself.
const greet2 = function() {
  console.log("Hello, world!");
};
greet2();

/* Using IIFE (Immediately Invoked Function Expressions) */
// Run a function immediately after defining it, without the need to call it or polluting the global scope
(function() {
  console.log("This runs immediately!");
})();

/* Event Listeners */
// Anonymous functions are often used as event handlers
document.body.onclick = function () {
    console.log("Page clicked");
}
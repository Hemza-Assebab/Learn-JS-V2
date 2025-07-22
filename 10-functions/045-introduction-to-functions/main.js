/* Introduction To Functions */
/*
    -A function is a reusable block of code that performs a specific task
    -It allows you to write code once and use it whenever needed, reducing repetition
*/

/* Basic Syntax and Usage */
/*
    // Define the function:
    function functionName ([...parameters]) {
        // Code to run
    }

    // Call a function:
    functionName([...arguments])
*/
function greet() {
    console.log("Hello");
}
greet(); // "Hello"

/* User-defined VS Built-in Functions */
/*
    // User-defined Functions:
        # Created by you, the developer, example:
        # function sum() {}

    // Built-in Functions:
        # Provided by JavaScript itself
        # Example: console.log() | alert() | parseInt()
*/

/* Parameters and Arguments */
/*
    // Parameters:
        # Are placeholders for values that will be dynamically used inside of the function code
        # You define them in the function definition
        # Think of them as "input variables" for the function
*/
// Here, name is a parameter
function greet2(name) {
    console.log("Hello " + name);
}
/*
    // Arguments:
        # Are the actual values you pass to the function when you call it
        # These values replace the parameters
*/
// Here, "Hemza" is the argument
greet2("Hemza"); // "Hello Hemza"

/* The DRY (Don't Repeat Yourself) Concept */
/*
    -DRY stands for "Don’t Repeat Yourself", a core principle in programming
    -It means: avoid writing the same code more than once

    -Functions help you follow the DRY principle by letting you write a block of code once and reuse it whenever needed
*/
// Without DRY (bad practice)
console.log("Welcome Hemza");
console.log("Welcome Yasser");  // You’re repeating the same structure over and over
console.log("Welcome Haythem");
// With DRY using a function
/*
    -Cleaner
    -Easier to update
    -Reusable
*/
function welcomeUser(name) {
    console.log("Welcome " + name);
}
welcomeUser("Hemza");
welcomeUser("Yasser");
welcomeUser("Haythem");
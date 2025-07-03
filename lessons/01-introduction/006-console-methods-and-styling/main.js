/* Console Methods and Styling */
/*
    -The console object in JavaScript is a built-in tool used mainly for debugging
    -It lets you print messages, check variables, and track what's happening in your code

*/

/* Console Methods */
/*
    -The console object provides methods that you can call to log information to the browser’s developer console
*/
// console.log() => Logs a general message
console.log("Hello");

// console.info() => Logs informational messages (Same as log() )
console.log("Hello");

// console.error() => Logs an error message in red
console.error("There is an error");

// console.warn() => Logs a warning message in yellow
console.warn("This is a warning");

// console.table(array/object) => Displays tabular data (arrays/objects)
console.table(["Hamza", "Mehdi", "Ahmed"]);

// console.clear() => Clears the console
console.clear();

/* Styling In The Console */
/*
    -%c is a format specifier used to apply CSS styles to the text that follows it
    -The second argument is the CSS styling applied to the "JS File" part.
*/
console.log("Hello From %cJS File", "color: red; font-size: 40px;");
// Bonus: You can style multiple parts like this:
console.log(
    "Hello From %cJS %cFile",
    "color: red; font-size: 40px",
    "color: blue; font-weight: bold; font-size: 40px"
);
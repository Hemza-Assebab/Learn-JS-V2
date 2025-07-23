/* Introduction To HOFs (Higher Order Functions) */
/*
    -A higher-order function is a function that does one or both of the following:
        # Takes one or more functions as arguments
        # Returns a function
    -In a simple way it’s a function that works with other functions - just like data
*/

/* Why To Use HOFs */
/*
    -Because functions are first-class citizens in JavaScript, you can:
        # Pass them around like variables
        # Use them as parameters
        # Return them from other functions
*/

/* Example 1: Function That Takes a Function */
// greet() is a higher-order function because it takes another function as an argument
function greet(name, callback) {
    const message = "Hello " + name;
    callback(message);
}
greet("Hemza", function (msg) {
    console.log(msg); // "Hello Hemza"
});

/* Example 2: Function That Returns a Function */
// multiplyBy() is a higher-order function because it returns a function
function multiplyBy(x) {
    return function (y) {
        return x * y;
    };
}
const double = multiplyBy(2);
console.log(double(4)); // 8
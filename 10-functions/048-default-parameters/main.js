/* Default Parameters In Functions */
/*
    -Default parameters let you assign a default value to a function’s parameter
    -If the caller doesn’t provide a value (or provides undefined), the default value is used automatically

    // Why use default parameters ?
        # Make functions more flexible
        # Avoid errors from missing arguments
        # Simplify function calls when reasonable defaults exist
*/
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet("Hemza"); // "Hello Hemza"
greet();        // "Hello Guest" (If no argument is passed, name becomes "Guest" by default)
// Another Example
/*
    -IMPORTANT: -Always define default parameters at the end of your parameter list
                -If a parameter with a default value is placed before required ones, JavaScript might get confused
                 about which argument is meant for which parameter during function calls
*/
function calculateTotalPrice(price, tax = 0.1) {
    return price + (price * tax);
}
console.log(calculateTotalPrice(100));      // 110 | Uses default tax
console.log(calculateTotalPrice(100, 0.2)); // 120 | Uses custom tax
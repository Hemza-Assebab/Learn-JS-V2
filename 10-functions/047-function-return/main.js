/* Function Return */
/*
    -A return statement in a function sends a value back to wherever the function was called
    -Without a return, the function gives back nothing useful (just "undefined")

    // Use "return" when you want to:
        # Reuse the result elsewhere
        # Control when a function stops
*/
function add(a, b) {
    // After hitting return, the function stops executing immediately.
    // The returned value can be stored, used in expressions, or logged directly
    return a + b;
}
let result = add(2, 3);
console.log(result); // 5

/* Why Use return ? - Use Cases */

// Get Data from a Function
/*
    -Instead of just printing results inside the function, use return to send the result out for later use
*/
function square(num) {
    return num * num;
}
let squaredValue = square(4);
console.log(squaredValue); // 16

// Process and Return Results
/*
    -Functions can process inputs, then return useful outputs
*/
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Hemza", "Dev")); // "Hemza Dev"

// Conditional Logic Inside Functions
/*
    -You can return different values based on conditions
*/
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
}
let status = checkAge(19);
console.log(status); // "Adult"
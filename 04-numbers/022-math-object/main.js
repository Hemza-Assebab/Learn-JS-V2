/* Math Object */
/*
    -The Math object in JavaScript is a built-in object that provides a collection of mathematical constants and functions,
     like rounding numbers, generating random values, or calculating powers, square roots...

    -Note: Math is not a constructor, you don’t use "new Math()". You simply call its methods directly
*/

/* Some Math Constants */
console.log(Math.PI); // 3.14159...
console.log(Math.SQRT2); // Square root of 2
console.log(Math.SQRT1_2); // Square root of 1/2

/* Math.round() */
/*
    -Syntax: Math.round(value)
    -Rounds to the nearest integer
*/
console.log(Math.round(21.5)); // 22
console.log(Math.round(21.4)); // 21

/* Math.ceil() */
/*
    -Syntax: Math.ceil(value)
    -Rounds up to nearest integer
*/
console.log(Math.ceil(3.6)); // 4
console.log(Math.ceil(3.1)); // 4

/* Math.floor() */
/*
    -Syntax: Math.floor(value)
    -Rounds down to nearest integer
*/
console.log(Math.floor(9.1)); // 9
console.log(Math.floor(9.9)); // 9

/* Math.trunc() */
/*
    -Syntax: Math.trunc(value)
    -Removes decimal part (no rounding)
*/
console.log(Math.trunc(21.95)); // 21
console.log(Math.trunc(21.14)); // 21

/* Math.min() and Math.max() */
/*
    -Syntax:
        # Math.min(...values)
        # Math.max(...values)

    -Used to get the smallest or the biggest value in a set of given arguments
*/
console.log(Math.min(41, 0, 5, -1)); // -1
console.log(Math.max(41, 0, 5, -1)); // 41

/* Math.pow() */
/*
    -Syntax: Math.pow(a, b) // a to the power of b
*/
console.log(Math.pow(2, 3)); // 8 = 2 x 2 x 2

/* Math.abs() */
/*
    -Syntax: Math.abs(value)
    -Returns the absolute value of a given number
*/
console.log(Math.abs(1));  // 1
console.log(Math.abs(-1)); // 1

/* Math.random() */
/*
    -Returns a random number between 0 and 1 (not including 1)
*/
console.log(Math.random()); // As Example: 0.531947
/*
    -To get a random number between two values:
        # Math.floor(Math.random() * (max - min + 1)) + min
*/
console.log(Math.floor(Math.random() * (15 - 5 + 1)) + 5); // Will return a value between [5, 15]
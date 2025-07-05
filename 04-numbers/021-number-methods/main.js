/* Number Methods */

/* toString() */
// Converts a number into a string.
console.log((100).toString());  // "100"
console.log(100..toString());   // "100"
console.log(100.01.toString()); // "100.01"

/* toFixed() */
/*
    -Syntax: value.toFixed([digits])
    -Arguments:
        # digits => Number of digits to appear after the decimal point

    -Formats a number to a fixed number of decimal places
    -Returns a string, not a number
    -It rounds the number as needed
*/
let num = 23.216;
console.log(num.toFixed());  // "23"
console.log(num.toFixed(1)); // "23.2"
console.log(num.toFixed(2)); // "23.22" (Rounding !)

/* parseInt() */
/*
    -Syntax: parseInt(value)
    -Converts a string to an integer by parsing it from left to right until it hits a non-digit (or invalid) character
*/
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("003.99"));   // 3
console.log(parseInt("Hello 21")); // NaN

/* parseFloat() */
/*
    -Syntax: parseFloat(value)
    -Parses a string and converts it to a floating-point number. It recognizes one decimal point
*/
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("5.678xyz")); // 5.678
console.log(parseFloat("42"));       // 42 (integer is still valid float)
console.log(parseFloat("abc"));      // NaN 

/* Number.isInteger() */
/*
    -Syntax: Number.isInteger(num)

    -Checks if a given value is an integer number
    -Returns true if the value is a number and has no fractional part
    -Returns false for non-numbers or floating-point values
*/
console.log(Number.isInteger(10));       // true
console.log(Number.isInteger(10.5));     // false
console.log(Number.isInteger("10"));     // false (string, not number)
console.log(Number.isInteger(NaN));      // false
console.log(Number.isInteger(Infinity)); // false

/* isNaN() */
/*
    -Syntax: isNaN(value)

    -Checks if a value is NaN (Not-a-Number) after it has been coerced to a number
    -Returns true if the converted value becomes NaN
    -Otherwise returns false
*/
console.log(isNaN(NaN));       // true
console.log(isNaN("hello"));   // true (can't convert to number)
console.log(isNaN(undefined)); // true (becomes NaN when coerced)
console.log(isNaN("123"));     // false (valid number as string)
console.log(isNaN(123));       // false
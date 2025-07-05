/* Number */
/*
    -In JavaScript, all numbers are of a single type: Number
    -That means both:
        # Integers like (5, 100, -42)
        # Decimals like (3.14, -0.5)
    are handled by the same Number type
*/

/* Underscores in Numeric Literals */
// You can use underscores (_) to separate digits in large numbers to make them easier to read
console.log(100_000_000); // 100000000

/* Exponential Notation */
// You can use e notation to write very large or small numbers:
let trillion = 1e12; // 1 followed by 12 zeros → 1000000000000
let tiny = 5e-6; // 0.000005

/* MAX_VALUE */
/*
    -The largest number JavaScript can represent
    -Value: approximately 1.7976931348623157e+308
    -If you go beyond it, JavaScript returns Infinity
*/
console.log(Number.MAX_VALUE);       // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 2);   // Infinity

/* MIN_VALUE */
/*
    -The smallest positive number greater than 0 (not the most negative number!)
    -Value: approximately 5e-324
    -Going smaller results in underflow => 0
*/
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.MIN_VALUE / 10); // 0

/* MAX_SAFE_INTEGER */
/*
    -Largest integer that can be safely represented in JS without rounding errors
    -Value: 9007199254740991
*/
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (precision error!, Beyond this point, JavaScript can't guarantee accuracy for integers)

/* MIN_SAFE_INTEGER */
/*
    -Smallest safe (most negative) integer
    -Value: -9007199254740991
*/
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
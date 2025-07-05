/* Arithmetic Operators */
// Arithmetic operators are used to perform mathematical operations on numbers

/* [+] Addition */
// Adds two values
console.log(5 + 2); // 7
console.log(21 + "Hemza"); // This will log "21Hemza" due to "type coercion"

/* [-] Subtraction */
console.log(5 - 2); // 3
console.log("Hemza" - 133); // This logs NaN (Not a Number), because we can't apply this operation between a string and a number
console.log(typeof NaN); // number

/* [*] Multiplication */
console.log(6 * 6); // 36

/* [/] Division */
console.log(20 / 5); // 4

/* [%] Modulus */
// Returns the remainder after division
console.log(11 % 2); // 1 (Useful to check if a number is even)
console.log(11 % 7); // 4

/* [**] Exponentiation */
// Raises the number to a power
console.log(2 ** 3); // 8 = (2 x 2 x 2)

/* [++] Increment (Post / Pre) */
let a = 1;
// It same as if you did: a = a + 1
console.log(a++); // 1 (This is post increment) (Logs first then, increases)
console.log(a);   // 2
let b = 1;
console.log(++b); // 2 (This is pre increment) (Increases first, then logs)
console.log(b);   // 2

/* [--] Decrement (Post / Pre) */
let c = 2;
// It same as if you did: c = c - 1
console.log(c--); // 2 (This is post decrement) (Logs first then, decreases)
console.log(c);   // 1
let d = 2;
console.log(--d); // 1 (This is pre decrement) (Decreases first, then logs)
console.log(d);   // 1
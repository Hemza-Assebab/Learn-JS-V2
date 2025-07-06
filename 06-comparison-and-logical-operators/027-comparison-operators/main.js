/* Comparison Operators */
/*
    -Comparison operators in JavaScript are used to compare two values
    -They return a Boolean value: true or false
*/

/* [==] Equal (Loose) */
// Checks value only (with type coercion)
console.log("5" == 5);  // true
console.log(5 == 5);    // true
console.log(1 == true); // true

/* [!=] Not Equal (Loose) */
// Also checks value only (with type coercion)
console.log("5" != 5); // false
console.log(5 != 5);   // false
console.log(5 != 2);   // true

/* [===] Strict Equal */
// Checks value and type (no coercion)
console.log(5 === 5);   // true
console.log("5" === 5); // false

/* [!==] Strict Not Equal */
// Also checks value and type (no coercion)
console.log(1 !== 1);   // false
console.log(1 !== "1"); // true

/* [>] Greater Than */
console.log(4 > 2); // true

/* [>=] Greater Than Or Equal To */
console.log(4 >= 4); // true
console.log(4 >= 5); // false

/* [<] Less Than */
console.log(1 < 4); // true

/* [<=] Less Than Or Equal To */
console.log(5 <= 5); // true
console.log(1 <= 5); // true
console.log(6 <= 5); // false
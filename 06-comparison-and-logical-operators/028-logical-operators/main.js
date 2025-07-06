/* Logical Operators */
/*
    -Logical operators in JavaScript are used to combine or invert boolean values
    -Especially useful in if conditions and expressions that involve comparisons
*/

/* [&&] Logical AND */
// Returns true if both operands are true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(1 < 2 && 1 == 1); // true
console.log(1 < 2 && 1 != 1); // false

/* [||] Logical OR */
/*
    -It returns:
        -The first truthy value it finds
        -Or the last value if none are truthy
*/
console.log(1 || 2 || 0);      // 1
console.log(true || false);    // true
console.log(1 == 1 || 4 == 2); // true
console.log("" || "Hamza");    // "Hamza"
console.log(0 || "No Score");  // "No Score"

/* [!] Logical NOT */
// Inverts the boolean value
console.log(!true);              // false
console.log(!false);             // true
console.log(!(1 == 1 && 2 < 5)); // false
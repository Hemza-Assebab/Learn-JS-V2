/* Unary Plus and Negation Operators */
// A unary operator is an operator that works with only one operand (a single value).

/* Unary Plus (+) */
// The unary + tries to convert its operand into a number
// Use case: quickly convert values to numbers without using Number()
console.log(+100);       // 100
console.log(+"100");     // 100
console.log(+"Hemza");   // NaN
console.log(+true);      // 1
console.log(+false);     // 0
console.log(+null);      // 0
console.log(+undefined); // NaN

/* Unary Negation (-) */
// The unary - converts its operand to a number, then negates it (makes it negative)
console.log(-100);       // -100
console.log(-"100");     // -100
console.log(-"Hemza");   // NaN
console.log(-true);      // -1
console.log(-false);     // -0
console.log(-null);      // -0
console.log(-undefined); // NaN

/* Concatenation */
/*
    -Concatenation means joining two or more strings together into one
    -To concatenate strings we use the "+" operator
*/
let firstName = "Hamza";
let lastName = "Dev";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* Imortant */
// If you use + with a string and a number, the number gets converted to a string (Type Coercion)
console.log("The result is: " + 5); // "The result is 5"
console.log(1 + 1); // 2
console.log("1" + 1); // 11 and not 2
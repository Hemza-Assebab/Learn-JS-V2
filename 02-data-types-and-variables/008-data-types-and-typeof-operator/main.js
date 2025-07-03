/* Data Types and "typeof" Operator */

/* "typeof" Operator */
// It allows us to know the data type of a value
console.log(typeof "Hello"); // string

/* Primitive Types (Stored by value) */
// These are simple values, not objects
console.log(typeof "Hamza");   // string
console.log(typeof 5000);      // number
console.log(typeof 5000.22);   // number
console.log(typeof true);      // boolean
console.log(typeof false);     // boolean
console.log(typeof null);      // object (intentional empty)
console.log(typeof undefined); // undefined (not assigned)

/* Non-Primitive Types (Objects, Stored by reference) */
console.log(typeof {name: "Hamza", age: 39, country: "Germany"}); // object
console.log(typeof [12, -132, "Test", true, false, {name: "Aymen"}]); // object (Known as array)
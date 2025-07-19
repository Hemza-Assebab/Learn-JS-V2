/* Introduction To Arrays */
/*
    -In JavaScript, an array is a special type of object used to store multiple values in a single variable
    -Arrays are ordered collections, meaning each item has a numbered position starting from zero (0)
*/

/* How To Create An Array */
// 1 - Using square brackets
let fruits  = ["apple", "banana", "cherry"];
// 2 - Using the "Array" Constructor
let fruits2 = new Array("apple", "banana", "cherry"); // This method is less common
// NOTE: Arrays can hold different types
let mixed = ["Hello", 21, true, ["Hello"], {name: "Hemza"}];

/* Access Array Elements */
/*
    -In JavaScript, you access array elements using their index, which starts from 0 (not 1)
    -Syntax:
        # arrayName[index] (index is the position of the element you want)
*/
let fruits3 = ["apple", "banana", "cherry"];
console.log(fruits2[0]); // "apple"
console.log(fruits2[1]); // "banana"
console.log(fruits2[2]); // "cherry"
console.log(fruits2[3]); // "undefined" | That's because you're trying to access a None-Exisiting element

/* Nested Arrays */
/*
    -Nested arrays in JavaScript are simply arrays inside other arrays
*/
let fruits4 = ["apple", "banana", "cherry", ["orange", "pear", "peach"]];
// Access Nested Arrays
console.log(fruits4[3]); // ["orange", "pear", "peach"]
console.log(fruits4[3][0]); // "orange"
console.log(fruits4[3][1]); // "pear"
console.log(fruits4[3][2]); // "peach"

/* Change Array's Elements */
// You can access an element and assign a new value to it:
let fruits5 = ["apple", "banana", "cherry"];
console.log(fruits5); // ["apple", "banana", "cherry"]
fruits5[1] = "mango";
console.log(fruits5); // ["apple", "mango", "cherry"]

/* Array.isArray() Method */
/*
    -This method in JavaScript is used to check whether a value is an array
    -This is helpful because in JavaScript, arrays are technically a type of object,
     so using typeof won’t work correctly for identifying arrays

    -Syntax:
        # Array.isArray(value)
    
    -Returns true if the value is an array
    -Returns false otherwise
*/
console.log(Array.isArray(["Hello", "There"])); // true
console.log(Array.isArray("Hello There"));      // false
console.log(Array.isArray({}));                 // false
// Why use "Array.isArray()" instead of using "typeof" ?
console.log(typeof {name: "hemza", age: "53"} === "object");  // true
console.log(typeof ["apple", "banana"] === "object");         // true  (not helpful because you won't know whether it's array or not)
console.log(Array.isArray({name: "hemza", age: "53"}));       // false
console.log(Array.isArray(["apple", "banana"]));              // true
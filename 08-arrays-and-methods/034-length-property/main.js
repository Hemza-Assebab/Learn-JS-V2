/* Length Property */
/*
    -Length is a property that tells you how many elements are in the array
    -It automatically updates as you add or remove elements
*/
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3

/* Appending Elements To Array using ".length" */
/*
    -You can add a new element at the end by using the current ".length" as the index
    -Why? Because "fruits2.length" gives the next empty index, and so we can assign a value to it
*/
let fruits2 = ["apple", "cherry"];
fruits2[fruits2.length] = "Mango";
console.log(fruits2); // ['apple', 'cherry', 'Mango']

/* Change The Length Of An Array */
// Increase the length:
/*
    -Setting a larger length creates empty slots
*/
let fruits3 = ["apple"];
fruits3.length = 3;
console.log(fruits3);    // ['apple', empty × 2]
console.log(fruits3[1]); // undefined
// Decrease the length:
/*
    -Setting a smaller length removes elements from the end
*/
let fruits4 = ["apple", "banana", "cherry", "mango", "pear", "peach"];
fruits4.length = 2;
console.log(fruits4); // ['apple', 'banana']
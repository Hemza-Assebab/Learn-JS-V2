/* Destructuring Arrays */
/*
    -Array destructuring in JavaScript is a way to unpack values from arrays into
     individual variables in a cleaner and shorter syntax
*/

/* Basic Syntax */
const array = [1, 2, 3];
// Here, [a, b, c] is the destructuring pattern that pulls values out of the array
const [a, b, c] = array;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

/* Skipping Elements */
// You can skip values by leaving a space between commas
const array2 = [1, 2, 3, 4, 5];
const [first, , , fourth, ] = array2;
console.log(first);  // 1
console.log(fourth); // 4

/* Default Values */
// You can give default values in case the array doesn't have enough elements
const array3 = [1];
const [d, e = 10] = array3;
console.log(d); // 1
console.log(e); // 10 (default used)

/* Swapping Variables */
// A neat trick, destructuring makes it easy to swap values:
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x); // 10
console.log(y); // 5

/* Nested Destructuring */
// You can destructure nested arrays:
const array4 = [1, [2, 3, [4]]];
const [f, [g, h, [i]]] = array4;
console.log(f); // 1
console.log(g); // 2
console.log(h); // 3
console.log(i); // 4

/* Rest Operator */
// You can collect the remaining items using the rest syntax:
const array5 = [1, 2, 3, 4, 5];
const [one, two, ...rest] = array5;
console.log(one);  // 1
console.log(two);  // 2
console.log(rest); // [3, 4, 5]
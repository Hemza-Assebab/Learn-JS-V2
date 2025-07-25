/* ForEach Higher Order Method */
/*
    -The forEach() method executes a provided function once for each element in an array
    -It is mainly used for looping over arrays to perform side effects like printing, modifying DOM elements, logging data...
    -This method doesn't change the original array, and it doesn't return a new one
*/

/* Syntax */
/*
    array.forEach(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* Key Characteristics */
/*
    -Runs a function once for each array element
    -Does not return anything
    -Cannot be stopped with "break" or "continue" like "for" loops
*/

/* Basic Example */
const fruits = ["apple", "banana", "mango"];
// Output:
/*
    "apple"
    "banana"
    "mango"
*/
fruits.forEach(function (fruit) {
    console.log(fruit); // This logs the current fruit
});

/* Arrow Function Example */
const numbers = [1, 2, 3];
// Output:
/*
    2
    4
    6
*/
numbers.forEach(num => console.log(num * 2));

/* Using array And index Arguments */
const colors = ["red", "green", "blue"];
colors.forEach((color, index, array) => {
    console.log(`${index}: ${color} (Total: ${array.length})`);
});
// Below are some practical examples:

/* Example: Sum Values Using an External Variable */
const prices = [10, 20, 30];
let total = 0;
prices.forEach(price => total += price);
console.log(total); // 60

/* Example: Modify Each Object in an Array */
const students = [
  { name: "Alice", score: 42 },
  { name: "Bob",   score: 65 },
  { name: "Eve",   score: 90 }
];
students.forEach(student => student.passed = student.score >= 50);
console.log(students); // [{ name: "Alice", score: 42, passed: false },{ name: "Bob", score: 65, passed: true }, { name: "Eve", score: 90, passed: true }]

/* Example: Capitalize First Letter of Each Word */
const names = ["john", "jane", "jack"];
const capitalized = [];
names.forEach(name => capitalized.push(name[0].toUpperCase() + name.slice(1)));
console.log(capitalized); // ['John', 'Jane', 'Jack']
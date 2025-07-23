/* Map Higher Order Method */
/*
    -The map() higher order method is an array method in JavaScript used to:
        # Create a new array
        # By applying a function to each element of an existing array
        # Without modifying the original array

    -Key properties of map() method:
        # It is non-destructive (does not change the original array)
        # It returns a new array of the same length
        # It uses a callback function to transform each element
*/

/* Syntax */
/*
    array.map(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array being mapped
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* How It Works ? */
/*
    -The map() method loops through each element of the original array
    -It applies the callback function to each element
    -It returns a new array containing the results of the callback
*/

/* Basic Example */
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
    return num * 2; // Remember to always return a value | no return => returns undefined
});
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] => original remains unchanged

/* Arrow Function Version (Shorter Syntax) */
const numbers2 = [5, 10, 15];
const doubled2 = numbers2.map(num => num * 2);
console.log(doubled2); // [10, 20, 30]

/* Using index and array Parameters */
const fruits  = ["apple", "banana", "cherry"];
const labeled = fruits.map((fruit, index, arr) => {
    return `${index + 1}/${arr.length}: ${fruit}`;
})
console.log(labeled); // ['1/3: apple', '2/3: banana', '3/3: cherry']

/* Practical Use Cases */
// Extracting Values from Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Converting strings:
const lower = ["one", "two"];
const upper = lower.map(str => str.toUpperCase());
console.log(upper); // ['ONE', 'TWO']
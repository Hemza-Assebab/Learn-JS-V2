/* Filter Higher Order Method */
/*
    -The filter() method creates a new array that includes only the elements that pass a test (provided by a callback function)
    
    // How it works:
        # It loops through the array
        # It returns a new array with elements where the callback returns true
        # It does NOT change the original array
*/

/* Syntax */
/*
    array.filter(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array being filtered
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* Basic Example */
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function (num) {
    // Only the elements that return true in the test are added to the new array
    return num % 2 === 0; // NOTE: Always return a result in order to avoid having an empty array
});
console.log(evenNumbers); // [2, 4, 6]

/* Using Arrow Function */
const numbers2 = [10, 15, 20, 25];
const above20 = numbers2.filter(num => num > 20);
console.log(above20); // [25]

/* Example: Filtering Strings (Fruits Starting with "a") */
const fruits  = ["apple", "banana", "avocado", "blueberry"];
const aFruits = fruits.filter(fruit => fruit.startsWith("a"));
console.log(aFruits); // ['apple', 'avocado']

/* Filtering Objects in an Array */
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: "Bob", age: 22 }, { name: "Charlie", age: 18 }]
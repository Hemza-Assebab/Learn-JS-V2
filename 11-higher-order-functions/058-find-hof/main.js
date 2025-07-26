/* Find Higher Order Method */
/*
    -The find() method returns the first element in an array that satisfies a given condition (the callback function returns true)
    -If no element matches the condition, it returns undefined
    -It doesn't change the original array
*/

/* Syntax */
/*
    array.find(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* Basic Example */
const numbers = [3, 7, 11, 18, 25];
const result = numbers.find(num => num > 10);
console.log(result); // 11 (first number > 10)

/* Example: Find an Object in an Array */
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Hemza" },
  { id: 3, name: "Charlie" }
];
const hemza = users.find((user) => user.name === "Hemza");
console.log(hemza); // {id: 2, name: 'Hemza'}

/* Example: No Match */
const numbers2 = [1, 3, 5];
const firstEven = numbers2.find(num => num % 2 === 0);
console.log(firstEven); // undefined
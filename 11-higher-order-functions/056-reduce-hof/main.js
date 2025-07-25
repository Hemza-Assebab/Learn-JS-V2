/* Reduce Higher Order Method */
/*
    -The reduce() method is used to "Reduce" an array to a single value by applying a function
     to each element in sequence, while accumulating a result
    
    -Commonly used to:
        # Sum numbers
        # Multiply values
        # Merge arrays or objects
        # Perform advanced data processing
*/

/* Syntax */
/*
    array.reduce(callback(accumulator, currentValue, [index], [array]), [initialValue])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # accumulator  => The accumulated result from previous steps
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array being processed
        # initialValue => (Optional but recommended) Starting value for the accumulator
                          (If not provided it takes the first array's element as the initial value)
*/

/* Basic Example */
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber
}, 0); // initialValue is 0
console.log(sum); // 10

/* Using Arrow Function */
const numbers2 = [1, 2, 3, 4];
const product = numbers.reduce((accumulator, currentNumber) => accumulator * currentNumber, 1); // initialValue is 1
console.log(product); // 24

/* Example: Flatten a 2D Array */
const arrays = [[1, 2], [3, 4], [5, 6]];
const flat = arrays.reduce((acc, value) => acc.concat(value), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

/* Example: Count Occurrences */
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // {apple: 3, banana: 2, orange: 1}

/* Example: Get the Maximum Value */
const numbers3 = [5, 8, 2, 10, 3];
const max = numbers3.reduce((acc, num) => {
    return acc < num ? num : acc;
}, numbers3[0]);
console.log(max); // 10

/* Real-World Use Cases */
/*
    -Total cart price
    -Count items
    -Grouping items
*/
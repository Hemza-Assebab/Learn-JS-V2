/* Array Basic Methods */

/* push() */
/*
    -This method is used to add one or more elements to the end of an array
    -It modifies the original array and returns the new length of the array

    -Syntax:
        # array.push(...elements)
*/
let fruits = ["apple"];
fruits.push("banana");
console.log(fruits.push("cherry", "mango")); // 4 | The new length of the array
console.log(fruits);                         // ['apple', 'banana', 'cherry', 'mango']

/* unshift() */
/*
    -This method is used to add one or more elements to the beginning of an array
    -It modifies the original array and returns the new length of the array

    -Syntax:
        # array.unshift(...elements)
*/
let fruits2 = ["apple", "cherry", "mango"];
console.log(fruits2.unshift("banana", "pear")); // 5 | The new length of the array
console.log(fruits2);                           // ['banana', 'pear', 'apple', 'cherry', 'mango']

/* pop() */
/*
    -This method is used to remove the last element from an array
    -It modifies the original array and returns the removed element

    -Syntax:
        # array.pop()
*/
let fruits3 = ["apple", "cherry", "mango"];
fruits3.pop();              // "mango" is removed
console.log(fruits3.pop()); // "cherry" | Returns the removed element
console.log(fruits3);       // ["apple"]

/* shift() */
/*
    -This method is used to remove the first element from an array.
    -It modifies the original array and returns the removed element

    -Syntax:
        # array.shift()
*/
let fruits4 = ["apple", "cherry", "mango"];
fruits4.shift();              // "apple" is removed
console.log(fruits4.shift()); // "cherry" | Returns the removed element
console.log(fruits4);         // ['mango']
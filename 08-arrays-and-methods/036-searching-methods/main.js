/* Searching Methods */

/* indexOf() */
/*
    -This method is used to find the first index of a given element in an array
    -If the element is not found, it returns -1

    -Syntax:
        # array.indexOf(searchElement, [fromIndex])
    -Arguments:
        # searchElement => The value to search for
        # fromIndex     => (Optional) The index to start searching from. Default is 0
*/
let colors = ['red', 'green', 'blue', 'green'];
console.log(colors.indexOf('green'));    // 1 (first match)
console.log(colors.indexOf("green", 2)); // 3 (starts search from index 2)
console.log(colors.indexOf('blue'));     // 2
console.log(colors.indexOf('yellow'));   // -1 (not found)
/*
    NOTE 1: indexOf() uses strict equality (===) when comparing elements
    NOTE 2: Works for primitive values (numbers, strings). For objects or arrays, reference equality applies
*/
let arr = [{a:1}, {b:2}];
console.log(arr.indexOf({a:1})); // -1 | different object reference


/* lastIndexOf() */
/*
    -This method is used to find the last occurrence of a specific element in an array
    -It searches backward from the end of the array (or from a specified index)
    -It returns the index of the last occurrence. If the element is not found it returns -1

    -Syntax:
        # array.lastIndexOf(searchElement, [fromIndex])
    -Arguments:
        # searchElement => The value to search for
        # fromIndex     => (Optional) The index to start searching backward from. Default is "array.length - 1"
*/
let numbers = [1, 2, 3, 2, 4, 2];
console.log(numbers.lastIndexOf(2));         // 5
console.log(numbers.lastIndexOf(5));         // -1 (not found)
console.log(numbers.lastIndexOf(2, 4));      // 3 (search backward starting from index 4)
console.log(numbers.lastIndexOf(2, 1));      // 1

/* includes() */
/*
    -This method checks whether an array contains a specific element
    -It returns true if the element is found, otherwise false

    -Syntax:
        # array.includes(searchElement, [fromIndex])
    -Arguments:
        # searchElement => The value to search for
        # fromIndex     => (Optional) Index to start the search from (defaults to 0)
*/
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));     // true
console.log(fruits.includes('banana', 2));  // false
console.log(fruits.includes('mango'));      // false
/* Slice and Splice Methods */

/* slice() */
/*
    -This method is used to extract a portion of an array
    -It returns a new array without modifying the original one

    -Syntax:
        # array.slice([beginIndex], [endIndex])
    -Arguments:
        # beginIndex => (Optional) The start index to begin extraction (inclusive). Defaults to 0
        # endIndex   => (Optional) The end index to stop extraction (exclusive). If omitted, extracts till the end
*/
let fruits = ['apple', 'banana', 'orange', 'mango', 'pineapple'];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']
console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'pineapple'] (Original array remains unchanged)

/* splice() */
/*
    -This method is used to add, remove, or replace elements in an array
    -It directly modifies the original array

    -Syntax:
        # array.splice(start, deleteCount, [...elements])
    -Arguments:
        # start       => Index to start changing the array
        # deleteCount => Number of elements to remove (can be 0)
        # elements    => (Optional) Elements to add at the start position
*/
let names = ["Hamza", "Ahmed", "Yassine", "Youssef"];
// At index 1, remove 1, insert "Yassir", "Kamal" and "Jad"
names.splice(1, 1, "Yassir", "Kamal", "Jad");
console.log(names); // ["Hamza", "Yassir", "Kamal", "Jad", "Yassine", "Youssef"]
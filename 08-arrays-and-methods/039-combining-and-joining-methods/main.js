/* Combining and Joining Methods */

/* join() */
/*
    -This method is used to combine all elements of an array into a single string, with an optional separator between each element
    -It returns a string and doesn't modify the original array
    
    -Syntax:
        # array.join([separator])
    -Arguments:
        # separator => (Optional) String to insert between elements. Default is a comma (',')
*/
let fruits = ["apple", "banana", "mango"];
let result = fruits.join(); // Default separator: ","
console.log(result);        // "apple,banana,orange"
// Using Custom Separator
let words = ['Hello', 'world'];
console.log(words.join(" ")); // "Hello world"
console.log(words.join("-")); // "Hello-world"
console.log(words.join(""));  // "Helloworld"
// Practical Use: Reversing a string
let str = "Hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleH"

/* concat() */
/*
    -This method is used to combine two or more arrays/values
    -It returns a new array without changing the original one

    -Syntax:
        # array.concat(...values)
    -Arguments:
        # values => Accepts one or more arrays/values to merge
*/
let arr1 = ["a", "b"];
let arr2 = ["c", "d"];
let combined = arr1.concat(arr2);
console.log(combined); // ["a", "b", "c", "d"]
// Example of concatenating multiple values
let arr3 = [1, 2];
let newArray = arr3.concat(true, 1, [["a", "b"]], "Hey"); // Important: Note that you're concatenating a nested array
console.log(newArray); // [1, 2, true, 1, ["a", "b"], 'Hey']
/* Sorting Methods */

/* sort() */
/*
    -This method is used to sort the elements of an array (It modifies the original array)
    -By default, it sorts elements as strings in ascending order
    -That can lead to unexpected results with numbers unless you provide a compare function

    -Syntax:
        # array.sort([compareFunction])
    -Arguments:
        # compareFunction => (Optional) A function that defines the sort order
*/
let fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

/* reverse() */
/*
    -This method reverses the order of elements in an array

    -Syntax:
        # array.reverse()

    -Modifies the original array (in-place)
    -Returns the reversed array
*/
// Example 1
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]
// Example 2
let letters = ['a', 'b', 'c'];
console.log(letters.reverse()); // ['c', 'b', 'a']
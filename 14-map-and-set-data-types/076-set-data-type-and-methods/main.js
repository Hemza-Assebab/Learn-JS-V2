/* Set Data Type and Methods */
/*
    -In JavaScript, a Set is a built-in object that stores unique values of any type (primitive values or object references)
    
    -A Set is similar to an array, but:
        # It only stores unique values (no duplicates)
        # The values are stored in insertion order
        # It is iterable (can use for...of or spread syntax)
*/

/* Create a Set */
/*
    -Syntax: new Set([iterableObject])
    -Arguments:
        iterableObject => An iterable object like a string or array
*/
console.log(new Set());             // Set(0) {} | This creates an empty set
console.log(new Set("Hamza"));      // Set(4) {'H', 'a', 'm', 'z'}
console.log(new Set([1, 2, 3])); // Set(3) {1, 2, 3} | Duplicates are removed
// Here are some common buit-in methods and properties of the Set constructor:
const mySet = new Set();

/* add() */
/*
    -It adds a new value to the set
    -Duplicated values are ignored and they won't be added to the set

    -Syntax: mySet.add(value)
*/
mySet.add("Hey");
mySet.add("Hello");
mySet.add("There");
mySet.add("Hey");   // Duplicate, won't be added
console.log(mySet); // Set(3) {'Hey', 'Hello', 'There'}

/* delete() */
/*
    -It removes a value from the set
    -It returns true if the item is deleted and false in case it's not found

    -Syntax: mySet.delete(value)
*/
console.log(mySet.delete("Hey")); // true
console.log(mySet);               // Set(2) {'Hello', 'There'}

/* has() */
/*
    -It checks if a value exists in the set
    -It returns true if the value was found and false if not

    -Syntax: mySet.has(value)
*/
console.log(mySet.has("Hello")); // true
console.log(mySet.has("Hey"));   // false

/* size */
/*
    -A property that returns the size of a set
    -Syntax: mySet.size
*/
console.log(mySet.size); // 2

/* forEach() */
/*
    -Loop over set items
    -Executes a function for each value in the set
*/
mySet.forEach(value => console.log(value));

/* clear() */
// It removes all values from the set
mySet.clear();
console.log(mySet); // Set(0) {}

/* Iterating Over a Set Using for...of */
const mySet2 = new Set(['a', 'b', 'c']);
for (let item of mySet2) {
    console.log(item);
}

/* When To Use Sets ? */
/*
    -To remove duplicates from an array
    -To check existence more efficiently than arrays (has() is faster than includes() for large data)
*/
// Example:
const numbers = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(numbers)]; // Search for "Spread Operator", we will discuss it in next lessons
console.log(unique); // [1, 2, 3, 4]
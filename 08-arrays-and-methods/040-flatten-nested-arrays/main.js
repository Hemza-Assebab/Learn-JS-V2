/* Flatten Nested Arrays - flat() Method */
/*
    -The flat() method is used to flatten nested arrays
    -It reduces the depth of nested arrays into a single-level array (depending on the depth specified)
    -It returns a new array, and doesn't modify the original one

    -Syntax:
        # array.flat([depth])
    -Arguments:
        # depth => (Optional) How deep to flatten. Default is 1
*/
let arr = [1, 2, [3, 4]];
let flatArr = arr.flat();
console.log(flatArr); // [1, 2, 3, 4]

/* Flatten Multiple Levels */
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat());  // [1, 2, [3, [4]]]
console.log(nested.flat(2)); // [1, 2, 3, [4]]
console.log(nested.flat(3)); // [1, 2, 3, 4]

/* Deeply Flatten Any Level */
// If you're unsure how deep it is, pass Infinity
let deep = [1, [2, [3, [4, [5]]]]];
console.log(deep.flat(Infinity)); // [1, 2, 3, 4, 5]

/* Remove Empty Slots */
// flat() also removes empty slots in sparse arrays:
let holes = [1, , 2, [3, , 4]];
console.log(holes.flat()); // [1, 2, 3, 4]

/* flat() VS concat() */
/*
    -concat() => Joins arrays but doesn't flatten nested arrays
    -flat()   => Is for flattening nested structures
*/
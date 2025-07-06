/* String Methods Part 2 */

/* indexOf() */
/*
    -Syntax: "string".indexOf(value, [startIndex])
    -Options:
        # value      => The value you're looking for its index in the string
        # startIndex => The index you want to start from in the string

    -Finds first index of a value
*/
console.log("Hamza".indexOf("a"));    // 1
console.log("Hamza".indexOf("a", 2)); // 4

/* lastIndexOf() */
/*
    -Syntax: "string".lastIndexOf(value, [startIndex])
    -Arguments are same as ( indexOf() )

    -Finds last index of a value
*/
console.log("Hamza".lastIndexOf("a")); // 4 (Even when there are 2 "a" in the string, it returned the index of the last one)

/* repeat() */
/*
    -Syntax: "string".repeat(x)
    -Repeats the string "x" times
*/
console.log("Hello".repeat(2)); // "HelloHello"

/* split() */
/*
    -Syntax: "string".split([separator], [limit])
    -Arguments:
        # separator => The separator the split() method is going to depend on to split the string.
        # limit     => The limit where you want to stop triming

    -Splits string into array
*/
console.log("Hello Hemza".split());      // ["Hello Hemza"]
console.log("Hello Hemza".split(" "));   // ["Hello", "Hemza"]
console.log("Hello Hemza".split(""));    // ['H', 'e', 'l', 'l', 'o', ' ', 'H', 'e', 'm', 'z', 'a']
console.log("Hello Hemza".split("", 2)); // ["H", "e"]
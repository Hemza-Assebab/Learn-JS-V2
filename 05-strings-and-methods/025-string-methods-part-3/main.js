/* String Methods Part 3 */

/* includes() */
/*
    -Syntax: "string".includes(value, [startIndex])
    -Arguments:
        # value      => The value you're looking for in the string
        # startIndex => The index you want to start from in the string

    -Checks if string contains text, returns true if yes and false if no.
*/
console.log("Hamza".includes("am"));    // true
console.log("Hamza".includes("am", 3)); // false

/* startsWith(), endsWith() */
/*
    -Syntax: "string".startsWith(value, [startIndex])
    -Arguments:
        # value      => The value you're looking for in the string
        # startIndex => The index you want to start from in the string
    -Checks if string starts with "value"
*/
console.log("Hamza".startsWith("H"));    // true
console.log("Hamza".startsWith("H", 1)); // false

/* endsWith() */
/*
    -Syntax: "string".endsWith(value, [length])
    -Arguments:
        # value  => The value you're looking for in the string
        # length => If provided, the string is treated as if it's only that long, and the method checks
                    if the substring (from the beginning to length) ends with the "value"

    -Checks if string ends with "value"
*/
console.log("Hamza".endsWith("a"));    // true
console.log("Hamza".endsWith("a", 4)); // false
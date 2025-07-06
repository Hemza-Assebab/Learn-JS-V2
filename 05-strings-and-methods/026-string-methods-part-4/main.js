/* String Methods Part 4 */

/* replace() */
/*
    -Syntax: "string".replace(search, value)
    -Arguments:
        # search => The value you are looking for to replace
        # value  => The new value that is going to replace the older value

    -Replaces first match
*/
console.log("Hello Hello Hamza".replace("Hello", "Hi")); // "Hi Hello Hamza"

/* replaceAll() */
/*
    -Syntax: "string".replaceAll(search, value)
    -Arguments are same as replace() method

    -Replaces all matches
*/
console.log("Hello Hello Hamza".replaceAll("Hello", "Hi")); // "Hi Hi Hamza"

/* slice() */
/*
    -Syntax: "string".slice(startIndex, [endIndex])
    -Arguments:
        # startIndex => Where to start extracting (0-based)
        # endIndex   => Where to stop (but not included). If omitted, it goes to the end

    -Extract and returns a portion of a string without changing the original one
*/
console.log("Hamza".slice(2, ));  // mza
console.log("Hamza".slice(0, 2)); // Ha
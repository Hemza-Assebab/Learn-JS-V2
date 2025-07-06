/* String Methods Part 1 */

/* charAt() */
/*
    -Syntax: value.charAt(index)

    -Returns character at a given index
    -Note: JS has zero based indexing, so the first character's index of a string is 0
*/
let username = "Hemza";
console.log(username.charAt(0)); // H
console.log(username.charAt(2)); // m
// We can also access characters using the brackets:
console.log(username[0]); // H

/* length */
// Returns the length of a string
let username2 = "Ahmed";
console.log(username2.length); // 5

/* trim(), trimStart(), trimEnd() */
/*
    -Syntax:
        # value.trim()
        # value.trimStart()
        # value.trimEnd()

    -Triming methods are used to delete whitespace in a string
*/
console.log("  Hello  ");             // "  Hello  " | String with whitespace
console.log("  Hello  ".trim());      // "Hello"     | Removes whitespace from both ends
console.log("  Hello  ".trimStart()); // "Hello  "   | Removes from beginning
console.log("  Hello  ".trimEnd());   // "  Hello"   | Removes from end

/* toUpperCase(), toLowerCase() */
/*
    - value.toUpperCase() // Converts the string to uppercase
    - value.toLowerCase() // Converts the string to lowercase
*/
console.log("Hamza".toUpperCase()); // "HAMZA"
console.log("HAMZA".toLowerCase()); // "hamza"

/* Methods Chaining */
// We can apply many methods to a string just in one line by chaining them
let test = " hey ";
console.log(test.trim().charAt().toUpperCase()); // H
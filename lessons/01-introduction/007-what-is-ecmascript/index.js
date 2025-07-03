/* What is ECMAScript */
/*
    -ECMAScript (often abbreviated as ES) is the standard specification that defines how the JavaScript language should work
    -Think of ECMAScript as the rulebook for JavaScript
*/

/* Why Is It Called ECMAScript ? */
/*
    -In the 1990s, JavaScript was created by Netscape
    -To make JavaScript an open and standardized language, it was submitted to ECMA International (a standards organization)
    -The standard they published was called "ECMA-262", and the language it defined was named "ECMAScript"

    -In short:
        # JavaScript is the language you write
        # ECMAScript is the standard that defines how it works
*/

/* ECMAScript Versions */
/*
    | Version | Name            | Released | Key Features                                                        |
    | ------- | --------------- | -------- | ------------------------------------------------------------------- |
    | ES5     | ECMAScript 5    | 2009     | `strict mode`, `JSON`, `Array.forEach`                              |
    | ES6     | ECMAScript 2015 | 2015     | `let`, `const`, `arrow functions`, `classes`, `promises`, `modules` |
    | ES7+    | ES2016+         | 2016+    | `async/await`, `includes()`, `optional chaining`, etc               |

    -ES6 (2015) was the biggest update and changed modern JavaScript a lot
*/

/* Examples: Before and After ES6 */

/* Variable Declaration */
// Before
var name = "Hamza";
// After
let name = "Hamza";
const age = 24;

/* Functions */
// Before
function greet(name) {
    return "Hello " + name
};
// After
const greet = (name) => `Hello ${name}`;

// And more...
/* Type Coercion */
/*
    -Type coercion is when JavaScript automatically converts one data type to another when it needs to.
    -This happens implicitly (automatically by JS) or explicitly (when you do it yourself)
*/

/* Implicit Type Coercion (Auto Conversion) */
let result = "5" + 1;
console.log(result); // "51"
// JS saw a string and a number, and it converted the number to a string before adding, so "5" + "1" becomes "51"
// Another example:
let x = "10" - 2;
console.log(x); // 8
// Here, JavaScript converted "10" (string) to 10 (number) because subtraction, only works with numbers
/*
    -Implicit Type Coercion Table

    | Operation        | Code Example    | Result | Why?                  |
    | ---------------- | --------------- | ------ | --------------------- |
    | String + Number  |  "5" + 2        |  "52"  | Number becomes string |
    | String - Number  |  "5" - 2        |  3     | String becomes number |
    | Boolean + Number |  true + 1       |  2     | "true" becomes "1"    |
    | Boolean as Num   |  false * 5      |  0     | "false" becomes "0"   |
    | Null + Number    |  null + 1       |  1     | "null" becomes "0"    |
    | Undefined + Num  |  undefined + 1  |  NaN   | "undefined" → "NaN"   |

*/

/* Explicit Type Coercion (You do it yourself) */
/*
    -You manually convert types using types constructors like:
        # String()
        # Number()
        # Boolean

    -Using unary + and unary - (Check the next lesson)
*/
console.log(String(123)); // "123"
console.log(Number("123")); // 123
console.log(Boolean(0)); // false
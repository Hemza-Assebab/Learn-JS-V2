/* Assignment Operators */
/*
    -Assignment operators are used to assign values to variables
    -The most basic one is "=", but there are many others that combine math with assignment
*/

/* Basic Assignment Operator */
// "=" Assigns the right-hand value to the left-hand variable
let a = 10; // a now holds the value 10

/* Combined Assignment Operators */
/*
    -These operators do an operation and assign the result back to the same variable
    -They make code shorter and cleaner, especially inside loops or calculations

    | Operator | Meaning                 | Example   | Equivalent To |
    | -------- | ----------------------- | --------- | ------------- |
    |  +=      | Add and assign          |  x += 5   |  x = x + 5    |
    |  -=      | Subtract and assign     |  x -= 2   |  x = x - 2    |
    |  *=      | Multiply and assign     |  x *= 3   |  x = x * 3    |
    |  /=      | Divide and assign       |  x /= 4   |  x = x / 4    |
    |  %=      | Modulus and assign      |  x %= 2   |  x = x % 2    |
    |  **=     | Exponentiate and assign |  x **= 2  |  x = x ** 2   |
*/

/* Example */
let x = 10;
x += 5; // x = x + 5 => x is now 15
x -= 2; // x = x - 2 => x is now 13
x *= 2; // x = x * 2 => x is now 26
x /= 2; // x = x / 2 => x is now 13
x %= 5; // x = x % 5 => x is now 3
x **= 2; // x = x ** 2 => x is now 9
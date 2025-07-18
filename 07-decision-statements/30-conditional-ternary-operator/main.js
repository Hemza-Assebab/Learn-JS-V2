/* Conditional (Ternary) Operator */
/*
    -The conditional (ternary) operator in JavaScript is a short way to write simple if...else statements
    -It's called “ternary” because it takes three parts, here is main syntax:
        # condition ? expression_if_true : expression_if_false;
*/
// Example
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back" : "Please Log In !";
console.log(message); // In this case "message" contains the string "Weclome back" because "isLoggedIn" is true

/* Nested Ternary */
// You can nest ternaries for more conditions, but readability suffers
let score = 85;
let grade = (score >= 90) ? "A"
          : (score >= 80) ? "B"
          : (score >= 70) ? "C"
          : "F";
console.log(grade);  // Output: B

/* When To Use ? */
/*
    -For simple conditions, where using if...else feels too long
    -Avoid using for complex logic, it can hurt readability (Use if, else if and else)
*/
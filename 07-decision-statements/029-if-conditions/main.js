/* If Conditions */
/*
    -Decision statements in JavaScript let your code choose different paths based on conditions
    -They make your program decide what to do in different situations
*/

/* (If) Statement */
/*
    -Runs a block of code only if a condition is true
    -Syntax:
        if (condition) {
            // Block of code that runs when the condition is true
        }
*/
let a = 20;
if (a >= 20) {
    console.log("That's true");
}

/* (If...Else) Statement */
/*
    -Adds an alternative path if the condition is false.
    -Syntax:
        if (condition) {
            // Block of code that runs when the condition is true
        } else {
            // Block of code that runs when the condition is false
        }
*/
let isRaining = false;
if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("No need for an umbrella");
}

/* (If...Else If...Else) Statement */
/*
    -Allows multiple conditions to be checked in sequence.
    -Syntax:
        if (condition1) {
            // Block of code that runs when condition1 is true
        } else if (condition2) {
            // Block of code that runs when condition2 is true
        } else {
            // Block of code that runs if none of the above conditions are true
        }
*/
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

/* Nested Conditions */
/*
    -A nested if condition means putting one if statement inside another
    -It’s useful when decisions depend on multiple related conditions
*/
const username = "admin";
const password = "12345";
if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful !");
    } else {
        console.log("Incorrect password !");
    }
} else {
    console.log("Username not found !");
}
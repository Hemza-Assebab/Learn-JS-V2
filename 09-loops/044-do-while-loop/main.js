/* Do While Loop */
/*
    -A do...while loop in JavaScript is similar to a while loop, but with one key difference
    -The code runs at least once, even if the condition is false from the start
*/

/* Syntax */
/*
    do {
        // Code to run
    } while(condition)

    -Code runs first, then the condition is checked
    -If the condition is true, the loop repeats
    -If the condition is false, the loop stops
*/
let count = 1;
// This loop outputs: 1 2 3
do {
    console.log(count);
    count++;
} while (count <= 3);

/* Key Difference From "while" Loop */
/*
    -In a regular while loop, if the condition is false at the start, the code inside won't run at all
    -But in a do...while, the code runs once no matter what
*/
let num = 5;
// This loop outputs: "Runs at least once."
do {
  console.log('Runs at least once.');
} while (num < 0);

/* Practical Example */
/*
    -Imagine prompting a user until they enter a valid name
    -This ensures the prompt appears at least once, and keeps repeating until the user enters something
*/
let name;
do {
    name = prompt("Enter your name:");
} while (!name);
console.log('Hello ' + name);

/* When To Use do...while Loop ? */
/*
    -When you need the code to execute at least once, regardless of the condition
    -Repeating actions that must happen once before checking a condition
*/
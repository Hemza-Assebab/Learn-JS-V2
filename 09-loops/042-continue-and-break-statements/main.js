/* Continue and Break Statements */

/* "continue" Statement */
/*
    -It's used in loops to skip the rest of the current iteration and move to the next one
    -It's commonly used to ignore certain cases inside a loop
*/
// This loop outputs: 1 2 4 5 (3 was skipped)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip when i equals 3
    }
    console.log(i);
}

/* "break" Statement */
/*
    -It's used to stop and exit the loop completely
    -It's commonly used when you find what you're looking for and don't need to continue looping
*/
// This loop outputs: 1 2 (Loop stopped when i became 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Exit loop when i equals 3
    }
    console.log(i);
}

/* Practical Example with Both */
// This loop outputs: 1 3
for (let i = 1; i <= 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(i);
}
/* While Loop */
/*
    -A while loop in JavaScript repeatedly executes a block of code as long as a condition remains true
    -It’s useful when you don’t know exactly how many times you need to loop

    // Use Cases:
    - Keep prompting until user enters valid input
    - Process data until a certain signal or condition appears
    - Wait until a task finishes
*/

/* Syntax */
/*
    while (condition) {
        // Code to run each loop
    }

    -The condition is checked before every loop
    -If true  => code runs
    -If false => loop stops
*/
let count = 1;
// This loop outputs: 1 2 3
while (count <= 3) {
    console.log(count);
    count++;
}

/* Practical Example (Waiting for a condition) */
let fuel = 5;
while (fuel > 0) {
    console.log(`Fuel Left ${fuel}L`);
    --fuel; // Reduce fuel by 1
}
console.log("Out of fuel !");

/* Infinite Loop Example */
/*
    -Be carefull with the condition you set !
    -Don't run this code !
*/
// while (true) {
//     console.log("This will run forever");
// }
/* For Loop */
/*
    -A for loop in JavaScript is a basic way to repeat a block of code a specific number of times
    -It’s typically used when you know how many times you want to loop
*/

/* Syntax */
/*
    for (initialization; condition; increment) {
        // Code to run each loop
    }
*/

/* Example of How It Works */
/*
    -Initialization      => Runs once, sets up a counter
    -Condition           => Checked before each loop. If true, the loop runs. If false, the loop ends
    -Increment/Decrement => Runs after each loop iteration to update the counter
*/
// This loop outputs: 0 1 2 3 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* Looping Through Iterable Objects */
let colors = ["red", "green", "blue"];
// This loop outputs: "red" "green" "blue"
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

/* Nested For Loop */
/*
    -A nested for loop means using one for loop inside another
    -The inner loop runs completely every time the outer loop runs once
*/
let products = [
    ["Name: Laptop", "Price: 300", "Color: red"],
    ["Name: Football", "Price: 10", "Color: white"],
    ["Name: Ballon", "Price: 1", "Color: blue"]
]
// This Loop Outputs
/*
    Name: Laptop
    Price: 300
    Color: red
    ####################
    Name: Football
    Price: 10
    Color: white
    ####################
    Name: Ballon
    Price: 1
    Color: blue
    ####################

*/
for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].length; j++) {
        console.log(products[i][j]);
    }
    console.log("#".repeat(20));
}
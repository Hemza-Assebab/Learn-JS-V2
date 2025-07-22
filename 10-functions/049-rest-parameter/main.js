/* Rest Parameter */
/*
    -The rest parameter allows a function to accept any number of arguments as an array
    -This is useful when you don’t know how many values will be passed.

    -NOTE: A function can have only one rest parameter
    -NOTE: Rest parameter must always be the last parameter 
*/
// Syntax: Use ... (three dots) before a parameter name:
function exampleFunction(...restParam) {
    console.log(restParam);
}
exampleFunction("Hemza", true, "Hello", 2, []); // ['Hemza', true, 'Hello', 2, []] (Rest parameter values are handled as an array)

/* Example */
// Calculate the sum of an unknown amount of numbers
function sumAll(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumAll(2, 3, 1, 54));    // 60
console.log(sumAll(2, 3, 1, 54, 5)); // 65

/* Combining Regular Parameters + Rest Parameter */
// Example 1
function greetUsers(greeting, ...users) {
    for (let i = 0; i < users.length; i++) {
        console.log(`${greeting} ${users[i]}`);
    }
}
greetUsers("Welcome", "Hemza", "Aadil", "Saaid");
// Example 2: Joining Words
function joinWords(separator, ...words) {
    return words.join(separator);
}
console.log(joinWords("-", "One", "Two", "Three")); // "One-Two-Three"

/* Advantages Of Rest Parameters */
/*
    -Accept flexible/unknown numbers of inputs
    -Build cleaner, reusable functions
    -Handle lists of items without manual array input
*/
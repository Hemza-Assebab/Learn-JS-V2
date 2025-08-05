/* Destructuring Function Parameters */
/*
    -Destructuring function parameters means unpacking values directly in the function’s parameter list, either objects or arrays
    -This is cleaner, avoids repetitive code, and makes functions easier to read and use
*/

/* Object Destructuring in Parameters */
function displayUser({name = "Unknown", age = 0}) { // You can set default values for the destructured object
    console.log(`${name} is ${age} years old !`);
}
const user = {name: "Hemza", age: 25};
displayUser(user); // "Hemza is 25 years old !"
displayUser({});   // "Unknown is 0 years old !"
/*
    -You don't need to do:

    function displayUser(user) {
        const name = user.name;
        const age = user.age;
        ...
    }
*/

/* Array Destructuring in Parameters */
// Useful when the function expects a list of values in a fixed order:
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
const point = [10, 3];
printCoordinates(point); // "X: 10, Y: 3"

/* Nested Destructuring in Parameters */
function showUserInfo({name, location: {city, country}}) {
    console.log(`${name} lives in ${city}, ${country}`);
}
const user2 = {
    name: "Hemza",
    location: {
        city: "Casablanca",
        country: "Morocco",
    }
};
showUserInfo(user2); // "Hemza lives in Casablanca, Morocco"

/* Destructuring with Arrow Functions */
const greet = ({name}) => `Hello ${name} !`;
console.log(greet({name: "Ahmed"})); // Hello Ahmed !
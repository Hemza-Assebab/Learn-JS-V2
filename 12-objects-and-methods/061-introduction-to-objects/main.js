/* Introduction To Objects */
/*
    -An object is a collection of key-value pairs (also called properties), where:
        # Keys (also called property names) are strings or symbols
        # Values can be any data type: numbers, strings, arrays, functions, or even other objects
        
    -Objects allow you to group related data and behaviors (via methods) together
*/

/* Syntax */
/*
    const objectName = {
        key1: value1,
        key2: value2,
        ...
        keyN: valueN
    }
*/

/* Why Use Objects */
/*
    -Organized structure   => Group related data together
    -Easy to access/modify => Use dot or bracket notation
    -Dynamic	           => Add or remove properties on the fly
    -Reusable              => Useful in functions, APIs, OOP...
*/

/* Basic Example */
const person = {
    name: "Hemza", // "name" is a key (property name), and "Alice" is its value
    age: 25,
    isStudent: true
}
console.log(person); // {name: 'Hemza', age: 25, isStudent: true}

/* Example With Methods */
// A method is just a function assigned as a property of an object
const car = {
    brand: "Toyota",
    model: "Yaris",

    // Syntax 1:
    startEngine: function () {
        console.log("Engine Started");
    },

    // Syntax 2 (shorter syntax from ES6):
    stopEngine() {
        console.log("Engine Stopped");
    }
}
car.startEngine(); // "Engine Started"
car.stopEngine();  // "Engine Stopped"
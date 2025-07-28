/* CRUD Operations On Objects */
const person = {};

/* Adding Properties */
// You can add a new property simply by assigning a value to a new key
person.name = "Hemza";
person.age  = 24;
console.log(person); // {name: 'Hemza', age: 24}
person["favorite color"] = "purple";
console.log(person); // {name: 'Hemza', age: 24, "favorite color": 'purple'}

/* Updating Properties */
/*
    -To update a property, assign a new value to an existing key
    -If the key already exists, this will overwrite the previous value
*/
person.name = "Ahmed";
person["favorite color"] = "Yellow";
console.log(person); // {name: 'Ahmed', age: 24, "favorite color": 'Yellow'}

/* Deleting Properties */
/*
    -To remove a property, use the `delete` keyword
    -Syntax:
        # delete object.property
        # delete object["property"]
*/
delete person.age;
delete person["favorite color"];
console.log(person); // {name: 'Ahmed'}

/* Bonus Tip: Looping over object properties */
// The for...in loop is used to iterate over all enumerable properties (keys) of an object
const book = {
    title: "Book 1",
    pages: 302,
    sold:  false,
}
/*
    -key is a variable that will hold the name of each property (as a string)
    -book is the object you’re looping over
    -You can then use book[key] to get the corresponding value
*/
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}
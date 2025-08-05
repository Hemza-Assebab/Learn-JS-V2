/* Destructuring Objects */
/*
    -Object destructuring in JavaScript lets you extract properties from an object
     and assign them to variables in a short and clean way
*/

/* Basic Syntax */
const person = {
    name: "Hemza",
    age: 25,
};
// The variable names must match the property names in the object
const {name, age} = person;
console.log(name); // "Hemza"
console.log(age);  // 25

/* Renaming Variables */
// You can rename the variable while destructuring:
const person2 = {
    name: "Ahmed",
    age: 21,
};
const {name: fullName, age: years} = person2;
console.log(fullName); // "Ahmed"
console.log(years);    // 21

/* Default Values */
// You can assign default values if a property is missing:
const user = {
    username: "Lewis",
};
const {username, email = "test@test.com"} = user;
console.log(username);
console.log(email);

/* Nested Object Destructuring */
// You can go deeper if the object has nested structures:
const person3 = {
    name: "Saaid",
    address: {
        city: "Paris",
        zip: "81000"
    },
};
const {address: {city, zip}} = person3;
console.log(city); // "Paris"
console.log(zip);  // "81000"

/* Rest Operator */
// You can use the rest operator to collect remaining properties:
const user2 = {
    id: 1,
    userName: "Ahmed",
    role: "admin"
};
const {id, ...rest} = user2;
console.log(id);   // 1
console.log(rest); // {userName: 'Ahmed', role: 'admin'}
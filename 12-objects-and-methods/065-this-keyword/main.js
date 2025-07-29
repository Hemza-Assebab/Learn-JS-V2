/* "this" Keyword */
/*
    -In JavaScript, `this` refers to the object that is executing the current function
    -Think of this as a keyword that means "the object that owns this function right now"
*/

/* Why is this important in objects ? */
/*
    -When you write a method (a function inside an object), `this` gives you access to that object’s own properties,
     without needing to hardcode the object name
*/
const person = {
    name: "Hemza",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
/*
    -When you call `person.greet()`, the person object is the caller, so this refers to person
    -Therefore, `this.name` means `person.name`
*/
person.greet(); // "Hello, my name is Hemza"

/* Why not just use `person.name` inside the method ? */
/*
    -Because:
        # You might reuse the object under a different name
        # You might pass it around, and then the name "person" isn't meaningful anymore
        # It makes the code rigid instead of flexible

    -Here is the problem with hardcoding the object name:
*/
const person2 = {
    name: "Ali",
    greet: function () {
        console.log("Hi, my name is " + person2.name); // Hardcoded
    }
}
person2.greet(); // "Hi, my name is Ali"
const anotherPerson = {
    name: "Ahmed",
    greet: person2.greet
}
anotherPerson.greet(); // Still prints: "Hi, my name is Ali" (because you're hardcoding `person2.name`)

/* Think of `this` like saying "my" */
// Imagine you have multiple people who can say their name:
const person3 = {
    name: "Alice",
    sayHi: function () {
        console.log("Hi, I'm " + this.name);
    }
}
const person4 = {
    name: "Nora",
    sayHi: person3.sayHi
};
// Even though both are using the same function, this changes depending on who calls it.
person3.sayHi() // "Hi, I'm Alice"
person4.sayHi() // "Hi, I'm Nora"

/* Special Case: `this` in Arrow Functions */
/*
    -Arrow functions do not have their own `this`. They use the value of this from the surrounding (outer) function
    -So don’t use arrow functions when defining methods in objects
*/
const obj = {
    name: "Sam",
    greet: () => {
        console.log("Hi, I'm " + this.name); // Doesn't work
    }
};
obj.greet(); // Hi, I'm undefined
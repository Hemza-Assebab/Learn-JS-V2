/* create() Built-in Method */
/*
    -Object.create() is a built-in JavaScript method that creates a new object and sets its prototype to an existing object you provide
    -It allows you to create objects inheriting from another object
*/

/* Syntax */
/*
    Object.create(prototype, [propertiesObject])
    
    -Arguments:
        # prototype        => The object that should be the prototype of the newly created object (You can set it to an empty object or null)
        # propertiesObject => (Optional) A second object that defines new properties for the created object
*/

/* Basic Example */
const person = {
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
const student = Object.create(person);
student.name = "Hemza";
// What Happened here:
/*
    -`student` was created with `person` as its prototype
    -`student` has access to `person.greet()` because of prototype inheritance
    -`this.name` refers to `student.name`, even though the method comes from `person`
*/
student.greet(); // "Hello, my name is Hemza"

/* How is it different from regular object creation ? */
/*
    -Using Object.create() lets you:
        # Inherit from an existing object without using a constructor or class
        # Build a simple prototype chain directly
*/
const a = {};               // Inherits from `Object.prototype` (It also has properties that are accessible by `a` due to inheritance)
const b = Object.create(a); // Inherits from `a` (`b` has access to the properties of `a`)

/* Important Note */
/*
    -Object.create(null) creates an object with no prototype (Doesn't inherit from `Object.prototype`)
    -Useful when you want a "clean" dictionary object with no inherited properties (like toString, hasOwnProperty...)
*/
const obj = Object.create(null);
obj.key = "value";
console.log(obj); // {key: 'value'}

/* Example with propertiesObject */
const person2 = {
    greet: function () {
        console.log("Welcome " + this.name);
    }
}
const user = Object.create(person2, {
    name: {
        // value: Sets the actual value of the property (This means `user.name` will be "Hemza")
        value: "Hemza", // Default: undefined

        // writable: (boolean) Controls whether the property can be changed
        writable: false, // Default: false

        // configurable: (boolean) Controls whether the property can be deleted or can have its descriptor modified later
        configurable: false, // Default: false

        // enumerable: (boolean) Controls whether the property shows up in loops like for...in or Object.keys()
        enumerable: true, // Default: false
    }
});
console.log(user); // {name: 'Hemza'}
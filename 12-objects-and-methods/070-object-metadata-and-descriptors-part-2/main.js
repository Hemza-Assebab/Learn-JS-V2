/* Object Metadata and Descriptors Part 2 */

/* Object.getOwnPropertyDescriptor() */
/*
    -This method is used to retrieve the descriptor object for a specific property directly on an object
    -Meaning it tells you how the property behaves (its value, whether it's writable, enumerable, configurable...)

    -It returns an object describing the property, with keys like (value, writable, enumerable, configurable) or
     if it's an accessor property (get, set functions)

    -Why to use:
        # To inspect how a property behaves
        # To check a property's descriptors

    -Syntax: Object.getOwnPropertyDescriptor(object, property)
    -Arguments:
        # object   => The object you're checking
        # property => The name of the property whose descriptor you want
*/
// Basic Example:
const person = {
    name: "Hemza",
};
console.log(Object.getOwnPropertyDescriptor(person, "name")); // {value: 'Hemza', writable: true, enumerable: true, configurable: true}
// Example with accessor property:
const product = {
    _price: 100,
    get price() {
        return this._price + (this._price * 0.1);
    }
};
const descriptor = Object.getOwnPropertyDescriptor(product, "price");
console.log(descriptor); // {set: undefined, enumerable: true, configurable: true, get: ƒ price()}

/* Object.getOwnPropertyDescriptors() */
/*
    -This method returns all property descriptors of an object
    -Not just one but for every own property (including non-enumerable ones and accessors)
    -It returns an object where each key is a property name, and each value is that property's descriptor

    -Syntax: Object.getOwnPropertyDescriptors(object)
    -Arguments:
        # object => The object whose property descriptors you want
*/
const person2 = {
    name: "Hemza",
    age: 25,
    get greeting() {
        return "Hi, i am " + this.name;
    }
};
const descriptors = Object.getOwnPropertyDescriptors(person2);
console.log(descriptors);
// Output:
/*
    {
        "name": {
            "value": "Hemza",
            "writable": true,
            "enumerable": true,
            "configurable": true
        },
        "age": {
            "value": 25,
            "writable": true,
            "enumerable": true,
            "configurable": true
        },
        "greeting": {
            "enumerable": true,
            "configurable": true,
            get: ƒ greeting(),
            set: undefined
        }
    }
*/
// Example: Cloning with property behavior preserved
const user = {};
Object.defineProperty(user, "id", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: false,
});
const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertyDescriptors(clone));
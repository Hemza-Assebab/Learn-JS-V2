/* Object Metadata and Descriptors Part 1 */

/* Object.defineProperty() */
/*
    -This method is lets you add or modify a property on an object with detailed control over how it behaves
    -Like whether it’s writable, enumerable, or configurable

    -Syntax: Object.defineProperty(object, propertyName, descriptor)
    -Arguments:
        # object       => The object to modify
        # propertyName => The name of the property to add or change
        # descriptor   => An object that defines the property's behavior
    
    -Common Descriptors
        # value        => (Type: any)     | (Default: undefined) | The value of the property
        # writable     => (Type: boolean) | (Default: false)     | Controls whether the value be changed
        # enumerable   => (Type: boolean) | (Default: false)     | Will it show in loops like for...in or Object.keys()
        # configurable => (Type: boolean) | (Default: false)     | Can it be deleted or re-configured

    -Why use:
        # To protect or lock down properties (make them read-only, hidden, or non-deletable)
        # To add advanced behavior using getters and setters
        # To define properties dynamically with fine-grained control
*/
const user = {};
Object.defineProperty(user, "name", {
    value: "Hemza",
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(user.name);
// Object.defineProperty() with Getters and Setters
const person = {
    firstName: "Hemza",
    lastName:  "Dev",
};
Object.defineProperty(person, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName  = parts[1];
    },
    enumerable: true,
    configurable: true
});
console.log(person.fullName); // "Hemza Dev"
person.fullName = "Hemza JS";
console.log(person.fullName); // "Hemza JS"

/* Object.defineProperties() */
/*
    -This method allows you to define multiple properties (and their behavior) on an object at once using property descriptors
    -It's just like Object.defineProperty() but instead of doing one property at a time, you can define several in one go

    -Syntax:
        Object.defineProperties(targetObject, properties)
*/
const book = {};
Object.defineProperties(book, {
    title: {
        value: "Learn JS",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    author: {
        value: "Hemza",
        writable: "false",
        enumerable: true,
        configurable: false,
    },
    // Using a getter
    allInfos: {
        get: function () {
            return `Title: ${this.title} | Author: ${this.author}`;
        }
    }
});
console.log(book); // {title: 'Learn JS', author: 'Hemza'}
console.log(book.allInfos); // "Title: Learn JS | Author: Hemza"
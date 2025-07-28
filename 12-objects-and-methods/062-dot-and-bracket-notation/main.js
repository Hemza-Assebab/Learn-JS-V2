/* Dot and Bracket Notation */
// You access objects so you can read, modify or use the stored data inside of them, for example:
const person = {
    name: "Hemza",
    age: 25,
    "favorite color": "purple",
    sayHello: function () {
        console.log("Hello There !");
    }
};
// You can access the values "Hemza", 25 or "blue" using either DOT or BRACKET notation

/* Dot Notation */
/*
    -Syntax: objectName.propertyName

    -When to use:
        # Property names are valid identifiers (no spaces or special characters)
        # Property names are known in advance

    -Limitations (You can’t use dot notation with keys that):
        # Have spaces              => "favorite color"
        # Start with a number like => "1stPlace"
        # Have special characters  => "@role"

    -Example below:
*/
console.log(person.name);              // "Hemza"
console.log(person.age);               // 25
console.log(person.sayHello());        // NOTE: You must always use dot notation with object methods
// console.log(person.favorite color); // Syntax Error

/* Bracket Notation */
/*
    -Syntax: objectName["propertyName"]

    -When to Use:
        # Property name has spaces, special characters, or starts with a number
        # You need to use a variable as the property key

    -Example below:
*/
console.log(person["name"]);           // "Hemza"
console.log(person["favorite color"]); // "purple" (Valid Syntax)
// Example with a variable:
const key = "age";
console.log(person[key]); // 25

/* Example Using Both */
const book = {
  title: "JS Guide",
  "page count": 300,
  author: "John"
};
console.log(book.title);         // "JS Guide"
console.log(book["page count"]); // 300
const key2 = "author";
console.log(book[key2]);         // "John"
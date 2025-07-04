/* Variables Introduction */

/* What is a variable ? */
/*
    -A variable is a named container that holds a value in memory
    -Think of a variable like a box with a label on it. You can store something inside it, read it, or change it later
*/

/* Why use variables ? */
/*
    -Store data        => Keep values like names, scores, input...
    -Reuse values      => Use the same value in different places without repeating it
    -Change values     => Update the value as needed (like counters or form input)
    -Make code dynamic => You can build flexible, readable, and interactive code
*/

/* Declaring Variables */
/*
    -Syntax: declarationKeyword variableName = value
    -Note: You must declare variables before starting to use them
*/
var name = "Hamza";
console.log(name);
// You can decalre many variables in one line
var age = 19, country = "Germany";
console.log(age);
console.log(country);

/* Id and Global Variable */
/*
    -You can access elements in the DOM by their id attributes as global variables
    -This works because browsers auto-create global variables from id attributes
*/
// Example
/*
    <div id="container">Hello</div>
*/
container.innerHTML = "Hey there !";
/*
    -It's not recommended to use these generated global variables because:
        # It's not safe
        # May not work with modern browsers
        # It pollutes the global scope
*/

/* Advanced Information: Loosely VS Strongly Typed Language */
/*
    -A typed language controls how variables are defined and what types of data they can hold
    -There are two main categories:

    // Strongly Typed Languages
        # Variables must have a specific type
        # Type must be declared and can't change without conversion
        # Type errors are caught before the code runs (at compile time)
        # Examples: Java, C++, C#

    // Loosely Typed (Weakly Typed) Languages
        # Variables don’t need a declared type
        # You can change the type of a variable easily
        # Type checking happens at runtime, not during coding
        # JavaScript is a loosely typed (weakly typed) language, That means:
            -You don’t declare the type of a variable
            -Variables can hold any type, and change types as your code runs
*/
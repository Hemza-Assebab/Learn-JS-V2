/* Declaring Variables */

/* Declare Variables Using "var" */
/*
    -Characteristics:
        # Introduced in ES5 (before ES6)
        # Function-scoped (NOT block-scoped)
        # Can be redeclared and reassigned
        # Is hoisted to the top of its function or global scope and initialized as "undefined"

    -"var" is not recommended to use:
        # Can cause bugs due to function scoping and redeclaration
        # "var" can create unexpected behaviors, especially in loops
*/
if (true) {
    var x = 10;
}
console.log(x); // 10 (Accessible outside the block)

function test1() {
    if (true) {
        var a = 20;
    }
    console.log(a); // This will log 20 because "a" is only function scoped
}
test1(); // 20 ("a" Accessible inside of the function)
// console.log(a); // This will cause an error because "a" is function scoped and you can't access it outside of the function

var name = "Hemza";
var name = "Saaid"; // No error - redeclaration allowed

/* Declare Variables Using "let" */
/*
    -Characteristics:
        # Introduced in ES6 (2015)
        # Block-scoped (accessible only inside {} where it's defined)
        # Can be reassigned, but not redeclared in the same scope
        # You don't have to initialize it with a value
        # Is hoisted, but not initialized, so accessing before declaration gives a "ReferenceError"

    -Use "let" when:
        # You expect to change the value later
        # You need block-level scoping
*/
if (true) {
    let b = 30;
    console.log(b); // 20 ("b" Accessible inside the block where it is defined)
}
// console.log(b); // ReferenceError (Because "let" makes "b" block scoped which makes it not accessible out of the block where it's declared)

let name2 = "Ahmed";
// let name2 = "Mohamed"; Error - Already declared
name2 = "Jamal"; // Reassignment is allowed

/* Declare Constants Using "const" */
/*
    -Almost same as "let"
    -But must be initilized when declared
    -Also, when using "const" you can't reassign or redeclare the constant
    -Note: "const" only prevents reassignment of the variable itself, not changes to contents inside objects or arrays
*/
const z = 30;
// const z = 40; Error - Cannot redeclare
// z = 40; Error - Cannot reassign

const nums = [1, 2, 3];
nums.push(4);        // Allowed
nums = [1, 2, 3, 4]; // Not allowed (new array reference)
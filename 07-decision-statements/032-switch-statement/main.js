/* Switch Statement */
/*
    -The switch statement in JavaScript is used when you need to compare a single value against many possible cases
    -It’s a cleaner alternative to using many if...else if...else statements
    
    -Syntax:
        switch (expression) {
            case value1:
                // Block of code that runs when expression === value1
                break;
            case value2:
                // Block of code that runs when expression === value2
                break;
            default:
                // Block of code that runs if no case matches
        }

    -NOTE: "break" prevents the code from "falling through" to the next case
            Without "break", JavaScript continues executing the next case, even if the case matches
*/
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend");
        break;
    // NOTE: You can group multiple cases to produce one result
    case "Saturday":
    case "Sunday":
        console.log("It's weekend");
        break;
    default:
        console.log("Just another day");
}

/* When To Use ? */
/*
    -When comparing one variable against multiple fixed values
    -When (if...else if) chains become too long and less readable
*/
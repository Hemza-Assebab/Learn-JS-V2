/* Nullish Coalescing Operator */
/*
    -The nullish coalescing operator (??) in JavaScript is used to provide a default value when a variable is either "null" or "undefined"
    -Syntax:
        # let result = variable ?? defaultValue;

    -If variable is "null" or "undefined", result becomes defaultValue
    -Otherwise, result takes the value of variable
*/
let username = null;
let displayName = username || "Guest";
console.log(displayName); // "Guest" 

/*  Why Not Just Use (||) ? */
/*
    -The || (OR) operator treats falsy values (null, undefined, 0, "", false, NaN) as reasons to return the right-hand side
    -But sometimes, you only want to treat null and undefined as missing—this is where ?? is more precise
*/
let count = 0;
let result1 = count || 10; // result1 will be 10 (because 0 is a falsy value)
let result2 = count ?? 10; // result2 will be 0  (because 0 is not null/undefined)

/* When to use ? */
/*
    -Use ?? when you want to provide a default value only when the variable is null or undefined,
     not for other falsy values like 0 or empty strings
*/
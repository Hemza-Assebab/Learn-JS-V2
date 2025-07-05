/* String Syntax and Character Escape Sequences */
/*
    -Escape sequences let you insert special characters into strings that
     would otherwise break the syntax or be impossible to write directly

    -We can escape special characters using the escaping operator backslash "\"
*/

/* Escape Quotes Inside Quotes */
// console.log("Hemza "Dev""); // This will cause an erro
console.log('Hemza "Dev"');    // Use double quotes inside of single quotes
console.log("Hemza 'Dev'");    // Use single quotes inside of double quotes
console.log("Hemza \"Dev\"");  // Using a backslash "\" 
console.log('Hemza \'Dev\'');  // Using a backslash "\" 

/* Escape The Backslash Itself */
console.log("Hemza \\ Dev"); // The backslash will ignore "\" and it won't be counted as a special character anymore

/* Escape NewLine With "\" */
// console.log("Hello
//     Hemza            => This will cause and error
//     Dev");
console.log("Hello\
Hemza\
Dev"); // The "\" here escapes the NewLine

/* Create a NewLine with "\n" */
console.log("Hello\nHemza\nDev"); // This will create a NewLine after each "\n"

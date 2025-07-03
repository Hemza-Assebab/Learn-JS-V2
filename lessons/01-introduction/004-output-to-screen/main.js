/* Output To Screen */
/*
    -There are many ways to output data to screen in JS:
*/

/* Using Window Object */
/*
    -Syntax: window.alert(message)
    -It shows a pop on the screen with the given message
    -It's not recommended to use, because sometimes it ruins code execution behavior
*/
window.alert("Hello from window alert");
window.alert(2 + 2);

/* Using Document Object */
/*
    -Syntax: document.write(text/element)
    -It allows us to wrtie on the HTML document (We can write text, elements...)
    -It's deprecated and not recommended to use anymore
*/
document.write("<h1>Page Title</h1>");
document.write("Hello");

/* Using Console Object */
/*
    -Syntax: console.log(message)
    -It logs the given message in the console (Open developer tools to inspect the console)
    -Most recommended way to log messages
*/
console.log("Hello from console");
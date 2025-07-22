/* Practical Examples Using Functions */

/* Add Two Numbers */
function add(a, b) {
    console.log(a + b);
}
add(2, 3); // 5

/* Greeting Users */
function greetUsers(name, age) {
    if (age < 18) {
        console.log(`Sorry ${name} You can't access this content !`);
    } else {
        console.log(`Hello ${name}, You are welcome !`);
    }
}
greetUsers("Hemza", 18); // "Hello Hemza, You are welcome !"
greetUsers("Ahmed", 14); // "Sorry Ahmed You can't access this content !"

/* Generating Years */
function generateYears(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
generateYears(2000, 2003); // This outpusts: 2000 2001 2002 2003
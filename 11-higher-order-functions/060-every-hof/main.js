/* Every Higher Order Method */
/*
    -The every() method checks whether all elements in an array satisfy a condition provided by a callback function
    -It returns true only if every single element passes the test
    -If any element fails, it returns false

    // Important Notes:
        # It does not change the original array
        # It stops early once it finds the first element that fails
*/

/* Syntax */
/*
    array.every(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* Basic Example */
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

/* Example: Check if all users are active */
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: true },
  { name: "Eve", active: true }
];
const allActive = users.every(user => user.active);
console.log(allActive); // true

/* Example: Check if all numbers are positive */
const scores = [10, 15, 20, -4];
const allPositive = scores.every(score => score > 0);
console.log(allPositive); // false

/* Example: Check if all passwords are strong enough (length ≥ 8) */
const passwords = ["securePass", "12345678", "myPass@123"];
const allStrong = passwords.every(password => password.length >= 8);
console.log(allStrong); // true

/* Important: every() with empty arrays */
// every() on an empty array always returns true
console.log([].every(x => x > 10)); // true (vacuous truth)
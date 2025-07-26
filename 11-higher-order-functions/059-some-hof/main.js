/* Some Higher Order Method */
/*
    -The some() method tests whether at least one element in the array satisfies the condition provided in the callback function
    -It returns true if any element passes the test. Otherwise, it returns false

    // Important Notes:
        # some() stops early once it finds a match (efficient)
        # It does not modify the original array
*/

/* Syntax */
/*
    array.some(callback(currentValue, [index], [array]), [thisArg])

    -Arguments:
        # callback     => A function that will be called on each element in the array
        # currentValue => The current element being processed
        # index        => (Optional) The index of the current element
        # array        => (Optional) The original array
        # thisArg      => (Optional) Value to use as "this" when executing the callback function
*/

/* Basic Example */
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (2 and 4 are even)

/* Example: Check if any user is an admin */
const users = [
  { name: "Alice", isAdmin: false },
  { name: "Bob", isAdmin: false },
  { name: "Eve", isAdmin: true }
];
const hasAdmin = users.some(user => user.isAdmin);
console.log(hasAdmin); // true

/* Example: Check if a cart has items under $10 */
const cart = [
  { name: "Shirt", price: 20 },
  { name: "Pen", price: 2 },
  { name: "Book", price: 15 }
];
const hasCheapItem = cart.some(item => item.price < 10);
console.log(hasCheapItem); // true
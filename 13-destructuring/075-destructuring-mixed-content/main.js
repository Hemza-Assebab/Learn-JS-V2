/* Destructuring Mixed Content */

/* Some Tips */
/*
    -Always match the structure exactly (position in arrays, key names in objects)
    -You can combine default values and renaming too
    -If it's too nested or unreadable, break it into smaller destructuring steps for clarity
*/

/* Destructuring an Array of Objects */
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
const [user1, user2] = users;
console.log(user1.name); // "Alice"
console.log(user2.age);  // 30
// Further destructure individual properties
const [{name: name1}, {name: name2}] = users;
console.log(name1); // "Alice"
console.log(name2); // "Bob"

/* Destructuring an Object with Array Property */
const team = {
    teamName: "Dev Team",
    members: ["Tom", "Jerry", "Spike"]
};
const {teamName, members: [member1, member2]} = team;
console.log(teamName); // "Dev Team"
console.log(member1);  // "Tom"
console.log(member2);  // "Jerry"

/* Destructuring a Complex Nested Structure */
const response = {
    status: "success",
    data: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]
};
const {status, data: [{id: idFirst, name: nameFirst}, {id: idSecond, name: nameSecond}]} = response;
console.log(status);     // "success"
console.log(idFirst);    // 1
console.log(nameFirst);  // "Alice"
console.log(idSecond);   // 2
console.log(nameSecond); // "Bob"
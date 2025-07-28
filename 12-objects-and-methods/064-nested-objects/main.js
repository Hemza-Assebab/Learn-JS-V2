/* Nested Objects */
// A nested object is simply an object inside another object
const person = {
    name: "Hemza",
    age: 28,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    address: {
        street: "123 Main st",
        city: "Casablanca",
        country: {
            name: "Morocco",
            code: "MA"
        }
    },
    checkAvailability: function () {
        if (person.available) {
            console.log("Free for work");
        } else {
            console.log("Not free");
        }
    }
}

/* Accessing Nested Object Properties */
console.log(person.name);   // "Hemza"
console.log(person["age"]); // 28
console.log(person.skills.join(" | ")); // "HTML | CSS | JS"
console.log(person.address.city); // "Casablanca"
console.log(person["address"]["country"]["name"]); // "Morocco"

/* When to Use Nested Objects ? */
/*
    -To group related information
    -To model real-world structures
    -To handle JSON data from APIs
*/
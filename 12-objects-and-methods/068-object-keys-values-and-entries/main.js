/* Object Key, Values and Entries */
const person = {name: "Hemza", age: 25, country: "Germany"};

/* Object.keys() */
/*
    -Returns an array of the object's own enumerable property names (keys)
    -Syntax: Object.keys(object)
*/
console.log(Object.keys(person)); // ['name', 'age', 'country']

/* Object.values() */
/*
    -Returns an array of the object's own enumerable property values
    -Syntax: Object.values(object)
*/
console.log(Object.values(person)); // ['Hemza', 25, 'Germany']

/* Object.entries() */
/*
    -Returns an array of the object's own enumerable [key, value] pairs
    -Syntax: Object.entries(object)
*/
console.log(Object.entries(person)); // [["name", "Hemza"], ["age", 25], ["country", "Germany"]]
// You can loop through them like this:
for (let [key, value] of Object.entries(person)) {
    console.log(`${key} => ${value}`);
}
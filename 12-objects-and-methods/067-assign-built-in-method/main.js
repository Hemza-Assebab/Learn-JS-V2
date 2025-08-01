/* Object.assign() Built-in Method */
/*
    -Object.assign() is a built-in method that copies the enumerable own properties from one or more source objects to a target object
    -It returns the modified target object
*/

/* Syntax */
/*
    Object.assign(target, ...sources)

    -Arguments:
        # target  => The object to which properties will be copied
        # sources => One or more source objects whose properties will be copied into the target
*/

/* Basic Example */
const target = {a: 1};
const source = {b: 2, c: 3};
const result = Object.assign(target, source); // The source's properties b and c were copied into target
console.log(result); // {a: 1, b: 2, c: 3}
console.log(target); // {a: 1, b: 2, c: 3} (Same as `result`)

/* Overwriting Properties */
/*
    -If properties in the source object have the same name as ones in the target,
     they will overwrite the target's values
*/
const target2 = {name: "Hemza", age: 25};
const source2 = {age: 30, city: "Casablanca"};
Object.assign(target2, source2);
console.log(target2); // {name: 'Hemza', age: 30, city: 'Casablanca'} (`age` got overwritten)

/* Merging Multiple Sources */
const obj1 = {a: 1};
const obj2 = {b: 2};
const obj3 = {c: 3};
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }

/* Important Notes */
/*
    -Object.assign() only copies one level deep. Nested objects are still shared references
    -It also doesn't copy non-enumerable or inherited properties
*/
const obj = { nested: {a: 1} };
const copy = Object.assign({}, obj);
copy.nested.a = 100;
console.log(copy.nested.a); // 100
console.log(obj.nested.a);  // 100 (Still points to the same nested object)


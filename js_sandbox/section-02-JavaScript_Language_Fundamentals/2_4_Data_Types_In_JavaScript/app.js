/* Primitive Data Types
    # String
    # Number
    # Boolean
    # Null
    # Undefined
    # Symbols
*/

/* Reference Data Types / Objects
    # Array
    # Object Literals
    # Functions
    # Dates
    # Anything Else
*/

/* Dynamically Typed Language
    § Types are associated with values not variables.
    § The same variable can hold multiple types.
    § We do not need to specify types.
    § Most other languages are statically typed (Java, C#, C++).
    § There are supersets of JS and addons to allow static typing (TypeScript, Flow).
*/

// ###### PRIMITIVE TYPES ######

// String 
const name = "John Doe"; 
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const haskids = true;
console.log(typeof haskids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// ###### REFERENCE TYPES - Objects ######

// Array 
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

// Object literal
const address = {
    city: 'Boston', 
    state: 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);





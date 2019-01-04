const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math Object

val = Math.PI;             // 3.14159265
val = Math.E;              // 2.718281828459045
val = Math.round(2.8);     // 3 rounded down
val = Math.round(Math.PI); // 3 rounded up
val = Math.ceil(2.4);      // 3 forcing to round up
val = Math.floor(2.8);     // 2 forcing to round down
val = Math.sqrt(64);       // 8 square root
val = Math.abs(-3);        // 3 absolute number (positive vertion of it)
val = Math.pow(8, 2);      // 64 the power
val = Math.min(2,33,4,55); // 2 it'll return whatever the minimum is
val = Math.max(2,33,4,55); // 55 it'll return whatever the maximum is
val = Math.random();       // returns a random number.
val = Math.random() * 21;  // returns a random number between 0 and 20

console.log(val);


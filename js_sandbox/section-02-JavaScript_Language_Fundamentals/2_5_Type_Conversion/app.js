let val;

// ###### Number to string ######
val = 5;
val = String(5); // it'll be converted to string
val = String(4+4); // it'll calculate first and then converto to string with the value of 8

// Bool to string 
val = String(true);

// Date to string
val = String(new Date());

// Array to string 
val = String([1,2,3,4]);

// Using toString()
val = (5).toString();
val = (true).toString();

// Output
//console.log(val);
//console.log(typeof val);
//console.log(val.length);

// ###### Strings to number ######

val = Number('5');        // 5    
val = Number(true);       // 1
val = Number(false);      // 0
val = Number(null);       // 0
val = Number('hello');    // NaN - Not a Number
val = Number([1,2,3,4]);  // NaN - Not a Number

val = parseInt('100.30');   // 100
val = parseFloat('100.30'); // 100.3

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// !!! We alse have something called Type Coercion !!!

const val1 = (5).toString();
const val2 = 6;
const sum = val1 + val2;
console.log(sum);  // 56
console.log(typeof sum); // string
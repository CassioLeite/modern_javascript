// var, let, const
console.log("########## Using var ###########");
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// Init var

var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Can not start with number

// Multi word vars
var firstName = "John"; // Camel Case
var first_name = "Sara"; // snake_case
var FirstName = "Tom"; // Pascal case

// LET - Essencially runs the same of VAR
console.log("########## Using let ###########");
let lastName;
console.log(lastName);
lastName = "Doe";
console.log(lastName);
lastName = "Góes";
console.log(lastName);

// Const - It's constant (which means that you can't change its value) and you must initialize it when declared.
console.log("########## Using const ###########");
const myFullName = "Cássio";
console.log(myFullName);

// Will throw an error: 
//myFullName = "Cássio de Góes";

// In this case, although you can change the person's attribute you can't change de object after declared (its structure).

const person = {
    name: "Cássio",
    age: 27
}

console.log(person);
person.name = "Sara";
console.log(person);

// Same thing with arrays

const numbers = [1, 2, 3 , 4];
console.log(numbers);
numbers.push(5); // we can push to the array
console.log(numbers);
//numbers = [1, 2, 3, 4, 5]; // but we can't reassign it (it'll throw an error).



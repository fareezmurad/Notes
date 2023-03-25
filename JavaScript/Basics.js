// VARIABLES
let name = 'Aisyah';
console.log(name);
// Naming variable cannot be reserved keywords
// example: let, if, else
// Should be meaningful
// Cannot start with number
// Cannot contain a space or hyphen(-)
// Are case-sensitive

// CONSTANT
// Value of variable can be changed. but value of constant CANNOT.
const skillValue = 100;

// Primitives/Value Types
// 1.string 2.number 3.boolean 4.undefined 5.null

let names = 'Fareez'; //String Literal
let age = 30; //Number Literal(including float numbers)
let isApproved = false; //Boolean Literal
let firstName = undefined; //Undefined
let lastName = null; //Empty value

// Reference Types
// 1.Object 2.Array 3.Function

// 1.Objects
let person = {
  names,
  age,
};
console.log(person);

// Dot Notation
person.age = 29;
console.log(person.age);

// Bracket Notation
let selection = 'names'; //dynamic property
person[selection] = 'Fareez Murad';
console.log(person['names']);

// 2.Arrays (array size and object are dynamic)
let selectedColors = []; //Square bracket empty = empty array
selectedColors = ['red', 'blue', 'green'];
selectedColors[4] = 'cyan';
selectedColors[3] = 4;
console.log(selectedColors[3]);
// Each value has index. This will call based on index value.

// 3.Funtions

// Performing a task

// Declaration of function
// Can have multiple parameter. separate using a comma
function greet(names, lastNames) {
  // body of the function
  console.log('hello ' + names + ' ' + lastNames);
}
// Call the function
greet('fareez', 'murad');
greet('syira', 'lokman');
// 'fareez' is an argument to the greet function and name is a parameter of the greet function
// Parameter=in square bracket at the time of declaration
// Argument=actual value of supplay to that parameter

// Calculating a value
function square(number) {
  return number * number; //return=return the value to whoever call it.
}
let number = square(3); //or console.log(square(3));
console.log(number);

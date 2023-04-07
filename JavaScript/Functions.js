// FUNCTION DECLARATIONS VS EXPRESSIONS
// Function Declaration
function walk() {
  console.log('walk');
}

// Anonymous Function Expression
let run = function () {
  console.log('run');
};

run();

// Name Function Expression
let joggging = function jog() {
  console.log('jog');
};

joggging();

// HOISTING
// Hoisting is the process of moving function declarations to the top of the file.
// This is done automatically by the javascript engine.

// Function Declaration
//  Can call function above the function declaration
walk();

function walk() {
  console.log('walk');
}

// Function Expression
// Cannot call function above the function expression
// Same goes to other variables. function expression act like variables
run();

let run = function () {
  console.log('run');
};

// ARGUMENTS
function some(a, b) {
  return a + b; // 1 + undefined
}

console.log(some(1)); // NaN

// Flexible arguments
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// REST OPERATOR
// Rest operator refer `...` (3 dots) in parameter of a function.
// When we apply rest operator to a parameter of a function, we can pass varying number of arguments and the rest operator will take all of them and put them in an array.
// Rest operator must be last parameter in function parameter. SO we cannot have parameters after rest operator.
// Not to confused with spread operator.

function sum(discount, ...prices) {
  const totalPrices = prices.reduce((a, b) => a + b);
  return totalPrices * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// DEFAULT PARAMETERS
// function interest(principle, rate, years) {
//   rate = rate || 3.5; // If arguments is now supply, the default value will be 3.5
//   years = years || 5; // Default value for year arguments is 5.
//   return ((principle * rate) / 100) * years;
// }

// console.log(interest(10000));

// or
// We can supply arguments value direcly in the parameter of a function.
// Once you give default value in parameter, you should give all the parameters after that a default value.

function interest(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000));

// GETTERS AND SETTERS
// Example:
// const person = {
//   firstName: 'Fareez',
//   lastName: 'Murad',
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };

// Template literal
// console.log(`${person.firstName} ${person.lastName}`);

// Add template literal as a method in person object and simply call the method for cleaner code.
// console.log(person.fullName());

// Getters => access properties
// Setters => change (mutate) them

// simply add `get` keyword before the method in an object
// `set` method is to change the properties of an object
// `set` method need a parameter.
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' '); // Split the value by looking for `'(space)'`
    this.firstName = parts[0]; // value with index of [0] will be the firstName
    this.lastName = parts[1]; // value with index of [1] will be the lastName
  },
};

person.fullName = 'Novac Djokovic';

console.log(person.fullName); // With getter, you can drop the function bracket to call the methods of an object.

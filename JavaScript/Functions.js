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
function interest(principle, rate, years) {
  rate = rate || 3.5; // If arguments is now supply, the default value will be 3.5
  years = years || 5; // Default value for year arguments is 5.
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000));

// or
// We can supply arguments value direcly in the parameter of a function.
// Once you give default value in parameter, you should give all the parameters after that a default value.

function interest(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000));

// GETTERS AND SETTERS
// Example:
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

// Template literal
console.log(`${person.firstName} ${person.lastName}`);

// Add template literal as a method in person object and simply call the method for cleaner code.
console.log(person.fullName());

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

// TRY AND CATCH (ERROR HANDLING)
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string'); // Throw error if value is other than a string.
    const parts = value.split(' ');
    if (parts !== 2) throw new Error('Enter first and last name.'); // Throw error if value is less or more than 2 value.
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// `try...catch` statement is comprised of a `try` block and either a `catch` block, a `finally` block, or both. The code in the `try` block is executed first, and if it throws an exception, the code in the `catch` block will be executed. The code in the `finally` block will always be executed before control flow exits the entire construct.
try {
  person.fullName = ''; // try statements
} catch (e) /* (Exception variabel) */ {
  alert(e); // catch statements
}

// person.fullName = 'Novak Djokovic';
// If we supply a value other than `string`, you get an error.
// Because split method only take a string as arguments.

console.log(person);

// LOCAL VS GLOBAL SCOPE

// `const` and `let` are limited to the block/curly braces. It cannot be accessible outside the curly braces.
function start() {
  const message = 'hi'; // this const is local scope which is cannot be accessible outside of this function.
}
console.log(message); // error. const not defined

const color = 'red'; // While this const is global scope because there is no block to contain this variable. So it can be accessible from any part of this javascript file.
// Sidenote: Try to avoid defining global variable, because it can be access on the entire javascript file and can lead to bug.

// LET vs VAR

// 1st issue with `var`
function start() {
  for (let i = 0; i < 5; i++) console.log(i);
  console.log(i);
  /* Error. `i` is not defined. 
  Because i is not accessible outside for loop block.
  But if you replace `let` to `var` in for loop block, `i` will be accessible outside of the for loop block
  `var` is not limited to the block in which it's defined.
  But it is limited to the function in which it's defined */
}

start();

// Before ES6 (ES2015), `var` is the only way to declare a variable.
// `var` => function-scoped variables.
// After ES6 release:
// `let`, `const` => block-scoped variables.

// 2nd issue with `var`
var color = 'red';
// if `var` declare outside of a function, this create global variable and attaches that global variable to the window object in the browser.
// It also will affect third party library with the same variable's name.
let age = 29;
// `let` on other hand will not attaches to the global variable

// THE THIS KEYWORD
// `this` is referencing the OBJECT THAT IS EXECUTING THE CURRENT FUNCTION.

// If the function is part of the object: method => obj (`this` referencing the obj itself)
// if the function is a regular function: function => global obj (window obj, global node)

const video = {
  title: 'a',
  play() {
    console.log(this); // `this` referencing the `video` obj in this case.
  },
};

// `video.stop` technically a method in `video` obj. So `this` keyword still referencing the obj itself.
video.stop = function () {
  console.log(this);
};

// `playVideo` this by default is referencing global obj
function playVideo() {
  console.log(this);
}

video.play(); // {title: 'a', play: f, stop: f}
video.stop(); // {title: 'a', play: f, stop: f}
playVideo(); // window obj

const videos = {
  title: 'Just a Title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
      // `this.title` is undefined because `this` in this case were contain inside a `forEach` callback function. So it referencing normal function which is represent a global window obj.
      // The solution for this is adding 2nd parameter in forEach method. We can supply `this` as a 2nd arguments which will referencing the `videos` obj.
    });
  },
};

videos.showTags();

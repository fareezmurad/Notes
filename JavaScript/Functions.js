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

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

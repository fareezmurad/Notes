# Basics of JavaScript

## Variables

- `let` is used to declare a variable.
- The name of the variable should not be a reserved keyword (e.g. `let`, `if`, `else`).
- The name of the variable should be meaningful and cannot start with a number or contain a space or hyphen (-).
- Variables are case-sensitive.

Example:

```js
let name = 'Aisyah';

console.log(name);
```

## Constants

- `const` is used to declare a constant.
- The value of a variable can be changed, but the value of a constant cannot.

Example:

```js
const skillValue = 100;
```

## Primitives/Value Types

1. string
2. number
3. boolean
4. undefined
5. null

Examples:

```js
let names = 'Fareez'; //string literal
let age = 30; //number literal (including float numbers)
let isApproved = false; //boolean literal
let firstName = undefined; //undefined
let lastName = null; //empty value
```

## Reference Types

1. Object
2. Array
3. Function

### Objects

- Objects are declared using curly braces `{}`.
- Object properties can be accessed using dot notation or bracket notation.
- Bracket notation can be used to access properties dynamically.

Example:

```js
let person = {
  names,
  age,
};

console.log(person); // output: { names: 'Fareez', age: 30 }

// Dot notation
person.age = 29;

console.log(person.age); // output: 29

// Bracket notation
let selection = 'names'; // dynamic property
person[selection] = 'Fareez Murad';

console.log(person['names']); // output: 'Fareez Murad'
```

### Arrays

- Arrays are declared using square brackets `[]`.
- The size of an array is dynamic.
- Array elements can be accessed using their index.

Example:

```js
let selectedColors = []; //empty array
selectedColors = ['red', 'blue', 'green'];
selectedColors[4] = 'cyan';
selectedColors[3] = 4;

console.log(selectedColors[3]); // output: 4
```

### Functions

- Functions are declared using the `function` keyword.
- Functions can take multiple parameters separated by commas.
- A function can perform a task or calculate a value using the `return` keyword.

Example:

```js
// Performing a task
function greet(names, lastNames) {
  console.log('hello ' + names + ' ' + lastNames);
}
greet('fareez', 'murad');
greet('syira', 'lokman');

// Calculating a value
function square(number) {
  return number * number;
}
let number = square(3);
console.log(number); // output: 9
```

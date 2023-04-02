# Control Flow in JavaScript

Control flow in JavaScript refers to the order in which statements and functions are executed in a program. The control flow of a program is determined by the program's control structures, which dictate the conditions under which statements and functions are executed.

## Conditional Statement

### If and Else

In JavaScript, `if` and `else` statements are used for control flow, where different paths of execution can be taken based on whether a particular condition is true or false. `if` statements allow a program to execute a block of code only if a particular condition is true, while `else` statements provide an alternative block of code to execute when the condition is false.

The `if` statement syntax in JavaScript is as follows:

```js
if (condition) {
  // code to execute if the condition is true
}
```

If the condition is false, the code inside the block will be skipped. The `else` statement can be added after the `if` statement to provide an alternative block of code to execute if the condition is false:

```js
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
```

Multiple `else if` statements can also be used to check multiple conditions, as shown in the example code.

```js
let hour = 13;

if (hour >= 6 && hour < 12) {
  console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening!');
}
```

In this example, if the value of `hour` is greater than or equal to 6 and less than 12, the message "Good morning!" will be logged to the console. If the value of `hour` is greater than or equal to 12 and less than 18, the message "Good afternoon!" will be logged. If neither of these conditions are true, the message "Good evening!" will be logged.

### Switch and Case

The `switch` statement in JavaScript is a decision-making statement that is used as an alternative to `if-else` statement. It evaluates an expression and matches it to one of the cases listed in the statement. When a match is found, the statements inside that case are executed.

```js
switch (expression) {
  case value1:
    // code block to be executed if expression matches value1
    break;
  case value2:
    // code block to be executed if expression matches value2
    break;
  ...
  default:
    // code block to be executed if expression doesn't match any of the above cases
}
```

1. Using `switch` statement to determine user role

```js
let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator');
    break;
  default:
    console.log('Unknown User');
}
```

2. Using `if-else` statement to determine user role (equivalent to the previous example)

```js
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');
```

## For Loop

A `for` loop is used to repeatedly run a block of code until a condition is met. The loop has three parts, an initial expression, a condition, and an increment expression, separated by semicolons.

Syntax:

```js
for (initialExpression; condition; incrementExpression) {
  statement;
}
```

Example:

```js
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log('FOR LOOP' + i);
}
```

This code will run the `console.log()` statement 3 times with the values of `1`, `3`, and `5`.

## While Loop

A `while` loop is used to repeatedly run a block of code while a certain condition is true.

Syntax:

```js
while (condition) {
  statement;
  incrementExpression;
}
```

Example:

```js
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log('WHILE LOOP' + i);
  i++;
}
```

This code will run the `console.log()` statement 3 times with the values of `1`, `3`, and `5`.

## Do-While Loop

A `do-while` loop is similar to the `while` loop, but the block of code is executed at least once even if the condition is false.

Syntax:

```js
do {
  statement;
  incrementExpression;
} while (condition);
```

Example:

```js
let j = 0;
do {
  if (j % 2 !== 0) console.log('DO LOOPS' + j);
  j++;
} while (j <= 5);
```

This code will run the `console.log()` statement 3 times with the values of `1`, `3`, and `5`.

## Infinite Loop

An infinite loop is a loop that runs indefinitely and doesn't stop unless you terminate the program. You should avoid creating infinite loops as they can crash your browser or computer.

Example:

```js
let i = 0;
while (i < 5) {
  console.log(i);
}
```

This code will run indefinitely as the increment expression is not included in the loop, causing the value of `i` to remain 0 and always less than 5.

## FOR IN LOOP

- It is used to iterate over the properties of an object.
- It is not ideal to use for iterating over arrays.
- The syntax is `for (let key in object) { // statement }`.
- `key` is a variable that represents the property names of the object.
- We can access the value of the properties using either dot notation or bracket notation.

```js
const person = {
  names: 'Fareez',
  age: 29,
};

for (let key in person) {
  console.log(key, person[key]);
}
// Output: names Fareez, age 29

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index, colors[index]);
}
// Output: 0 red, 1 green, 2 blue
```

## FOR OF LOOP

- It is used to iterate over the elements/items in an array.
- It cannot be used to iterate over object properties.
- The syntax is `for (let element of array) { // statement }`.
- `element` is a variable that represents the current element in the array.

```js
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
// Output: red, green, blue
```

## BREAK and CONTINUE

The `break` and `continue` statements are used to control the flow of loops in JavaScript. The `break` statement is used to exit a loop immediately, while the `continue` statement is used to skip the current iteration and move to the next one.

```js
let a = 0;
while (a <= 20) {
  if (a === 9) break; // Stop the loop immediately when a is equal to 9.
  if (a % 2 === 0) {
    a++;
    continue; // Skip the current iteration and move to the next one when the number that divides by 2 has no remainder.
  }
  console.log(a);
  a++;
}
```

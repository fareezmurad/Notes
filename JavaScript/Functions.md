# Function in JavaScript

## Function Declarations vs Expressions

Function declarations and function expressions are two ways to define functions in JavaScript.

### Function Declaration

A function declaration is a statement that declares a function with a specified name, function body, and parameters (if any). The function can be called anywhere in the code, including before its declaration.

Examples:

```js
function walk() {
  console.log('walk');
}
walk(); // Output: 'walk'
```

### Anonymous Function Expression

An anonymous function expression is a function that is assigned to a variable or property without a specified name. It can be called only after its definition.

Examples:

```js
let run = function () {
  console.log('run');
};
run(); // Output: 'run'
```

### Named Function Expression

A named function expression is a function that is assigned to a variable or property with a specified name. It can be called only after its definition.

Examples:

```js
let jogging = function jog() {
  console.log('jog');
};
jogging(); // Output: 'jog'
```

## Hoisting

Hoisting is a process in JavaScript where function and variable declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that even if a function is declared at the bottom of a file, it can be called before it appears in the code. However, this does not apply to function expressions and variables declared using the `let` or `const` keywords, which are not hoisted.

Examples:

- Function Declaration: Function declarations are hoisted, so they can be called before they are defined.

```js
walk();

function walk() {
  console.log('walk');
}
```

- Function Expression: Function expressions are not hoisted, so they cannot be called before they are defined.

```js
run(); // TypeError: run is not a function

let run = function () {
  console.log('run');
};
```

## Arguments

In JavaScript, functions can accept arguments, which are values that can be passed into the function for it to use.

The function `sum` accepts two arguments `a` and `b`. However, when we call the function with only one argument `1`, the second argument `b` is not defined and has a value of `undefined`. As a result, the function returns `NaN` (Not a Number) when it tries to add `a` and `b`.

- Using arguments in a function:

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(1)); // NaN
console.log(sum(1, 2)); // 3
```

The function `sum` uses the `arguments` object to accept any number of arguments. The `arguments` object is an array-like object that contains all the arguments passed to the function. The function uses a `for` loop to iterate over the `arguments` object and adds up all the values to get the total.

- Using the `arguments` object:

```js
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Rest Operator

The rest operator in JavaScript is represented by three dots (`...`) in a function parameter. The rest operator allows us to pass a varying number of arguments to a function and store all of them in an array. The rest operator must be the last parameter in the function definition, and it is used to replace the use of the `arguments` object. It is important to note that the rest operator only gathers the arguments that were not assigned to other parameters in the function.

Examples:

```js
function sum(discount, ...prices) {
  const totalPrices = prices.reduce((a, b) => a + b);
  return totalPrices * (1 - discount);
}

console.log(sum(0.1, 20, 30)); // Output: 45
console.log(sum(0.2, 10, 20, 30, 40)); // Output: 80
```

## Default Parameters

Default parameters in JavaScript allow us to set a default value for a parameter if it is not passed to the function or if it is undefined. In the absence of default parameters, we often use logical OR operators to check if a parameter is undefined and assign a default value to it.

Examples:

- Using logical OR operators

```js
function interest(principle, rate, years) {
  rate = rate || 3.5; // If argument is not supplied or is undefined, default value of 3.5 is used
  years = years || 5; // If argument is not supplied or is undefined, default value of 5 is used
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000)); // Output: 1750
```

- Using default parameters

```js
function interest(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000)); // Output: 1750
```

## Getters and Setters

JavaScript objects can have properties that are accessed or modified using getters and setters. Getters are used to access the properties of an object while setters are used to modify them.

A getter is a method that retrieves a value from an object property, while a setter is a method that sets the value of an object property.

Getters and setters are defined using the `get` and `set` keywords followed by a method name, respectively.

Examples:

- In the first example, we have an object `person` with a `fullName()` method that concatenates `firstName` and `lastName` properties of the object:

```js
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.fullName()); // Must have parathesis to call object's method.
```

- In the second example, we define the `fullName` property as a getter method, which returns the full name of the person:

```js
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.fullName); // You can drop the paranthesis to call object's method if use GETTER METHOD
```

- In the third example, we define a `fullName` property as a setter method that sets the `firstName` and `lastName` properties of the `person` object:

```js
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = 'Novac Djokovic';
console.log(person.fullName); // output: Novac Djokovic
```

## Try and Catch (Error Handling)

`try...catch` statement is a control flow statement that helps to handle runtime errors, by catching and handling those errors. It consists of a `try` block and either a `catch` block, a `finally` block, or both. The code inside the `try` block will be executed first, and if it throws an exception, the code in the `catch` block will be executed. The code in the `finally` block will always be executed before control flow exits the entire construct.

Syntax:

```js
try {
  // code that may cause an error
} catch (errorVariable) {
  // code to handle the error
} finally {
  // optional code that is always executed
}
```

Examples:

- In the example code below, a `try...catch` block is used to handle errors that may occur when setting the `fullName` property of the `person` object. The `set fullName` method contains an `if` statement that checks if the `value` parameter is not a string or if the `value` parameter is not consisting of two parts, separated by a space. If the value is not a string or does not have two parts, an error will be thrown using the `throw` statement.

```js
const person = {
  firstName: 'Fareez',
  lastName: 'Murad',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string'); // Throw error if value is other than a string.
    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter first and last name.'); // Throw error if value is less or more than 2 value.
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = ''; // try statements
} catch (e) {
  alert(e); // catch statements
}

console.log(person);
```

If the `value` parameter of the `fullName` property is not a string or does not have two parts, an error will be thrown and caught by the `catch` block. The error message will be displayed in an alert box.

If the `try` block executes without throwing an exception, the `catch` block will be skipped.

## Local vs Global Scope

In JavaScript, the scope determines the accessibility of variables. There are two types of scopes: local and global. Variables declared with `const` and `let` inside a function or a block are considered to be in the local scope, and they cannot be accessed outside of the function or block. On the other hand, variables declared outside a function or block are in the global scope, and they can be accessed from anywhere in the code.

Examples:

- Local Scope:

```js
function start() {
  const message = 'hi'; // this const is local scope which is cannot be accessible outside of this function.
}
console.log(message); // error. const not defined
```

- Global Scope:

```js
const color = 'red'; // While this const is global scope because there is no block to contain this variable. So it can be accessible from any part of this JavaScript file.
```

> **Sidenote:** It's recommended to avoid defining global variables, as it can lead to bugs and make it harder to maintain the code.

## `let` vs `var`

In JavaScript, `let` and `var` are used to declare variables. They have some differences in the way they handle variable scope and hoisting.

1. Scope:<br>
   In JavaScript, variables declared with `var` are function-scoped, while variables declared with `let` are block-scoped. This means that `var` is not limited to the block in which it's defined, but it is limited to the function in which it's defined. On the other hand, `let` is only accessible within the block in which it's defined.

Example:

```js
function start() {
  for (let i = 0; i < 5; i++) console.log(i);
  console.log(i); // ReferenceError: i is not defined
}

start();
```

2. Hoisting:<br>
   Variables declared with `var` are hoisted to the top of their scope and initialized with the value of `undefined`. This means that you can access a variable before it's declared. However, this can lead to confusion and bugs. Variables declared with `let` and `const` are hoisted as well, but they are not initialized until they are declared. This means that you cannot access a variable before it's declared.

Example:

```js
console.log(color); // undefined
var color = 'red';
```

In the above example, `var` declares a global variable `color` and attaches it to the window object in the browser. This can cause naming conflicts with other libraries that use the same variable name.

```js
console.log(age); // ReferenceError: age is not defined
let age = 29;
```

In the above example, `let` declares a block-scoped variable `age`, which is not attached to the global object.

## The `this` keyword

In JavaScript, `this` keyword refers to the object that is executing the current function. If the function is a part of an object, then `this` keyword will refer to that object. However, if the function is a regular function, `this` keyword will refer to the global object, which is the `window` object in the browser and `global` object in Node.js.

Examples:

```js
const video = {
  title: 'a',
  play() {
    console.log(this); // `this` referencing the `video` obj in this case.
  },
};

video.play(); // {title: 'a', play: f}
```

In this example, `this` keyword is used inside a method `play()` of an object video. Thus, `this` will refer to the `video` object.

```js
function playVideo() {
  console.log(this);
}

playVideo(); // window obj
```

In this example, `this` keyword is used inside a regular function `playVideo()`. Therefore, `this` will refer to the `global` object, which is `window` object in this case.

```js
const videos = {
  title: 'Just a Title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // `this.title` is undefined because `this` inside a `forEach` callback function is referencing a normal function which represents the `global` object.
    });
  },
};

videos.showTags(); // undefined a, undefined b, undefined c
```

In this example, `this` keyword is used inside a method `showTags()` of an object `videos`. However, inside the `forEach()` method, `this` keyword is referencing the `global` object instead of the `videos` object. Therefore, `this.title` will be undefined. To solve this problem, we can pass the reference of the `videos` object explicitly as a second argument to the `forEach()` method like this:

```js
const videos = {
  title: 'Just a Title',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // `this` keyword now references the `videos` object.
  },
};

videos.showTags(); // Just a Title a, Just a Title b, Just a Title c
```

## Changing The Value of `this`

The `this` keyword in JavaScript can be a bit confusing, especially when dealing with methods and callbacks. Sometimes we need to change the value of `this` to point to a different object. There are a few ways to do this in JavaScript.

1. Use a `self` variable to capture the value of `this` and use it in a callback function.

```js
const video = {
  title: 'd',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};
```

2. Use `call()`, `apply()`, or `bind()` to set the value of `this` for a function.

```js
function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'Fareez' }); // this will represent the new object
playVideo.apply({ name: 'Fareez' }); // same as above method
// The difference between `apply` and `call` only about passing arguments.
// with `call` you can supply arguments like normal.
// with `apply` you have to pass the arguments as an array.
playVideo.bind({ name: 'Fareez' }); // returns a new function with `this` permanently bound to the specified object

const video = {
  title: 'd',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this) // Permanently bind `this` to `video` obj.
    );
  },
};
```

3. Use arrow functions, which inherit the `this` value of their parent context.

```js
const video = {
  title: 'd',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
```

> Note that arrow functions can only be used in certain situations, such as in methods or callback functions that do not require their own `this` value. In other situations, you may need to use one of the other solutions.

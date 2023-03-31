# Basics of JavaScipt

## 1. VARIABLES

Initialize a variable

```js
let name = 'Aisyah';
```

View output on the console

```js
console.log(name);
```

Naming variable cannot use reserved keywords

- Example: let, if, else
- Should be meaningful
- Cannot start with number
- Cannot contain a space or hyphen(-)
- Are case-sensitive

<br>

## 2. CONSTANT

Value of variable can be changed. but value of constant **CANNOT**.

```js
const skillValue = 100;
```

<br>

## 3. PRIMITIVES (VALUE TYPE)

```js
let names = 'Fareez'; // String (String Literal)

let age = 30; // Number (Number Literal(including float numbers))

let isApproved = false; // Boolean (Boolean Literal)

let firstName = undefined; // Undefined

let lastName = null; // Null (Empty value)
```

<br>

## 4. REFERENCE TYPE

### Object

```js
let person = {
  names,
  age,
};

console.log(person);
```

Access **object's** properties using **Dot Notation**

```js
person.age = 29;

console.log(person.age);
```

Access **object's** properties using **Bracket Notation**

```js
let selection = 'names'; //dynamic property
person[selection] = 'Fareez Murad';

console.log(person['names']);
```

<br>

### Arrays

Array size and object are **dynamic**. The properties of an array can be **add, change or deleted**.

```js
let selectedColors = []; //Square bracket empty = empty array
selectedColors = ['red', 'blue', 'green'];
selectedColors[4] = 'cyan';
selectedColors[3] = 4;

console.log(selectedColors[3]); // Each value has index. This will call based on index value.
```

<br>

### Funtions

Use for performing a task. Function can have multiple parameter. It is separated using a comma.<br><br>
Declaration of function:

```js
function greet(names, lastNames) {
  // body of the function
  console.log('hello ' + names + ' ' + lastNames);
}
```

Calling the function:

```js
greet('fareez', 'murad');
greet('syira', 'lokman');
```

<br>

Example of function to calculate a value:

```js
/* In this function: number is the parameter, while 3 is the argument */

function square(number) {
  return number * number; //return = give the value to whoever call it.
}
let number = square(3);

console.log(number);
```

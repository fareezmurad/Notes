# Objects in JavaScript

## Basics

- In JavaScript, objects are collections of key-value pairs and can be created using the object literal syntax.
- Encapsulating related properties and functions inside an object is a fundamental principle of Object-Oriented Programming (OOP).
- Objects can communicate with each other to perform specific functionality in OOP.
- Methods are functions that are part of an object and can be accessed using the dot notation.

Examples:

```js
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw() {
    console.log('draw');
  },
};

circle.draw(); // Output: 'draw'
```

In the example code, we have created an object `circle` that contains related properties such as `radius`, `location`, and `isVisible`, and a method `draw()`. The `draw()` method is a function that is a part of the `circle` object, and it can be accessed using the dot notation (`circle.draw()`). This example demonstrates how to encapsulate related properties and functions inside an object to create a cohesive and reusable code.

## Factory Functions

- Factory functions are functions that produce objects.
- The purpose of factory functions is to avoid code duplication and make it easier to maintain code.
- Factory functions are useful for creating multiple objects that have similar properties and methods.

Examples:

```js
// Example of a factory function for creating circles
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

// Creating objects using the factory function
const circle1 = createCircle(1);
const circle2 = createCircle(2);

// Calling the draw method on the objects
circle1.draw(); // output: 'draw'
circle2.draw(); // output: 'draw'
```

In the example, `createCircle` is a factory function that takes in a `radius` parameter and returns an object with a `radius` property and a `draw` method. Two circle objects are created using this factory function and the `draw` method is called on each object.

## Constructor Functions

- Constructor Functions are a type of function that is used to create objects in JavaScript.
- They are written using **PASCAL Notation**, which means the first letter of every word is capitalized.
- The purpose of a constructor function is to define an object type, which can then be used to create multiple objects.
- The `this `keyword is used inside a constructor function to refer to the object being created.
- The `new` keyword is used to create a new instance of the object.
- When the constructor function is called with the `new` keyword, a new object is created with the properties and methods defined in the constructor function.

Examples:

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const circle3 = new Circle(1);
console.log(circle3);
```

The code demonstrates how to create an object using a constructor function called `Circle`. In this case, the `Circle` object is created by passing a `radius` value of 1. Inside the `Circle` function, the `this` keyword refers to the object being created. The `radius` property of the object is set to the `radius` parameter passed to the `Circle` function. The `draw` method of the object is defined inside the `Circle` function as well.

To create a new instance of the `Circle` object, the `new` keyword is used followed by the constructor function name and passing in the required parameters. In this case, a new instance of the `Circle` object is created with a `radius` value of 1 and assigned to the `circle3` variable. Finally, the `circle3` object is logged to the console.

> **Note:** Both Constructor Functions and Factory Functions can be used to create objects in JavaScript. However, constructor functions allow you to create objects with a shared set of methods and properties, whereas factory functions do not.

## Dynamic Nature of Objects

- In JavaScript, we can add or remove properties of an object dynamically.
- Once an object is created, its properties and methods can be changed.
- We cannot reassign a constant variable that is an object, but we can modify its properties and methods.
- The `delete` keyword is used to remove properties or methods of an object.

Examples:

```js
const rectangle = {
  corner: 4,
};

rectangle.color = 'red';
rectangle.draw = function () {};

console.log(rectangle); // { corner: 4, color: 'red', draw: [Function] }

delete rectangle.color;
delete rectangle['draw'];

console.log(rectangle); // { corner: 4 }
```

In the code, a `rectangle` object is created with an initial property `corner`. Later, we add a property `color` and a method `draw` to the `rectangle` object. After that, the `delete` keyword is used to remove the `color` property and the `draw` method. Finally, the `console.log()` method is used to show the updated `rectangle` object.

## Constructor Property

The constructor property is a built-in property in JavaScript that is available on every object. This property allows you to reference the function that was used to create an object. Here are some key points to keep in mind about the constructor property:

- Every object in JavaScript has a constructor property.
- The constructor property is a reference to the function that was used to create an object.
- The constructor property is automatically created and updated when an object is created using a constructor function.
- The constructor property can be used to check the type of an object, because it references the function used to create the object.

Examples:

```js
function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(5);

console.log(circle.constructor); // Output: [Function: Circle]
```

In this example, we have a constructor function called `Circle` that creates `circle` objects with a given `radius`. We create a new `circle` object using the `new` keyword and passing in a `radius` value of 5. We then use the constructor property to check the type of the `circle` object, which outputs `[Function: Circle]`.

The constructor property is useful for checking the type of an object, because it provides a reference to the function used to create the object. This can be helpful in situations where you need to check the type of an object, or when you need to create new objects of the same type.

## Functions are objects

- In JavaScript, functions are objects and they can have properties and methods like any other object.
- Functions can be defined using function expressions or function declarations.
- Functions created with a function declaration are hoisted to the top of the scope, while those created with function expressions are not.
- Functions can be used as arguments to other functions, or returned from functions as values.
- Functions can also have their own properties and methods.

Examples:

```js
// Example of function declaration
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };
}

// Example of function expression
const square = function (side) {
  this.side = side;
  this.getArea = function () {
    return this.side * this.side;
  };
};

// Example of using a function as an argument
function displayArea(getAreaFunc) {
  const area = getAreaFunc();
  console.log(area);
}

const myCircle = new Circle(5);
const mySquare = new square(4);

displayArea(myCircle.getArea); // Outputs: 78.53981633974483
displayArea(mySquare.getArea); // Outputs: 16

// Example of adding a property to a function
square.description = 'This is a square object.';
console.log(square.description); // Outputs: This is a square object.
```

- The code defines two objects using a function declaration and a function expression respectively.
- Both objects have properties and methods defined on them.
- The `displayArea` function takes a function as an argument and calls it to get the area of a shape.
- The `getArea` method of each object is passed as an argument to the `displayArea` function.
- The `square` function has a property called `description` added to it.
- The `description` property is accessed using dot notation and printed to the console.

## Value vs Reference Types

In JavaScript, there are two types of data types: value types (primitive) and reference types. Primitive types include Number, String, Boolean, Symbol, Undefined, and Null, while reference types include Objects, Functions, and Arrays. The difference between these two types of data is how they are copied and stored in memory.

In JavaScript, primitive types are copied by their value, whereas reference types are copied by their reference. When a primitive value is assigned to a variable, a new copy of that value is created in memory. If we change the value of that variable, it will not affect any other variable that has a copy of that value.

On the other hand, reference types do not create a new copy of the object when assigned to a variable. Instead, the variable holds a reference (a pointer) to the object stored in memory. When we assign a reference type to a new variable, both variables point to the same object in memory. Therefore, if we modify the object through one variable, it will also be reflected in the other variable that references the same object.

Examples:

1. Primitive Types

```js
let a = 10; // Initialize a = 10
let b = a; // Initialize b = a. b = 10

a = 20; // Reassign a = 20
/* 
Current value:
a = 20
b = 10
*/
```

In this example, we can see that when we assigned the value of `a`to `b`, it created a new copy of the value in memory. So, when we reassigned the value of `a` to 20, it did not affect the value of `b`.

2. Reference Types

```js
let c = { value: 10 }; // Initialize value = 10
let d = c; // Initialize property of d = c. d.value = 10

c.value = 20; // Reassign value = 20.
/*
Current value:
c = { value: 20}
d = { value: 20}
*/
```

In this example, we can see that when we assigned the object `c` to `d`, it did not create a new copy of the object. Instead, both `c` and `d` point to the same object in memory. Therefore, when we reassigned the value of `c.value` to 20, it also updated the value of `d.value` because both variables reference the same object in memory.

> It's important to understand the difference between value and reference types in JavaScript because it can affect the way we write our code. If we pass a reference type to a function and modify it inside the function, the changes will be reflected outside the function. This can cause unexpected behavior in our code, especially in larger applications. Therefore, it's important to be mindful of the types of data we are working with and how they are copied and stored in memory.

## Enumerating Properties of an Object

In JavaScript, we can use various methods to iterate over the properties of an object. One of the most common methods is using a `for...in` loop. This loop allows us to loop over all the properties and methods of an object.

However, we cannot use the `for...of` loop on an object directly because an object is not iterable. To loop over an object using `for...of`, we can use methods such as `Object.keys()` or `Object.entries()`.

Examples:

1. Using a `for...in` loop to enumerate object properties:

```js
const square = {
  corner: 4,
  draw() {
    console.log('draw square');
  },
};

for (let key in square) {
  console.log(key, square[key]);
}
```

Output:

```js
corner 4
draw function() { console.log('draw square'); }
```

2. Using `Object.keys()` to enumerate object properties:

```js
const square = {
  corner: 4,
  draw() {
    console.log('draw square');
  },
};

for (let key of Object.keys(square)) {
  console.log(key);
}
```

Output:

```js
corner;
draw;
```

3. Using `Object.entries()` to enumerate object properties:

```js
const square = {
  corner: 4,
  draw() {
    console.log('draw square');
  },
};

for (let entry of Object.entries(square)) {
  console.log(entry);
}
```

Output:

```js
['corner', 4][
  ('draw',
  function draw() {
    console.log('draw square');
  })
];
```

4. Checking if a property exists in an object:

```js
const square = {
  corner: 4,
  draw() {
    console.log('draw square');
  },
};

if ('radius' in square) {
  console.log('yes');
} else {
  console.log('No');
}
```

Output:

```
No
```

> **Notes:**
>
> - The `for...in` loop also iterates over properties inherited from the object's prototype chain.
> - To only loop over an object's own properties (not inherited ones), we can use the `hasOwnProperty()` method.

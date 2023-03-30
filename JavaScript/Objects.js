// BASICS
// Object are collections of key value pairs. Also known as Object Literal Syntax
// If we have properties that are highly related, we want to encapsulate them inside of an objects

// Example of circle value

let radius = 1;
let x = 1;
let y = 2;

// All these variable are highly related. They represent a cicle.
// Better approach is put these variables inside of an object. 

// This is called Object Oriented Programming (OOP)
// Collection of an object that talk to each other to perform some functionality.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function(){ // Function also can be store inside of an object.
    console.log('draw'); // Function inside of an object is called METHOD.
  }
};

// Access them using dot notation
circle.draw();

// FACTORY FUNCTIONS
// To avoid duplication and easy for maintaining code.
// Factory functions produce object.

// Example of factory function of a circle.
function createCircle(radius) {
  return {
    radius, // If key and value are the same, we can remove the value. In this case: radius, = radius: radius,
    draw() { // Other style to type function inside an object
      console.log('draw');
    }
    /*draw: function(){
      console.log('draw');
    }*/
  };
}

// To call the createCircle object
const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);

// CONSTRUCTOR FUNCTIONS
// Others method to create an object
/* Naming convention for creating Constructor Function is called PASCAL Notation: all 1st letter of every word is uppercase.
For example: OneTwoThreeFour, CreateCircle. */

function Circle(radius) {
  this.radius = radius; // THIS: refer to object. In this case, it's 'Circle' object. 
  // In other words, it is equal to Circle.radius or Circle['radius'].
  this.draw = function() {
    console.log('draw');
  }
}

const circle3 = new Circle(1); // NEW: is to create new/empty object based on constructor function
console.log(circle3);

// Both CONSTRUCTOR FUNCTIONS and FACTORY FUNCTION are do the same thing. Either one can be use.

// DYNAMIC NATURE OF OBJECTS
// Can add or remove properties of an object

const rectangle = { // Initial properties of an object
  corner: 4
};
// You can dynamically change the object properties but you cannot reassign the constant variable of an object. In this case, constant variable is rectangle.
/* 
Example of reassign the rectangle. 
rectangle = {}; 
*/

rectangle.color = 'red'; // Add properties to an object
rectangle.draw = function() {} // Add method to an object (using dot notation)

console.log(rectangle); // Show object after added properties

delete rectangle.color; // DELETE: to delete properties of an object
delete rectangle['draw']; // Delete method of an object (using bracket notation)

console.log(rectangle); // Show object after delete properties

// CONSTRUCTOR PROPERTY
// Every object in JavaScript has property called constructor.
// Reference the function that was used to construct or create the object.
// Every object has a constructor property and that references a function that was use to create that object.

// FUNCTION ARE OBJECTS

// Example of constructor function
function Sphere(radius, perimeter) {
  this.radius = radius;
  this.perimeter = perimeter;
  this.draw = function() {
    console.log('draw');
  }
}

// These 2 are basicly the same
Sphere.call({}, 2, 5);
const another = new Sphere(2, 5);

// Use this to pass an array
Sphere.apply({}, [1, 2, 3])

// VALUE VS REFERENCE TYPE
/* 
Value types (Primitive)
1. Number
2. String
3. Boolean
4. Symbol
5. Undefined
6. null
*/

let a = 10; // Initialize a = 10
let b = a; // Initialize b = a. b = 20

a = 20; // Reassign a = 20
/* 
Current value:
a = 20
b = 10
*/

// a and b are 2 independent variable. The value of each variable are stored independently in the variable. If we reassigned the value of a, b is not affected. It will still store the initial value that was assign to b which is in this case was 10.

// Example
let num = 10; // Initialize num variable
function increase(num) {
  num++;
}

increase(num); // call the function
console.log(num); // show the value of num in the console after being called
// Initial value = 10
// Final value = 10

/*
Reference Type
1. Object
2. Function
3. Array
*/

let c = { value: 10}; // Initialize value = 10
let d = c; // Initialize property of d = c. d.value = 10

c.value = 20; // Reassign value = 20.
/*
Current value:
c = { value: 20}
d = { value: 20}
*/

// The properties of an object are contain within the memory. If we reassign the property of c, the property of d also will be updated to other object

let obj = {value: 10} // Initialize obj properties

function increase(obj) {
  obj.value++;
}

increase(obj); // call the function
increase(obj); // call the function
console.log(obj); // show the properties value after being called twice
// Initial value = 10
// Final value = 12

// Primitives are copied by their value
// Objects are copied by their reference


// ENUMERATING PROPERTIES OF AN OBJECT

const square = {
  corner: 4,
  draw () {
    console.log('draw square');
  }
};

for (let key in square)
  console.log(key, square[key]);
/* for (let key of square)
  console.log(key); */ 
  // Will got error. Because it is not iterable.
  // For Of loops only can be use on array or maps. Not on object
  // Object is not iterable

// But we can use For Of loop this way:
for (let key of Object.keys(square))
  console.log(key);
// Object.keys : this method returns a string of array which contains all the properties and method of an object.

for (let entry of Object.entries(square))
  console.log(entry);
// Object.entries : this method returns each entry value pair as an array.

if ('radius' in square) console.log('yes');
else console.log('No');
// To check if the properties exist in the given object
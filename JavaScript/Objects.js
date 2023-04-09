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
  draw: function () {
    // Function also can be store inside of an object.
    console.log('draw'); // Function inside of an object is called METHOD.
  },
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
    draw() {
      // Other style to type function inside an object
      console.log('draw');
    },
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
  this.draw = function () {
    console.log('draw');
  };
}

const circle3 = new Circle(1); // NEW: is to create new/empty object based on constructor function
console.log(circle3);

// Both CONSTRUCTOR FUNCTIONS and FACTORY FUNCTION are do the same thing. Either one can be use.

// DYNAMIC NATURE OF OBJECTS
// Can add or remove properties of an object

const rectangle = {
  // Initial properties of an object
  corner: 4,
};
// You can dynamically change the object properties but you cannot reassign the constant variable of an object. In this case, constant variable is rectangle.
/* 
Example of reassign the rectangle. 
rectangle = {}; 
*/

rectangle.color = 'red'; // Add properties to an object
rectangle.draw = function () {}; // Add method to an object (using dot notation)

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
  this.draw = function () {
    console.log('draw');
  };
}

// These 2 are basicly the same
Sphere.call({}, 2, 5);
const another = new Sphere(2, 5);

// Use this to pass an array
Sphere.apply({}, [1, 2, 3]);

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

let c = { value: 10 }; // Initialize value = 10
let d = c; // Initialize property of d = c. d.value = 10

c.value = 20; // Reassign value = 20.
/*
Current value:
c = { value: 20}
d = { value: 20}
*/

// The properties of an object are contain within the memory. If we reassign the property of c, the property of d also will be updated to other object

let obj = { value: 10 }; // Initialize obj properties

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
  draw() {
    console.log('draw square');
  },
};

for (let key in square) console.log(key, square[key]);
for (let key of square) console.log(key);
// Will got error. Because it is not iterable.
// For Of loops only can be use on array or maps. Not on object
// Object is not iterable

// But we can use For Of loop this way:
for (let key of Object.keys(square)) console.log(key);
// Object.keys : this method returns a string of array which contains all the properties and method of an object.

for (let entry of Object.entries(square)) console.log(entry);
// Object.entries : this method returns each entry value pair as an array.

if ('radius' in square) console.log('yes');
else console.log('No');
// To check if the properties exist in the given object

// CLONING AN OBJECT

const pentagon = {
  corner: 5,
  draw: function () {
    console.log('draw pentagon');
  },
};
/* This is OLD METHOD
const another1 = {};
console.log(another1); // This object currently have empty property

// Use For In loop to iterate over the properties and copy/cloning all the properties of pentagon to another1
for (let key in pentagon){
  another1[key] = pentagon[key];
}
*/

/* New Method
const another1 = Object.assign({}, pentagon) // This will take all the properties of this method in the source object and copies them into the new object.
// Can also add new properties using this method.
/* Example
const another1 = Object.assign({
  color: 'red'
}, pentagon) */

// Much Simpler Method
const another1 = { ...pentagon }; // Called as spread operator (3 dots)
// It take all properties and method of object and put them in between the curly braces.

console.log(another1); // This object after copy the properties of pentagon

/* 
Object.assign: copies the properties and methods from 1 or more source objects into a target object.
Can use that to clone an object or combine multiple objects into a single object.

{...} spread operator: is used to spread an object, means getting all properties and method, and putting them into another object.
*/

// GARBAGE COLLECTION
/*
The job of this garbage collector is to find the variable or constant that are no longer in use.
Then deallocate the memory that was allocated to them earlier.
Memory allocation and deallocation done automatically behind the scene.
Other programming languages such as C and C++ need to allocate and deallocate the memory that being use manually.
*/

// MATH
// Refer MDN for more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
/* 
Built-in object in javascript that has properties and methods for mathematical constant and functions.
It's not a function object.
MATH work with number type only and does not work with BigInt (numeric values which are too large to be represented by the number) 
MATH is not a constructor.
All properties and methods of MATH are static
*/

// Example
// Math.random
// Get random number between 0 and limit

function randomNumberGenerator(limit) {
  return Math.floor(Math.random() * limit);
}

console.log(randomNumberGenerator(100));

// STRING
// String have 2 types
// Refer MDN for more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Another important things in string is ESCAPE SEQUENCE (learn more on MDN)

// String Primitive
const message = 'This is my first message'; // typeof message = 'string'

/*
Example
message.length to count number of character in a string primitive.

function msgLengthChk (limit) {
  if (message.length > limit) console.log('over');
  else console.log('good');
}
msgLengthChk (30);
*/

// String Object
const anotherString = new String('hi'); // typeof anotherString = 'object'

// TEMPLATE LITERALS
/*
Object {}
Boolean true, false
String '', ""
Template ``
*/

const message1 = 'This is\n my first message';
// Above string is basicly same with below string in terms of the output on the console.
// But the below string is much cleaner.
// Below is what we called TEMPLATE LITERALS
const anothermessage = `This is 
my first message`;

const name = 'Timmy';
/* const message2 = 'Hi' + name + ',\n'; 
Instead using this, better use template literal for cleaner and understandable code. */

const message2 = `Hi ${name},

Thank you for joining my mailing list.

Regards,
Fareez`;
// ${}
// Use $(dollar sign) and {}(curly braces) to add/insert any variable/expression/function in template literals.

// DATE
// Refer MDN for more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Objects represent a single moment in time in a platform-independent format.

// This is how we create DATE object
const now = new Date();
const date1 = new Date('March 30 2023 23:03');
const date2 = new Date(2023, 2, 30, 23, 3);

// Date have bunch of GET and SET method
now.setFullYear(2020);
// Example to set YEAR

// Exercise 1
/* Address Object
1. street
2. city
3. zipcode */
// Create a Funtion showAddress(address)

const address = {
  street: 'Hala Klebang Restu 36',
  city: 'Chemor',
  zipcode: 31200,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// Exercise 2
// Use Factory and Constructor Funtions

/* Address Object
1. street
2. city
3. zipcode */

// Factory Functions
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

const address1 = createAddress('Hala 36', 'Chemor', 31200);
console.log(address1);

// Constructor Functions
function Address(street, city, zipcode) {
  (this.street = street), (this.city = city), (this.zipcode = zipcode);
}

const address2 = new Address('Hala 36', 'Chemor', 31200);
console.log(address2);

// Exercise 3
// Object Equality

function Address(street, city, zipcode) {
  (this.street = street), (this.city = city), (this.zipcode = zipcode);
}

const address1 = new Address('Hala 36', 'Chemor', 31200);
const address2 = new Address('Hala 36', 'Chemor', 31200);

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2)); // return true. because the properties of this objects are the same
console.log(areSame(address1, address2)); // return false. Because it is 2 different object

// Exercise 4
// Blog Post Object
/* 
1. title
2. body
3. author
4. views
5. comment (author, body)
6. isLive (true or false)
*/

const blogPost = {
  title: 'My Blog Post',
  body: 'nothing',
  author: 'You',
  views: 1,
  comments: [{ author: 'me', body: 'content' }], // object in an object
  isLive: true,
};

// Exercise 5
// Blog Post Object using constructor functions
/* 
1. title
2. body
3. author
4. views
5. comment (author, body)
6. isLive (true or false)
*/

let post = new CreatePost(
  'This is title',
  'This is body',
  'This is your author'
);

console.log(post);

function CreatePost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; // Should initialize to 0 because views is not something you want configure. It count automatically as audience views your blog post
  this.comments = []; // same with comment. set to empty string
  this.isLive = false;
}

// Exercise 6
// Price Range Object

// inexpensive, moderate, pricey

const priceRange = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Pricey', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];

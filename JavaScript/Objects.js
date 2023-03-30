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



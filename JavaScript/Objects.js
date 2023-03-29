// BASICS
// Object are collections of key value pairs
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
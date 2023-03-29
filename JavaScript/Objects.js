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

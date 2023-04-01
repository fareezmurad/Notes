// ADDING ELEMENTS

// cannot reassign `numbers`
// But the elements of an array can be modify
const numbers = [3, 4];

// Add elements

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b'); // Parameters take 3 arguments (start: indexNumber, deleteCount, insertValue)

console.log(numbers);

// FINDING ELEMENTS (PRIMITIVES TYPES)
const num = [1, 2, 3, 1, 4];
console.log(num.indexOf(1)); // Can pass second parameter of `indexOf`. The argument is the value of index to start search for the first argument.
// If the element exist in the array, this method will return the index of this element in the array.
// If the element doesn't exist, it will return -1.

console.log(num.lastIndexOf(1)); // Return the last element of `1` in the array.
// In this case, the index is 3.

// Others method to check if the element exist
console.log(num.indexOf(1) !== -1); // Return true if `1` exist
console.log(num.includes(1)); // Preferred method to achieve above results.

// FINDING ELEMENTS (REFERENCE TYPES)
// Cannot use primitive type method to find reference type array
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

// for reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const course = courses.find(function (course) {
  return course.name === 'a';
  // return undefined if there is no corresponding element in the object
});
console.log(course);

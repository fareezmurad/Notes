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

// ARROW FUNCTION
const course = courses.find((course) => course.name === 'a');
console.log(course);
// Shorter way to write a function

// REMOVING ELEMENTS
const number = [1, 2, 3, 4];

// End
const last = number.pop();

// Beginning
const start = number.shift();

// Middle
const mid = number.splice(2, 1); // Parameter take 2 arguments. (index number in array, number of elements to delete)

// EMPTYING AN ARRAY
let arrayOfNumber = [1, 2, 3, 4];

// Solution 1
arrayOfNumber = [];

// Solution 2
arrayOfNumber.length = 0;

// Solution 3
arrayOfNumber.splice(0, arrayOfNumber.length);

// Solution 4
while (arrayOfNumber > 0) arrayOfNumber.pop(); // Not recommended if array size is big. Gonna cost performance issue

// COMBINING AND SLICING ARRAYS
const first = [1, 2, 3];
const second = [4, 5, 6];

// Combined
const combined = first.concat(second);

// Slicing
combined.slice(2, 6);
/* Arguments (starting index, number of elements) or 
(starting index): combined.slice(2) or
(no argument): combined.slice() (slicing all the elements) */

// SPREAD OPERATORS
const first1 = [1, 2, 3];
const second2 = [4, 5, 6];

// Use spread operator to combine elements in array
const combine = [...first1, ...second2];
/* Basically, we creating new array by adding individual elements from `first1` and `second2` array.
You can also add element in between them: [...first1, 'a', ...second2, 'b']*/

// Below method, same as: `const copy = combine.slice()`
const copy = [...combine];

// ITERATING AN ARRAY
let nums = [1, 2, 3];

// 1st method: for..of loop
for (let num of nums) console.log(num);

// 2nd method: forEach method
nums.forEach((num) => console.log(num));
/* forEach loop also take second parameter: index.
example: nums.forEach((num, index) => console.log(index, num)) */

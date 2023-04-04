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

// JOINING ARRAYS
// `join` method; join element in the array
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

// `split` method: split string into elements
// *not part of array. it is part of string
const message = 'hello, this is my message';
const parts = message.split(' ');
console.log(parts);
// combine back the `split` `message`
const combine = parts.join('-');
console.log(combine);
// Partically useful when building a URL slug
// white space replaced with hyphen in the URL

// SORTING ARRAYS

const numbers = [2, 3, 1];
// `sort`: convert each elements to a string, then sort the elements in the array.
numbers.sort();
console.log(numbers); // [1, 2, 3]

// `reverse : sort elements in reverse order.
numbers.reverse();
console.log(numbers); // [3, 2, 1]

/* `sort` and `method` are pretty useful when you have numbers and string in a arrays.
It doesn't work by default for objects, you have to do some extra work */

// Example of sorting an objects
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javaScript' },
];

courses.sort((a, b) => {
  // Below method to exclude Case Sensitive comparing
  // `toUpperCase` : convert string to uppercase
  // `toLowerCase` : convert string to lowercase
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  // a < b => -1
  // a < b => 1
  // a === b => 0
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

// TESTING THE ELEMENTS OF AN ARRAY
const numbers = [1, 2, 3, -4];

// Check the numbers in the array if they are positive
const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive); // false
/* `every`: in this callback function, `every` will check each element if they are matches our given criteria. */

const atLeastOnePositive = numbers.some((value) => value >= 0);
console.log(atLeastOnePositive); // true
/* `some`: in this callback function, `some` will check to see if we have at least one element in this array that matches our given criteria. */

// *some older browser do not support this method

// FILTERING AN ARRAY
const numbers = [1, -1, 2, 3];

// Filter positive number.
// `filter`: loop through array, and execute callback function for each element.
const filtered = numbers.filter((value) => value >= 0);

console.log(filtered); // [1, 2, 3]

// MAPPING AN ARRAY
// Example of mapping a number into string
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);

// Create HTML Markup using `filtered` numbers
const items = filtered.map((value) => '<li>' + value + '</li>');
/* output:
'<li>1</li>'
'<li>2</li>'
'<li>3</li>'
*/
const html = '<ul>' + items.join('') + '</ul>';
/* output: <ul><li>1</li><li>2</li><li>3</li></ul>
 */

console.log(html);

// Example mapping a number into object
const items = filtered.map((value) => ({ v: value }));

console.log(items);

// Simpler method to write above code (chain method)
/* const items = numbers
  .filter(value => value >= 0)
  .map(value => ({v: value}));
*/

// REDUCING AN ARRAY

// Calculate sum of all these numbers in this array.
// This numbers represent the price of an item in a shopping cart
const numbers = [1, -1, 2, 3];

// Method 1 (`for..of` loop method)
/* 
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);
*/

// Method 2 (`reduce` method)
// Reduce all the elements in an array into a single value. It can be a number, string, object or anything.

// How reduce method works!
// accumulator = 0, currentValue = 1 => accumulator = 1
// accumulator = 1, currentValue = -1 => accumulator = 0
// accumulator = 0, currentValue = 2 => accumulator = 2
// accumulator = 2, currentValue = 3 => accumulator = 5
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
// `reduce` has 2 arguments. First argument is callback function. Second argument is the initial value for the `accumulator`.

// If the `accumulator` is not initialize, it will take value of the first element in the array

// Exercise 1
// Array from range

const numbers = arrayFromRange(1, 55);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// Exercise 2
// Includes

const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}

console.log(includes(numbers, 3));

// Exercise 3
// Except

const numbers = [1, 2, 3, 4];

const output = except(numbers, [4, 3]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

// Exercise 4
// Moving an Element
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offset) {
  const output = [];
  const position = index + offset;
  if (position < array.length && position >= 0) {
    for (let element of array) output.push(element);
    const removed = output.splice(index, 1)[0];
    output.splice(position, 0, removed);
    return output;
  }
  console.error('Invalid offset');
}

// Exercise 5
// Count Occurrences

const numbers = [1, 2, 3, 4, 1, 2, 2];

const count = countOccurrences(numbers, 2);

console.log(count);

// For Of Loop and if method
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}

// Reduce method
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);
}

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

// Exercise 6
// Get Max

const numbers = [11, 2, 3, 4, 10];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  let maxValue = 0;
  for (let i = 0; i < array.length; i++)
    if (array[i] > maxValue) maxValue = array[i];
  return maxValue;
}

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, currentValue) => {
    if (accumulator > currentValue) return accumulator;
    return currentValue;
  });
}

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue
  );
}

// Exercise 7
// Movies

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const movieTitle = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(movieTitle);

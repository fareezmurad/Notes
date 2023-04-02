//CONDITIONAL STATEMENT
// 1. IF..ELSE
// 2. SWITCH..CASE

// If and Else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 13;

// Basic Structure
// if (condition) {
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else (yetAnotherCondition){
//     statement
// }

// Example:
if (hour >= 6 && hour < 12) {
  console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening!');
}

// Switch and Case
let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break; // to break to below case. Without break statement, below case will be run too.

  case 'moderator':
    console.log('Moderator');
    break;

  default:
    console.log('Unknown User');
}

// If Else version
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

// FOR LOOP
// for(initialExpression; condition; incrementExpression)
// statement
for (let i = 0; i <= 5; i++) {
  // i variable only run in this loop. Because it is part of the FOR LOOP.
  //console.log('Hello World', i);  this loop will run 5 times.
  if (i % 2 !== 0) console.log('FOR LOOP' + i); // if the remainder is not 0, console.log will display the odd number. Because odd number divide by 2 will have a remainder.
}

// WHILE LOOP
let i = 0; // this variable run in this whole JS files because it is declared outside of the bracket
while (i <= 5) {
  // i <= 5 is the condition
  if (i % 2 !== 0) console.log('WHILE LOOP' + i); // statement
  i++; // i++ is the increment
}

// DO and WHILE LOOP
// Will run at least once. Even if the condition is not met/false
let j = 0;
do {
  if (j % 2 !== 0) console.log('DO LOOPS' + j);
  j++;
} while (j <= 5);

// INFINITE LOOP
// Execute infinitely
// let i = 0;
// while (i < 5){
//  console.log(i);
//  //i++; if increment are not declared, this loop will run infinitely because i is always equal to ZERO and also less than 5. As long i is less than 5, this will loop will run infinitely
// }
//  Avoid infinite loop because it can CRASH your browser! Even your computer might be CRASHES!

// FOR IN LOOP
// Use it to iterate over the properties of an object.
const person = {
  names: 'Fareez',
  age: 29,
};

for (let key in person) console.log(key, person[key]);

// Dot Notation
// person.names;
// Cannot use this because we don't have propert called key in person object above

// Bracket Notation
// person['names'];
// Use this because we don't know ahead of time what property we're going to access

// Example of iterate over an array. But it is not ideal way
const colors = ['red', 'green', 'blue'];

for (let index in colors) console.log(index, colors[index]);

// FOR OF LOOP
// Use it to iterate over the elements/items in an array.
const colors = ['red', 'green', 'blue'];
for (let color of colors) console.log(color);

// BREAK and CONTINUE
let a = 0;
while (a <= 20) {
  // if (a === 9) break; Break means break out of the loop. Means it stop run after met the condition during the iteration. In this case, when a is equal to 9, it will stop run the loop
  if (a % 2 === 0) {
    a++;
    continue; // when js engine read CONTINUE keyword, it will jump to the beginning of the loop. In this case, if the number that divide by 2 has no remainder, it will increment the number and jump back to the beginning of the loop. Then run the loop once again untill the while condition is met. That is why the console only show odd number.
  }
  console.log(a);
  a++;
}

// Exercise 1
let value = max(200, 11);

function max(a, b) {
  //   if (a > b) return a;
  //   return b;
  // Condition below is exactly the same. You can use either of them

  return a > b ? a : b;
}

console.log(value);

// Exercise 2
let orientations = isLandscape(1920, 1080);
console.log(orientations);

function isLandscape(width, height) {
  return width > height;
}

if (orientations === true) console.log('Landscape Mode');
else console.log('Potrait Mode');

// Exercise 3
const output = fizzBuzz(90);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;

  if (input % 3 === 0 && input % 5 === 0) return 'fizzBuzz';

  if (input % 3 === 0) return 'fizz';

  if (input % 5 === 0) return 'buzz';

  return input;
}

// Exercise 4
// Speed Limit = 70
// 5km -> 1 point
// Math.floor(1.3) to convert floating number into integers
// 12 points -> suspended

let condition = checkSpeed(125);
console.log(condition);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) return 'OK';

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) return 'License suspended';
  else return 'Points = ' + points;
}

// Exercise 5
showNumbers(21);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, 'EVEN');
    // else console.log(i, 'ODD');
    // Exactly same output as below method. Can use either one.

    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

// Exercise 6
// Count the number of TRUTHY value in an array

const array = ['f', 1, 2, 0, 200];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0; // count the array start from zero
  for (let value of array) // to iterate over the items in array
    if (value)
      // check if value is TRUTHY or FALSEY
      count++; // if TRUTHY, count will be increase by 1. if FALSEY, value will stay and iterate over the array.
  return count;
}

// Exercise 7
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};

showProperties(movie);

function showProperties(obj) {
  for (let properties in obj)
    if (typeof obj[properties] === 'string')
      // compare the type of properties of an object. If the properties is STRING, it will show on the console. If not, it will iterate over the function.
      console.log(properties, obj[properties]);
}

// Exercise 8
console.log(sum(10));

// Multiple of 3: 3, 6, 9 <10
// Multiples of 5: 5,10 <10
// The sum of all of above numbers

function sum(limit) {
  let sum = 0; // Initial value of sum

  for (
    let i = 0;
    i <= limit;
    i++ // Iterate over the value of variable i
  )
    if (i % 3 === 0 || i % 5 === 0)
      // if i divided by 3 or 5 and not have a remainder, SUM + i. Then iterate over.
      // But if i have a remainder, if will IGNORE SUM + 1 iterate over the for loop.
      sum += i; // sum is a variable to store the value of i that dont have a remainder.

  return sum; // this will return the value back to sum.
}

// Exercise 9
// Calculate average of an array.
const marks = [80, 80, 50];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  const average = calculateAverage(marks); // call calculateAverage function. Need to declare the function or else, the function don't know it's role.

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0; // Initial value of sum
  for (let value of array) // use FOR OF loop for iterate over an array.
    sum += value; // value of array will be added to sum and will iterate over if the value is exist.
  return sum / array.length; // return the value of the average.
}

// Exercise 10
showStars(3); // Call out the function.

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    // Use FOR loop for iteration.
    let starPattern = ''; // set variable to empty string.
    for (
      let i = 0;
      i < row;
      i++ // set DUMMY iteration reference to row FOR loop to add * string count.
    )
      starPattern += '*'; // add * string to each row.
    console.log(starPattern); // use console.log. If use return, it will not iterate.
  }
}

// Exercise 11
let value = 20;

showPrimeNumbers(value);

// Prime Numbers (whose factors are ony 1 and itself)

function showPrimeNumbers(limit) {
  for (
    let number = 2;
    number <= limit;
    number++ // iterate this FOR loop starting from 2 -> limit. If isPrime = true, console will show the all the prime number. if isPrime = false, the number will now show on console.
  )
    if (isPrime(number)) console.log(number); // calling isPrime function to this function.
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    // iterate over starting from 2 -> number. Every factor number starting from 2, will check with every 'number' number if they have a remainder.
    // if the iteration find the number with the remainder of 0, it will return FALSE. Hence, it will not count as prime number.
    // if the iteration did not find any number with remainder untill the 'limit' value reached, it will return TRUE.
    if (number % factor === 0) return false; // false if iteration find a number with 0 remainder.

  return true; // true if iteration did not find any number with 0 remainder.
}

// FOR UNDERSTANDING FOR LOOP PURPOSE in this primeNumber case
a(value);
function a(b) {
  for (let c = 2; c <= b; c++) {
    for (let d = 2; d < c; d++) {
      console.log('value of number = ' + c);
      console.log('value of factor = ' + d);
    }
  }
}

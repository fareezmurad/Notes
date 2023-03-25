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
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Switch and Case
let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break; // to break to below case. Without break statement, below case will be run too.

  case "moderator":
    console.log("Moderator");
    break;

  default:
    console.log("Unknown User");
}

// If Else version
if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");

// FOR LOOP
// for(initialExpression; condition; incrementExpression)
// statement
for (let i = 0; i <= 5; i++) {
  // i variable only run in this loop. Because it is part of the FOR LOOP.
  //console.log("Hello World", i);  this loop will run 5 times.
  if (i % 2 !== 0) console.log("FOR LOOP" + i); // if the remainder is not 0, console.log will display the odd number. Because odd number divide by 2 will have a remainder.
}

// WHILE LOOP
let i = 0; // this variable run in this whole JS files because it is declared outside of the bracket
while (i <= 5) {
  // i <= 5 is the condition
  if (i % 2 !== 0) console.log("WHILE LOOP" + i); // statement
  i++; // i++ is the increment
}

// DO and WHILE LOOP
// Will run at least once. Even if the condition is not met/false
let j = 0;
do {
  if (j % 2 !== 0) console.log("DO LOOPS" + j);
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
  names: "Fareez",
  age: 29,
};

for (let key in person) console.log(key, person[key]);

// Dot Notation
//person.names;
// Cannot use this because we don't have propert called key in person object above

// Bracket Notation
//person["names"];
// Use this because we don't know ahead of time what property we're going to access

// Example of iterate over an array. But it is not ideal way
const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);

// FOR OF LOOP
// Use it to iterate over the elements/items in an array.
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

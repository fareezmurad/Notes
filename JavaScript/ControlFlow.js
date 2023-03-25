//CONDITIONAL STATEMENT
// 1. IF..ELSE
// 2. SWITCH..CASE

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

// Operators > Expressions > Algorithm

// 1. Arithmetic
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. Bitwise

// 1. Arithmetic Operators (calculations)
let x = 3;
let y = 2;

console.log(x + y); // addition operator
console.log(x - y); // subtraction operator
console.log(x * y); // multiplication operator
console.log(x / y); // division operator
console.log(x % y); // remainder of division
console.log(x ** y); // x to the power of y

// Increment
console.log(x++);
console.log(x);
// Decrement
console.log(y--);
console.log(y);

// 2. Assignment Operators
let a = 10;
// a = a + 5; a += 5; these 2 are basicly the same
// a = a * 5; a *= 5; can you for subtraction and division too

console.log(a);

// 3. Comparison Operators
let b = 1;
// These are relational operators
console.log(b > 0);
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

// Equality Operators
// Stric equality (type + value)
console.log(b === 1); // check if true : TRUE
console.log('f' === 1); // false because 'is string'. 1 is number. The type and value is different
console.log(b !== 1); // check if false : FALSE

// Lose equality (value)
console.log(1 == 1); // TRUE because the value is the same
console.log('1' == 1); // TRUE because 'RHS 1' convert to string also become "1"
console.log(true == 1); // TRUE because 'RHS 1 convert to boolean also become true

// Ternary Operators (conditional operators)
// If customers has more than 100 points,
// They are a gold customer, otherwise,
// They are a silver customer.

let points = 100;
let type = points >= 100 ? 'gold' : 'silver';
console.log(type);

// 4. Logical Operators
// Logical AND (&&)
// Return TRUE if both operands are TRUE
console.log(true && true); // Return is TRUE

// Logical OR (||)
// Return TRUE if one of the operands is TRUE
console.log(true || false); // Return is TRUE

// Example
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
// let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);
// Return FALSE if apply Logical AND
// Return TRUE if apply Logical OR

// NOT(!)
let applicationRefused = !eligibleForLoan;
// Return the opposite of eligibleForLoan

// Logical Operators with non-booleans
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that are not FALSY is TRUTHY

// Example
let userColor;
let defaultColor = 'dark';
let currentColor = userColor || defaultColor;

console.log(currentColor);
// Return defaultColor because userColor is undefined(falsy)

// 5. Bitwise Operators

// Decinal to Binary (8-bit)
// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); // Bitwise OR (single vertical line)
// Return 3
// 1 = 01
// 2 = 10
// R = 11
console.log(1 & 2); //Bitwise AND (single and symbol)
// Return 0
// 1 = 01
// 2 = 10
// R = 00
console.log(3 & 2);
// Return 2
// 3 = 11
// 2 = 10
// R = 10

// Example
// Read, Write, Execute = 111
// 100 = read
// 010 = Write
// 001 = Execute
const readPermission = 4;
const writePermision = 2;
const executePermission = 1;
let myPermission = 0; //0 = no permission
myPermission = myPermission | readPermission | writePermision; // Permission only on read and write.Not execute
console.log(myPermission);
let message = myPermission & executePermission ? 'YES' : 'NO';
console.log(message); // Return NO. YES if read and write permissions

// Operators Precendence
let k = 2 + 3 * 4;
console.log(k); // Return 14. BODMAS concept

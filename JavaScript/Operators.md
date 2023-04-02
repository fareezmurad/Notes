# JavaSript Operators

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numeric values in JavaScript. Here are the different types of arithmetic operators:

- Addition (`+`): adds two operands.
- Subtraction (`-`): subtracts the second operand from the first operand.
- Multiplication (`*`): multiplies two operands.
- Division (`/`): divides the first operand by the second operand.
- Modulus (`%`): returns the remainder of a division operation.
- Exponentiation (`**`): raises the first operand to the power of the second operand.

For example:

```js
let x = 3;
let y = 2;

console.log(x + y); // 5
console.log(x - y); // 1
console.log(x * y); // 6
console.log(x / y); // 1.5
console.log(x % y); // 1
console.log(x ** y); // 9

// Increment
console.log(x++); // 3
console.log(x); // 4

// Decrement
console.log(y--); // 2
console.log(y); // 1
```

> Note that the increment (`++`) and decrement (`--`) operators can be used to increase or decrease the value of a variable by 1.
>
> However, the position of the operator (before or after the variable) affects when the increment/decrement takes place.

## Assignment Operators

Assignment operators are used to assign values to variables. JavaScript provides shorthand syntax for these assignments called "Assignment Operators".

Some of the most common assignment operators include:

- `+=` (Addition Assignment)
- `-=` (Subtraction Assignment)
- `*=` (Multiplication Assignment)
- `/=` (Division Assignment)
- `%=` (Remainder Assignment)

These operators provide a more concise way to update the value of a variable.

For example:

```js
let a = 10;
a += 5; // same as a = a + 5
console.log(a); // Output: 15

a *= 2; // same as a = a * 2
console.log(a); // Output: 30
```

> Note that the above syntax is equivalent to the longer version of the assignment (e.g., `a = a + 5`).
>
> It's a shorthand that is used to save time and space.

## Comparison Operators

Comparison operators are used to compare two values and return a boolean value. There are two types of comparison operators: relational and equality operators.

### Relational Operators

Relational operators compare two values and return a boolean value indicating whether the comparison is true or false. The following relational operators are available in JavaScript:

- `>` greater than
- `>=` greater than or equal to
- `<` less than
- `<=` less than or equal to

For example:

```js
let b = 1;

console.log(b > 0); // true
console.log(b >= 1); // true
console.log(b < 1); // false
console.log(b <= 1); // true
```

### Equality Operators

Equality operators are used to compare two values for equality and return a boolean value. There are two types of equality operators:

1. Strict equality
2. Loose equality

#### Strict Equality

Strict equality compares the type and the value of the two operands. If they are equal, the operator returns `true`, otherwise it returns `false`. The strict equality operator is represented by `===` and the strict inequality operator is represented by `!==`.

For example:

```js
console.log(1 === 1); // true
console.log('f' === 1); // false
console.log(1 !== 1); // false
```

#### Loose Equality

Loose equality compares the value of the two operands, after converting both operands to a common type. The loose equality operator is represented by `==` and the loose inequality operator is represented by `!=`.

For example:

```js
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(true == 1); // true
```

### Ternary Operators

The ternary operator is a shorthand for an `if...else` statement. It is also known as the conditional operator. The ternary operator takes three operands:

- a condition
- a value to return if the condition is true
- a value to return if the condition is false

The syntax for the ternary operator is as follows:

```js
condition ? value1 : value2;
```

Here is an example of using the ternary operator:

```js
let points = 100;
let type = points >= 100 ? 'gold' : 'silver';

console.log(type); // gold
```

In the example above, if the `points` variable is greater than or equal to 100, the value of `type` will be `'gold'`, otherwise it will be `'silver'`.

## Logical Operators

Logical operators are used to compare two or more values and return a boolean result. There are three logical operators in JavaScript, which are:

### Logical AND (`&&`)

The logical AND operator returns `true` if both operands are true. If any of the operands are false, it returns `false`.

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
```

### Logical OR (`||`)

The logical OR operator returns `true` if any of the operands are true. If both operands are false, it returns `false`.

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
```

### Logical NOT (`!`)

The logical NOT operator is a unary operator that returns the opposite boolean value of its operand. If the operand is true, it returns `false` and if the operand is false, it returns `true`.

```js
console.log(!true); // false
console.log(!false); // true
```

### Example:

We can use logical operators to combine boolean expressions.

```js
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // false
```

We can also use logical operators with non-boolean values. In JavaScript, any value can be treated as a boolean value. Values that are considered `false` are called Falsy values and values that are considered `true` are called Truthy values.

Falsy values:

- `undefined`
- `null`
- `0`
- `false`
- `''`
- `NaN`

```js
let userColor;
let defaultColor = 'dark';
let currentColor = userColor || defaultColor;

console.log(currentColor); // dark because userColor is undefined (falsy)
```

In the above example, `userColor` is undefined, which is a falsy value. Therefore, `currentColor` is assigned the value of `defaultColor`, which is `'dark'`.

## Bitwise Operators

Bitwise operators are used in JavaScript to manipulate the binary representation of numbers. They can be used to perform bitwise operations such as AND, OR, NOT, and XOR on binary values.

### Decimal to Binary (8-bit)

In JavaScript, decimal values can be converted to binary using 8 bits, as shown below:
| Decimal | Binary (8-bit) |
| -------------- | -------------- |
| 1 | 00000001 |
| 2 | 00000010 |

### Bitwise OR (`|`)

The bitwise OR operator (`|`) compares each bit of two values and returns a new value with a 1 in any position where either of the corresponding bits are 1.

```js
console.log(1 | 2); // Output: 3
// 1 = 01
// 2 = 10
// R = 11
```

### Bitwise AND (`&`)

The bitwise AND operator (`&`) compares each bit of two values and returns a new value with a 1 in any position where both of the corresponding bits are 1.

```js
console.log(1 & 2); // Output: 0
// 1 = 01
// 2 = 10
// R = 00
```

#### Example

```js
const readPermission = 4;
const writePermision = 2;
const executePermission = 1;
let myPermission = 0; // 0 = no permission

myPermission = myPermission | readPermission | writePermision; // Permission only on read and write. Not execute.
console.log(myPermission);

let message = myPermission & executePermission ? 'YES' : 'NO';
console.log(message); // Output: NO. YES if read and write permissions
```

In the above example, the read, write, and execute permissions are represented by the binary values of 100, 010, and 001, respectively. By using the OR operator, we set the permission for read and write only, not execute. Finally, by using the AND operator, we check if the execute permission is set or not. If it is set, the output will be `'YES'`, otherwise it will be `'NO'`.

## Operators Precedence

Operators in JavaScript have a certain order of precedence, which determines the order in which they are evaluated in an expression. The order of evaluation is determined by the BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) rule of arithmetic.

In the example below, the expression `2 + 3 * 4` is evaluated based on the BODMAS rule, which gives multiplication a higher priority than addition:

```js
let k = 2 + 3 * 4;
console.log(k); // Returns 14
```

Here, multiplication (`3 * 4`) is evaluated first, giving a result of 12. Then, the addition (`2 + 12`) is evaluated, giving a final result of 14.

It is possible to override the default order of precedence by using parentheses `()` to group certain parts of an expression together. This allows the grouped parts to be evaluated first, regardless of their precedence relative to other operators in the expression.

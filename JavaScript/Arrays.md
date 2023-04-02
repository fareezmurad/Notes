# Arrays in JavaScript

An array is a collection of elements of any type, and it is a fundamental data structure in JavaScript. Here are some important operations that can be performed on arrays:

## Adding Elements

- Add elements to the beginning, end or middle of an array using `push()`, `unshift()` or `splice()` methods respectively.
- The `push()` method adds one or more elements to the end of an array, while `unshift()` adds one or more elements to the beginning of an array.
- The `splice()` method can add one or more elements at any index of the array.

```js
const numbers = [3, 4];

// Add elements

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b'); // Parameters take 3 arguments (start: indexNumber, deleteCount, insertValue)

console.log(numbers); // Output: [1, 2, 'a', 'b', 3, 4, 5, 6]
```

## Finding Elements (Primitive)

- Use `indexOf()`, `lastIndexOf()`, or `includes()` methods to find the index of an element in an array.
- The `indexOf()` method returns the index of the first occurrence of the specified element in the array, while `lastIndexOf()` returns the index of the last occurrence.
- The `includes()` method returns a boolean value indicating whether or not the specified element is in the array.

```js
const num = [1, 2, 3, 1, 4];
console.log(num.indexOf(1)); // Output: 0
console.log(num.lastIndexOf(1)); // Output: 3
console.log(num.indexOf(1) !== -1); // Output: true
console.log(num.includes(1)); // Output: true
```

> If the element exist in the array, this method will return the index of this element in the array.
>
> If the element doesn't exist, it will return -1.

## Finding Elements (Reference)

- To find an object or array in an array, you can use the `find()` method, which returns the first element that satisfies the provided condition, or the `filter()` method, which returns an array of all elements that satisfy the condition.
- For reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

```js
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const course = courses.find(function (course) {
  return course.name === 'a';
  // return undefined if there is no corresponding element in the object
});
console.log(course);
```

Another example:

```js
const arr = [{ name: 'apple' }, { name: 'banana' }, { name: 'cherry' }];

console.log(arr.find((fruit) => fruit.name === 'banana')); // {name: 'banana'}
console.log(arr.filter((fruit) => fruit.name.startsWith('c'))); // [{name: 'cherry'}]
```

## Arrow Function

- Arrow functions are a shorthand way of writing function expressions in JavaScript. They were introduced in ES6 and are a popular choice for creating functions. Here's an example of using an arrow function to find an element in an array:

```js
const course = courses.find((course) => course.name === 'a');
console.log(course);
```

In the code above, the same search criteria is used as in the previous example, but this time an arrow function is used instead of a regular function. The syntax of an arrow function is `(arguments) => { function body }`. The arguments can be wrapped in parentheses if there is more than one, and the function body is wrapped in curly braces if it contains more than one statement. In this case, there is only one argument (`course`) and one statement in the function body (`course.name === 'a'`). The arrow function returns `true` if the `name` property of the current element matches `'a'`. If a match is found, the `find()` method returns the corresponding element from the array. If no match is found, `undefined` is returned.

## Removing Elements

In JavaScript, we can remove elements from an array using the following methods:

1. `pop()`: This method removes the last element of the array and returns it.

```js
const numbers = [1, 2, 3, 4];
const last = numbers.pop();
console.log(last); // Output: 4
console.log(numbers); // Output: [1, 2, 3]
```

2. `shift()`: This method removes the first element of the array and returns it.

```js
const numbers = [1, 2, 3, 4];
const first = numbers.shift();
console.log(first); // Output: 1
console.log(numbers); // Output: [2, 3, 4]
```

3. `splice()`: This method can be used to remove elements from the middle of an array by specifying the index number of the element to remove and the number of elements to delete. It also returns the removed elements in an array.

```js
const numbers = [1, 2, 3, 4];
const removed = numbers.splice(2, 1);
console.log(removed); // Output: [3]
console.log(numbers); // Output: [1, 2, 4]
```

## Emptying an Array

Sometimes you may need to empty an array in JavaScript, and there are several ways to do so. Here are some solutions:

1. Assigning an empty array to the original array:<br>
   This is the easiest way to empty an array. You can assign an empty array to the original array.

```js
let arrayOfNumber = [1, 2, 3, 4];
arrayOfNumber = [];
```

2. Changing the length of the array:<br>
   You can also change the length property of an array to 0 to empty it.

```js
let arrayOfNumber = [1, 2, 3, 4];
arrayOfNumber.length = 0;
```

3. Using the `splice` method:<br>
   The `splice` method can be used to remove elements from an array, and it can also be used to remove all the elements in an array.

```js
let arrayOfNumber = [1, 2, 3, 4];
arrayOfNumber.splice(0, arrayOfNumber.length);
```

4. Using the `pop` method in a loop:<br>
   You can use a loop to remove all the elements in an array by using the `pop` method.

```js
let arrayOfNumber = [1, 2, 3, 4];
while (arrayOfNumber.length > 0) {
  arrayOfNumber.pop();
}
```

> **Note:** This solution is not recommended for large arrays, as it can cause performance issues.

## Combining and Slicing an Array

Arrays can be combined and sliced using the `concat()` and `slice()` methods, respectively.

- To combine two arrays, we can use the `concat()` method which creates a new array containing elements from both arrays.
  The original arrays are not modified.

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
```

- To extract a portion of an array into a new array, we can use the `slice()` method.
- It returns a new array without modifying the original array.
- We can pass two arguments to slice the array, the starting index (inclusive) and the ending index (exclusive).
- If we only pass the starting index, it will slice the array from the starting index to the end.
- If we don't pass any arguments, it will slice the entire array.

```js
const array = [1, 2, 3, 4, 5, 6];
const slicedArray = array.slice(2, 4); // [3, 4]
const slicedArray2 = array.slice(2); // [3, 4, 5, 6]
const slicedArray3 = array.slice(); // [1, 2, 3, 4, 5, 6]
```

## Spread Operator

Spread operators in JavaScript provide an efficient way to manipulate arrays. They allow us to spread or unpack the elements of an existing array into a new array. This feature was introduced in ECMAScript 6.

In JavaScript, we use the spread operator (`...`) to expand an iterable (like an array or string) into multiple elements. We can use the spread operator in various situations, such as:

1. Combining arrays:<br> We can combine two or more arrays into a new array using the spread operator.

```js
const first1 = [1, 2, 3];
const second2 = [4, 5, 6];

const combine = [...first1, ...second2]; // [1, 2, 3, 4, 5, 6]
```

2. Copying arrays:<br> We can create a new copy of an array using the spread operator.

```js
const arr = [1, 2, 3];
const copy = [...arr]; // [1, 2, 3]
```

3. Adding elements to an array:<br> We can add new elements to an array using the spread operator.

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```

4. Passing arguments:<br> We can pass an array as arguments to a function using the spread operator.

```js
const arr = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
const result = sum(...arr); // 6
```

5. Converting iterable to an array:<br> We can convert an iterable object to an array using the spread operator.

```js
const str = 'hello';
const chars = [...str]; // ["h", "e", "l", "l", "o"]
```

The spread operator is a powerful tool in JavaScript that makes working with arrays and iterables easier and more efficient.

## Iterating an Array

To iterate an array in JavaScript, there are two common methods:

1. Using a `for..of` loop: This method iterates through the array elements one by one and assigns each element to a variable inside the loop.

```js
let nums = [1, 2, 3];
for (let num of nums) {
  console.log(num);
}
```

2. Using the `forEach` method: This method is called on the array and takes a function as an argument. This function is called for each element in the array and can take two arguments: the element itself and its index.

```js
let nums = [1, 2, 3];
nums.forEach((num) => console.log(num));
```

You can also use the second parameter of the callback function to access the index, like this:

```js
let nums = [1, 2, 3];
nums.forEach((num, index) => console.log(index, num));
```

## Joining Arrays

- `join`: This method creates a new string by concatenating all the elements in an array. The elements are separated by a specified separator (in the example, a comma). The original array is not modified.

- `split`: This method splits a string into an array of substrings based on a specified separator (in the example, a space). The original string is not modified.

```js
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined); // Output: "1,2,3"

const message = 'hello, this is my message';
const parts = message.split(' ');
console.log(parts); // Output: ["hello,", "this", "is", "my", "message"]

const combine = parts.join('-');
console.log(combine); // Output: "hello,-this-is-my-message"
```

split and join methods can be useful for various tasks, such as parsing user input, building URLs, and formatting data for display.

## Sorting Array

- `sort()` method sorts the elements of an array in place and returns the sorted array. By default, it sorts the array elements in lexicographical order.
- `reverse()` method reverses the order of the elements in an array.

```js
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3]

numbers.reverse();
console.log(numbers); // [3, 2, 1]
```

- When sorting objects, we need to specify the sorting criteria with a function passed to the `sort()` method.
- The function takes two parameters (often referred to as `a` and `b`) which represent two elements being compared.
- The function should return -1 if `a` should come before `b`, 1 if `a` should come after `b`, and 0 if they are equal.

```js
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

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
// Output:
// [
//   { id: 2, name: 'javaScript' },
//   { id: 1, name: 'Node.js' }
// ]
```

## Testing the Element of an Array

- The `every()` and `some()` methods are used to test the elements of an array based on a certain condition. These methods return a boolean value (`true` or `false`) based on whether the condition is met for all or at least one element in the array.

- The `every()` method checks whether all elements in the array pass the condition specified by the provided function. If all elements pass the condition, it returns `true`. Otherwise, it returns `false`.

- The `some()` method, on the other hand, checks whether at least one element in the array passes the condition specified by the provided function. If at least one element passes the condition, it returns `true`. Otherwise, it returns `false`.

```js
const numbers = [1, 2, 3, -4];

const allPositive = numbers.every((value) => value >= 0);
console.log(allPositive); // false

const atLeastOnePositive = numbers.some((value) => value >= 0);
console.log(atLeastOnePositive); // true
```

> \*Note that `some` and `every` are not supported in some older browsers.

## Filtering an Array

The `filter()` method can be used to filter out elements from an array that satisfy a certain condition. It will create a new array containing all the elements that pass the test implemented by the provided function.

```js
const numbers = [1, -1, 2, 3];

// Filter positive numbers
const filtered = numbers.filter((value) => value >= 0);
console.log(filtered); // [1, 2, 3]
```

Here, we created an array of numbers and used the `filter()` method to create a new array containing only the positive numbers. The callback function inside the `filter()` method checks if each element in the array is greater than or equal to zero. If it is, it returns `true`, and that element is included in the new array.

> **Note:** The `filter()` method does not modify the original array. Instead, it returns a new array containing only the elements that pass the test.

## Mapping an Array

In JavaScript, we can use the `map` method to create a new array by executing a callback function for each element in the original array. The callback function can return any value, and the returned values are collected in a new array. The original array remains unmodified.

```js
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((value) => value >= 0);
const items = filtered.map((value) => '<li>' + value + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

console.log(html); // <ul><li>1</li><li>2</li><li>3</li></ul>
```

In this example, we first filter the array to get only the positive numbers, and then we use the `map` method to create an array of HTML list items. Finally, we join the array of list items into a string and wrap it in a `<ul>` element.

We can also use `map` to transform each element of an array into a new object, as shown in the following example:

```js
const items = filtered.map((value) => ({ v: value }));

console.log(items); // [{v: 1}, {v: 2}, {v: 3}]
```

We can also chain the `filter` and `map` methods together for more concise code.

```js
const items3 = numbers
  .filter((value) => value >= 0)
  .map((value) => ({ v: value }));

console.log(items3);
```

## Reducing an Array

The `reduce()` method is used to reduce all the elements of an array into a single value, such as a number, string, object, etc. It takes two arguments, the first one is the callback function which is executed for each element of the array and returns the accumulated result. The second argument is the initial value of the accumulator.

```js
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 5
```

In this example, `reduce()` takes the initial value of the `accumulator` as 0 and the callback function adds the `currentValue` to the `accumulator` for each element in the array. The final result is returned as the `sum`.

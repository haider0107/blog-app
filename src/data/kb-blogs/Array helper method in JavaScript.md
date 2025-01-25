---
title: Array helper method in JavaScript
date: 2023-08-05
author: Kushal Bhargava
image:
  {
    src: "/images/blog-header/JavaScript-Logo.png",
    alt: "Array helper method in JavaScript",
  }
description: Array helper methods in JavaScript are built-in functions that provide a concise and efficient way to work with arrays.
draft: false
category: JavaScript
---

<!-- # Array helper method in JavaScript -->

Array helper methods in JavaScript are built-in functions that provide a concise and efficient way to work with arrays. They allow you to perform common operations, such as iterating, filtering, mapping, and reducing elements, without the need for explicit loops.

These methods make it easier to manipulate arrays, improve code readability, and reduce the need for manual looping and conditional checks. They are essential tools for working with arrays effectively in JavaScript.

So in this blog we are going to learn some array helper method which are essential in our day to day coding in JavaScript.

# forEach

The **`forEach`** array helper in JavaScript iterates over array elements and executes a given function for each element. It simplifies array operations without using explicit for loops.

The syntax for **`forEach`** is as follows:

```jsx
array.forEach(callback(element, index, array) {
  // Your code to be executed for each element
});

// or you can use arrow function

array.forEach((element, index, array) => {});
```

- **`array`**: The array you want to iterate over.
- **`element`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array **`forEach`** was called upon.

The **`forEach`** method in JavaScript iterates through each array element and calls a given callback function for each iteration. The callback function can perform various operations, such as logging, modification, or computation based on the element's value.

## Example

```jsx
// Write a code to push positive element to new array

const array = [1, -2, -10, 9, 5, -7, 88];

const positive = [];

array.forEach((element) => {
  // this will iterate through all the element in array
  if (element >= 0) {
    positive.push(element);
  }
});

console.log(positive);
```

# map

In JavaScript, **`map`** is an array helper method that creates a new array by calling a provided function on each element of the original array. It doesn't modify the original array, ensuring a non-destructive operation. The resulting new array will have the same length as the original one.

The syntax for **`map`** is as follows:

```jsx
const newArray = array.map(callback(element, index, array) {
  // Your code to transform each element
  return transformedElement;
});

// or you can use arrow function

const newArray = array.map((element, index, array) => {
	// Your code to transform each element
  return transformedElement;
});
```

- **`array`**: The array you want to iterate over and transform.
- **`callback`**: A function that will be called for each element in the array.
- **`element`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array **`map`** was called upon.

The **`map`** method in JavaScript applies a callback function to each element of the original array and stores the returned value in a new array. The resulting new array is then returned as the output of the map operation.

## Example

```jsx
// Write a code to output square of an array element.

const array = [1, -2, -10, 9, 5, -7, 88];

const square = array.map((element) => {
  return element * element;
});

console.log(square);
```

# filter

In JavaScript, **`filter`** is an array helper method that creates a new array with elements that meet a specific condition defined by a provided function. It doesn't modify the original array, ensuring a non-destructive operation. The resulting new array contains only the filtered elements.

The syntax for **`filter`** is as follows:

```jsx
const newArray = array.filter(callback(element, index, array) {
  // Your code to define the filtering condition
  return condition;
});

// or you can use arrow function

const newArray = array.filter((element, index, array) => {
	// Your code to define the filtering condition
  return condition;
});
```

- **`array`**: The array you want to filter.
- **`callback`**: A function that will be called for each element in the array.
- **`element`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array **`filter`** was called upon.

The **`filter`** method evaluates the provided callback function for each element in the array. If the condition specified in the callback function returns **`true`**, the element is included in the new filtered array. If the condition returns **`false`**, the element is excluded from the new array.

## Example

```jsx
// Write a code to return even number from an array to new array

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
});

console.log(evenNumbers);
```

# reduce

In JavaScript, the **`reduce`** array helper method is used to iterate through an array and accumulate a single value using a provided reducer function. It allows you to condense an array into a single value, like a number, string, object, or any other data type. The reducer function takes four arguments: an accumulator, the current element, the current index, and the original array. With **`reduce`**, you can perform complex calculations and transformations on arrays efficiently.

Until now whatever we have covered can be performed with `reduce` array helper method. It is a **Robust** array helper method.

The syntax for **`reduce`** is as follows:

```jsx
const result = array.reduce(callback(accumulator, element, index, array) {
  // Your code to update the accumulator based on the current element
  return updatedAccumulator;
}, initialValue);

// or you can use arrow function

const result = array.reduce((accumulator, element, index, array) => {
  // Your code to update the accumulator based on the current element
  return updatedAccumulator;
}, initialValue);
```

- **`array`**: The array you want to reduce.
- **`callback`**: A function that will be called for each element in the array.
- **`accumulator`**: The accumulator stores the intermediate result during the reduction process. It starts with an initial value (if provided) or the first element of the array.
- **`element`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array **`reduce`** was called upon.
- **`initialValue`** (optional): The initial value of the accumulator. If not provided, the first element of the array will be used as the initial value, and the reduction starts from the second element.

The reducer function is called for each element in the array and updates the accumulator accordingly. The final value of the accumulator after processing all elements is the result of the reduction.

## Example

Here we gonna solve all the above example with `reduce` array helper method.

```jsx
// Write a code to push positive element to new array

const array = [1, -2, -10, 9, 5, -7, 88];

const positive = array.reduce((accumulator, num) => {
  if (num >= 0) {
    accumulator.push(num);
  }
  return accumulator;
}, []);

console.log(positive);
```

```jsx
// Write a code to output square of an array element.

const num = [1, 2, 3, 4, 5];

const square = num.reduce((accumulator, num) => {
  accumulator.push(num ** 2);
  return accumulator;
}, []);

console.log(square);
```

```jsx
// Write a code to return even number from an array to new array

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.reduce((accumulator, num) => {
  if (num % 2 === 0) {
    accumulator.push(num);
  }
  return accumulator;
}, []);

console.log(evenNumber);
```

# Conclusion

Array helper methods in JavaScript, like **`forEach`**, **`map`**, **`filter`**, and **`reduce`**, provide efficient ways to work with arrays. They allow you to iterate, transform, filter, and reduce elements, making code concise and readable. By leveraging these methods, you can handle common array operations effectively and write more expressive and bug-free code.

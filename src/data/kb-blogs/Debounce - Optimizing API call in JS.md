---
title: Debounce - Optimizing API call in JS
date: 2023-12-06
author: Kushal Bhargava
image:
  {
    src: "/images/blog-header/JavaScript-Logo.png",
    alt: "Optimizing API call in JS",
  }
description: In this project, we’ll build out a custom Astro component for post tags.
draft: false
category: JavaScript
---

# Debounce - Optimizing API call in JS

Consider a scenario where a search bar initiates a request for suggestions with each keystroke. Rapid typing can lead to an excess of unnecessary requests, impacting the app's performance.

**Debounce** comes into play by introducing a brief delay. This ensures that the function, such as an API call, only activates after the user takes a momentary pause. This approach optimizes the frequency of function calls, resulting in a smoother and more responsive app.

In simple terms, debounce acts as a regulator for your functions, preventing them from causing congestion and ultimately enhancing the overall user experience.

So, in this blog we are going to learn about what is Debounce and why do we use it with example.

# What is Debounce ?

The concept of **debounce** originates from the realm of electronics. Picture this: you press a button on your TV remote, and the signal swiftly reaches the remote's microchip. However, the speed is such that before you release the button, it bounces, causing the microchip to register your "click" multiple times.

![https://miro.medium.com/v2/resize:fit:1400/1*xiF_YM-HSjRdZuRXUlWWMg.png](https://miro.medium.com/v2/resize:fit:1400/1*xiF_YM-HSjRdZuRXUlWWMg.png)

To address this issue, upon receiving a signal from the button, the microchip momentarily halts the processing of signals from the button for a few microseconds. This temporary pause ensures that even if you attempt to press the button again quickly, it won't register during this short timeframe.

# Debounce in JavaScript

In the context of JavaScript, the scenario parallels this. The aim is to execute a function but restrict it to a single occurrence per use case.

Imagine a situation where the goal is to provide suggestions for a search query, but only after a visitor has finished typing it.

Here is the debounce function, let’s understand it :

```jsx
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
```

1. `function debounce(func, timeout = 300) {`
   - This line defines a function named `debounce`.
   - It takes two parameters: `func` (the function to be debounced) and `timeout` (the delay in milliseconds before the function is executed after the last invocation).
2. `let timer;`
   - This line declares a variable `timer` without assigning it a value. It will be used to store the reference to the setTimeout timer.
3. `return (...args) => {`
   - This line begins the definition of an arrow function that the `debounce` function will return.
   - It uses the spread operator (`...args`) to capture any number of arguments passed to the debounced function.
4. `clearTimeout(timer);`
   - This line clears any existing timeout that was previously set. This is crucial to prevent the immediate execution of the function if the debounced function is called again within the specified timeout period.
5. `timer = setTimeout(() => { func.apply(this, args); }, timeout);`
   - This line sets a new timeout using `setTimeout`.
   - The timeout function is an arrow function that calls the original `func` with the provided arguments (`args`) after the specified `timeout` period.
   - The `apply` method is used to set the correct context (`this`) and pass the arguments to the original function.
6. `};`
   - Closes the arrow function and the `debounce` function.

To use this `debounce` function, you can pass a function to it along with an optional timeout. The returned debounced function can then be invoked, and it will delay the execution of the original function until a specified amount of time has passed since the last invocation. This is particularly useful for scenarios like handling user input where you want to wait for a pause in typing before triggering an action.

## Example :

Let's say I want to trigger the **`addContent`** function whenever the user has finished writing. In this case, I will use debounce to call the **`addContent`** function.

```jsx
const addContent = debounce(async (text) => {
  try {
    let data = {
      date: Date(),
      content: text,
    };

    let res = await axios.post("/api/application/content", data, {
      headers: {
        "auth-token": Cookies.get("token"),
      },
    });

    console.log(res.data);

    setContent(text);
  } catch (error) {
    console.log(error);
  }
}, 1000);
```

1. **Function Definition:**
   - **`addContent`** is the main function that does something with the provided **`text`**.
2. **Debouncing:**
   - **`debounce`** is applied to **`addContent`** with a timeout of 1000 milliseconds.
   - The result is a new function, **`addContent`**, that delays execution by 1 second.
3. **Usage:**
   - When you call **`addContent(text)`**, the debounced version is used.
   - It ensures that if **`addContent`** is called frequently, it only executes once per second.

This helps prevent rapid and unnecessary calls, especially useful for scenarios like handling user input where you want to wait for a pause before triggering a time-consuming operation.

Now, you can call this function in **`handleInput`**. Whenever there is a change in the input, it will wait for 1 second and then send the data to the API.

```jsx
const handleInput = (e) => {
  const text = e.target.innerText;
  addContent(text);
};
```

```html
<div
  contenteditable="true"
  onInput="{handleInput}"
  ref="{contentEditableRef}"
></div>
```

# Conclusion

In brief, debounce in JavaScript is a practical approach to manage function calls, especially in scenarios with frequent user input. By introducing a short delay, debounce ensures that functions execute thoughtfully, preventing potential performance issues. This method is valuable for improving the responsiveness of web applications, maintaining a delicate balance between user experience and efficient function execution.

---
title: What is Epoch time ? Also know as UNIX time or POSIX time
date: 2023-08-17
author: Kushal Bhargava
image:
  {
    src: "https://www.unixtutorial.org/images/posts/unix-epoch.jpg",
    alt: "UNIX time or POSIX time",
  }
description: Epoch time is commonly used in various applications for timestamping, measuring time intervals, and performing time-related calculations.
draft: false
category: JavaScript
---

# What is Epoch time ? Also know as UNIX time or POSIX time

Epoch time, also known as Unix time or POSIX time, is a system for representing timestamps as a single integer value, counting the number of seconds that have elapsed since a specific reference point called the "epoch." This reference point is typically defined as 00:00:00 Coordinated Universal Time (UTC) on January 1, 1970.

Epoch time is commonly used in various applications for timestamping, measuring time intervals, and performing time-related calculations.

In this blog we are going to learn how to use epoch time to calculate local time like the date and time of where you are living and to convert it to UTC time standard using JavaScript.

# How to extract current Epoch or UNIX time ?

In JavaScript, you can get the current epoch time (also known as Unix timestamp) using the **`Date`** object. Here's an example of how to get the current epoch time using JavaScript:

```jsx
// Get the current epoch time in milliseconds
const currentEpochTime = Date.now();

console.log(currentEpochTime);

// Output
1692274374768 // It will be different when you run it
```

This code snippet will output the number of milliseconds that have passed since the Unix epoch. You can also convert this time into seconds by dividing the milliseconds by 1000:

```jsx
// Get the current epoch time in seconds
const currentEpochTimeInSeconds = Math.floor(Date.now() / 1000);

console.log(currentEpochTimeInSeconds);

// Output
1692274418 // It will be different when you run it
```

APIs usually pass epoch time in second’s, so you have to first convert epoch second’s time in milliseconds.

Now we will extract local date and time ( where you are living or where your system time is set to ) form Epoch or UNIX timestamp :

```jsx
// Get the current epoch time in milliseconds
const currentEpochTime = Date.now();

// Create a Date object from the local date and time in milliseconds
var localDate = new Date(currentLocalDateMillis);

// Format the local date and time as a string (using the local time zone)
var localDateTimeString = localDate.toLocaleString(); // Using default options

console.log("Local Date and Time:", localDateTimeString);

// Output

8/17/2023, 8:52:55 PM
```

In above code snippet we have extracted date and time both, but if we want to extract only date or time, we can use following `Date` methods :

- `getFullYear()`	Get year as a four digit number (yyyy)
- `getMonth()`	Get month as a number (0-11)
- `getDate()`	Get day as a number (1-31)
- `getDay()`	Get weekday as a number (0-6)
- `getHours()`	Get hour (0-23)
- `getMinutes()`	Get minute (0-59)
- `getSeconds()`	Get second (0-59)
- `getMilliseconds()`	 Get millisecond (0-999)
- `getTime()`	Get time (milliseconds since January 1, 1970)

Now we will use above method to extract current time form Epoch or UNIX time :

```jsx
function convertEpochToLocalTime(epochTimestamp) {
  const date = new Date(epochTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  let formattedHours = hours % 12;
  if (formattedHours === 0) {
    formattedHours = 12; // 12:00 AM or 12:00 PM
  }
  
  const amOrPm = hours < 12 ? 'AM' : 'PM';
  
  const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amOrPm}`;
  
  return formattedTime;
}

const epochTimestamp = 1661870592;
const formattedTime = convertEpochToLocalTime(epochTimestamp);

console.log(formattedTime);
```

# Extracting UTC time from Epoch or UNIX time

To convert an epoch timestamp to UTC time in JavaScript, you can use the **`Date`** object. Here's how you can do it:

```jsx
const epochTimestamp = 1628899200; // Replace this with your epoch timestamp

// Convert epoch timestamp to UTC date and time
const utcDate = new Date(epochTimestamp * 1000);

console.log("UTC Time:", utcDate.toUTCString());
```

In this example, **`1628899200`** is the epoch timestamp representing a specific moment in time. The **`Date`** object in JavaScript works with milliseconds, so you need to multiply the epoch timestamp by 1000 to convert it from seconds to milliseconds before creating the **`Date`** object.

The **`toUTCString()`** method of the **`Date`** object is used to obtain a string representation of the UTC date and time.

Now, if we want to extract date or time we can use following `Date` methods :

- `getUTCDate()`	Returns the UTC date
- `getUTCFullYear()`	Returns the UTC year
- `getUTCMonth()`	Returns the UTC month
- `getUTCDay()`	 Returns the UTC day
- `getUTCHours()`	Returns the UTC hour
- `getUTCMinutes()`	Returns the UTC minutes
- `getUTCSeconds()`	Returns the UTC seconds
- `getUTCMilliseconds()`	Returns the UTC milliseconds

Now we will use above method to extract current time form Epoch or UNIX time :

```jsx
const epochTimestamp = 1628899200; // Replace this with your epoch timestamp

// Convert epoch timestamp to UTC date and time
const utcDate = new Date(epochTimestamp * 1000);

// Get individual components of the UTC date
const hours = utcDate.getUTCHours();
const minutes = utcDate.getUTCMinutes();
const seconds = utcDate.getUTCSeconds();

// Convert hours to 12-hour format
const twelveHourFormat = hours % 12 || 12;
const ampm = hours < 12 ? "AM" : "PM";

// Construct the formatted time string
const formattedTime = `${twelveHourFormat}:${minutes}:${seconds} ${ampm}`;

console.log("UTC Time (12-hour format):", formattedTime);
```

# **Conclusion**

Epoch time serves as a numerical representation of time by counting seconds (or milliseconds) elapsed since a predefined starting point known as the Unix epoch, often set at January 1, 1970. It offers a standardized approach for computers to manage time, facilitating comparisons and calculations across diverse systems and locations.

# References

[https://www.unixtutorial.org/unix-epoch/](https://www.unixtutorial.org/unix-epoch/)

[https://www.w3schools.com/js/js_date_methods.asp](https://www.w3schools.com/js/js_date_methods.asp)
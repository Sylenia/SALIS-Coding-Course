---
layout: default
title: JavaScript
parent: Resource Hub
nav_order: 3
---

# ⚡ JavaScript - Programming Language of the Web

## What is JavaScript?

JavaScript (JS) is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites. It runs in web browsers and can also be used server-side with Node.js.

---

## 📚 Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Variables and Data Types](#variables-and-data-types)
3. [Operators](#operators)
4. [Control Flow](#control-flow)
5. [Functions](#functions)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [DOM Manipulation](#dom-manipulation)
9. [Events](#events)
10. [Asynchronous JavaScript](#asynchronous-javascript)
11. [ES6+ Features](#es6-features)
12. [Best Practices](#best-practices)
13. [Resources](#resources)

---

## Introduction to JavaScript

### Adding JavaScript to HTML

#### External File (Recommended)

```html
<script src="script.js"></script>
```

#### Inline Script

```html
<script>
    console.log('Hello, World!');
</script>
```

### Where to Place Script Tags

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Scripts that need to load first -->
    <script src="critical.js"></script>
</head>
<body>
    <!-- Content -->
    
    <!-- Scripts at the end (recommended) -->
    <script src="main.js"></script>
</body>
</html>
```

Or use `defer` attribute:

```html
<script src="main.js" defer></script>
```

### The Console

```javascript
console.log('Regular message');
console.warn('Warning message');
console.error('Error message');
console.table([{name: 'Alice'}, {name: 'Bob'}]);
```

---

## Variables and Data Types

### Declaring Variables

```javascript
// const - cannot be reassigned (preferred)
const PI = 3.14159;
const name = 'Alice';

// let - can be reassigned
let score = 0;
score = 100;

// var - old way (avoid using)
var oldWay = 'not recommended';
```

### Data Types

#### Primitive Types

```javascript
// String
const greeting = 'Hello';
const name = "World";
const template = `Hello, ${name}!`;  // Template literal

// Number
const integer = 42;
const decimal = 3.14;
const negative = -10;

// Boolean
const isActive = true;
const isComplete = false;

// Undefined
let notAssigned;  // undefined

// Null
const empty = null;

// Symbol (ES6)
const unique = Symbol('description');

// BigInt (ES2020)
const bigNumber = 9007199254740991n;
```

#### Type Checking

```javascript
typeof 'hello'     // 'string'
typeof 42          // 'number'
typeof true        // 'boolean'
typeof undefined   // 'undefined'
typeof null        // 'object' (JavaScript quirk)
typeof {}          // 'object'
typeof []          // 'object'
typeof function(){} // 'function'
```

---

## Operators

### Arithmetic Operators

```javascript
const a = 10;
const b = 3;

a + b    // 13 (addition)
a - b    // 7 (subtraction)
a * b    // 30 (multiplication)
a / b    // 3.333... (division)
a % b    // 1 (modulus/remainder)
a ** b   // 1000 (exponentiation)
```

### Assignment Operators

```javascript
let x = 10;

x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x++;     // x = x + 1  → 7
x--;     // x = x - 1  → 6
```

### Comparison Operators

```javascript
5 == '5'    // true (loose equality)
5 === '5'   // false (strict equality - recommended)
5 != '5'    // false
5 !== '5'   // true
5 > 3       // true
5 < 3       // false
5 >= 5      // true
5 <= 4      // false
```

### Logical Operators

```javascript
true && true   // true (AND)
true || false  // true (OR)
!true          // false (NOT)

// Short-circuit evaluation
const result = value || 'default';
const name = user && user.name;

// Nullish coalescing (ES2020)
const value = null ?? 'default';  // 'default'
const value = 0 ?? 'default';     // 0
```

---

## Control Flow

### Conditional Statements

```javascript
// if...else
const age = 18;

if (age >= 18) {
    console.log('Adult');
} else if (age >= 13) {
    console.log('Teenager');
} else {
    console.log('Child');
}

// Ternary operator
const status = age >= 18 ? 'Adult' : 'Minor';

// Switch
const day = 'Monday';

switch (day) {
    case 'Monday':
    case 'Tuesday':
        console.log('Weekday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Invalid day');
}
```

### Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// for...of (for iterables like arrays)
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// for...in (for object properties)
const person = { name: 'Alice', age: 25 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) break;     // exit loop
    if (i === 3) continue;  // skip iteration
    console.log(i);
}
```

---

## Functions

### Function Declaration

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice'));  // Hello, Alice!
```

### Function Expression

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Arrow Functions (ES6)

```javascript
// Basic arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Concise body (single expression)
const greet = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHi = () => console.log('Hi!');
```

### Default Parameters

```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

greet();        // Hello, Guest!
greet('Alice'); // Hello, Alice!
```

### Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4);  // 10
```

### Callback Functions

```javascript
function processData(data, callback) {
    const result = data.toUpperCase();
    callback(result);
}

processData('hello', function(result) {
    console.log(result);  // HELLO
});

// Using arrow function
processData('hello', result => console.log(result));
```

---

## Arrays

### Creating Arrays

```javascript
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null];
const empty = [];
```

### Accessing Elements

```javascript
const fruits = ['apple', 'banana', 'orange'];

fruits[0]          // 'apple'
fruits[1]          // 'banana'
fruits[fruits.length - 1]  // 'orange' (last element)
```

### Array Methods

```javascript
const fruits = ['apple', 'banana'];

// Adding/Removing
fruits.push('orange');     // Add to end → ['apple', 'banana', 'orange']
fruits.pop();              // Remove from end → ['apple', 'banana']
fruits.unshift('grape');   // Add to start → ['grape', 'apple', 'banana']
fruits.shift();            // Remove from start → ['apple', 'banana']

// Finding
fruits.indexOf('banana');  // 1 (index of element)
fruits.includes('apple');  // true
fruits.find(f => f.length > 5);  // 'banana' (first match)
fruits.findIndex(f => f.length > 5);  // 1

// Transforming
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// reduce - accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 15

// forEach - iterate without returning
numbers.forEach(n => console.log(n));

// Sorting
const names = ['Charlie', 'Alice', 'Bob'];
names.sort();  // ['Alice', 'Bob', 'Charlie']

const nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b);  // [1, 2, 5, 10] (ascending)

// Other
const arr = [1, 2, 3];
arr.reverse();              // [3, 2, 1]
arr.join('-');              // '3-2-1'
arr.slice(0, 2);            // [3, 2] (doesn't modify original)
arr.splice(1, 1, 'new');    // Remove 1 item at index 1, add 'new'
```

### Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];               // [1, 2, 3]
```

### Destructuring

```javascript
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

console.log(first);   // 'red'
console.log(second);  // 'green'

// Skip elements
const [, , blue] = colors;  // 'blue'

// Rest
const [head, ...tail] = colors;  // head: 'red', tail: ['green', 'blue']
```

---

## Objects

### Creating Objects

```javascript
const person = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    hobbies: ['reading', 'gaming'],
    address: {
        city: 'Dublin',
        country: 'Ireland'
    }
};
```

### Accessing Properties

```javascript
// Dot notation
person.name        // 'Alice'
person.address.city // 'Dublin'

// Bracket notation
person['name']     // 'Alice'
person['age']      // 25

// Dynamic property access
const key = 'name';
person[key]        // 'Alice'
```

### Modifying Objects

```javascript
// Add/update properties
person.email = 'alice@example.com';
person.age = 26;

// Delete properties
delete person.isStudent;
```

### Object Methods

```javascript
const person = {
    name: 'Alice',
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

person.greet();  // "Hello, I'm Alice"
```

### Object Methods (Built-in)

```javascript
const person = { name: 'Alice', age: 25 };

Object.keys(person);    // ['name', 'age']
Object.values(person);  // ['Alice', 25]
Object.entries(person); // [['name', 'Alice'], ['age', 25]]
Object.assign({}, person, { city: 'Dublin' });  // Merge objects
```

### Destructuring

```javascript
const person = { name: 'Alice', age: 25, city: 'Dublin' };

const { name, age } = person;
console.log(name);  // 'Alice'

// Rename
const { name: userName } = person;
console.log(userName);  // 'Alice'

// Default values
const { country = 'Unknown' } = person;
console.log(country);  // 'Unknown'

// Nested
const { address: { city } } = { address: { city: 'Dublin' } };
```

### Spread Operator

```javascript
const person = { name: 'Alice', age: 25 };
const employee = { ...person, job: 'Developer' };
// { name: 'Alice', age: 25, job: 'Developer' }
```

---

## DOM Manipulation

The DOM (Document Object Model) allows JavaScript to interact with HTML.

### Selecting Elements

```javascript
// By ID
const element = document.getElementById('myId');

// By class name
const elements = document.getElementsByClassName('myClass');

// By tag name
const paragraphs = document.getElementsByTagName('p');

// Query selector (returns first match)
const element = document.querySelector('.myClass');
const element = document.querySelector('#myId');
const element = document.querySelector('div.container > p');

// Query selector all (returns all matches)
const elements = document.querySelectorAll('.myClass');
```

### Modifying Elements

```javascript
const element = document.querySelector('#myElement');

// Text content
element.textContent = 'New text';
element.innerText = 'New text';  // Similar but respects CSS

// HTML content
element.innerHTML = '<strong>Bold text</strong>';

// Attributes
element.setAttribute('class', 'newClass');
element.getAttribute('class');
element.removeAttribute('class');

// Shorthand for common attributes
element.id = 'newId';
element.className = 'class1 class2';
element.src = 'image.jpg';
element.href = 'https://example.com';

// Classes
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active');
element.classList.contains('active');  // true/false

// Styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
```

### Creating and Adding Elements

```javascript
// Create element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.classList.add('greeting');

// Add to DOM
document.body.appendChild(newDiv);

// Insert before
const parent = document.querySelector('.container');
const reference = document.querySelector('.reference');
parent.insertBefore(newDiv, reference);

// Modern methods
parent.append(newDiv);          // Add to end
parent.prepend(newDiv);         // Add to beginning
reference.before(newDiv);       // Add before reference
reference.after(newDiv);        // Add after reference

// Remove element
element.remove();
// Or
parent.removeChild(element);

// Clone element
const clone = element.cloneNode(true);  // true = deep clone
```

---

## Events

### Adding Event Listeners

```javascript
const button = document.querySelector('#myButton');

// addEventListener (recommended)
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event.target);  // The element that was clicked
});

// Arrow function
button.addEventListener('click', (e) => {
    console.log('Clicked!');
});

// Named function
function handleClick(event) {
    console.log('Clicked!');
}
button.addEventListener('click', handleClick);

// Remove event listener
button.removeEventListener('click', handleClick);
```

### Common Events

```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// Keyboard events
document.addEventListener('keydown', handler);
document.addEventListener('keyup', handler);
document.addEventListener('keypress', handler);  // deprecated

// Form events
form.addEventListener('submit', handler);
input.addEventListener('change', handler);
input.addEventListener('input', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

### Event Object

```javascript
document.addEventListener('click', function(event) {
    event.target;           // Element that triggered event
    event.currentTarget;    // Element with the listener
    event.type;             // Event type ('click')
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
});

// Keyboard event
document.addEventListener('keydown', function(event) {
    event.key;      // 'Enter', 'a', 'ArrowUp', etc.
    event.code;     // 'Enter', 'KeyA', 'ArrowUp', etc.
    event.ctrlKey;  // true if Ctrl was pressed
    event.shiftKey; // true if Shift was pressed
    event.altKey;   // true if Alt was pressed
});
```

### Event Delegation

```javascript
// Instead of adding listeners to each item
const list = document.querySelector('#myList');

list.addEventListener('click', function(event) {
    if (event.target.matches('li')) {
        console.log('List item clicked:', event.target.textContent);
    }
});
```

---

## Asynchronous JavaScript

### Promises

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Data loaded!');
        } else {
            reject('Error loading data');
        }
    }, 1000);
});

// Using a promise
myPromise
    .then(result => {
        console.log(result);  // 'Data loaded!'
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Done!');
    });
```

### Async/Await

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

### Fetch API

```javascript
// GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST request
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alice', age: 25 })
})
    .then(response => response.json())
    .then(data => console.log(data));

// With async/await
async function postData() {
    const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Alice' })
    });
    const data = await response.json();
    return data;
}
```

---

## ES6+ Features

### Template Literals

```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!`;

// Multiline strings
const html = `
    <div>
        <p>Hello</p>
    </div>
`;
```

### Destructuring

```javascript
// Arrays
const [a, b] = [1, 2];

// Objects
const { name, age } = { name: 'Alice', age: 25 };
```

### Spread and Rest

```javascript
// Spread
const arr = [...arr1, ...arr2];
const obj = { ...obj1, ...obj2 };

// Rest
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
```

### Optional Chaining (ES2020)

```javascript
const name = user?.profile?.name;
const result = object?.method?.();
const item = array?.[0];
```

### Nullish Coalescing (ES2020)

```javascript
const value = null ?? 'default';  // 'default'
const value = 0 ?? 'default';     // 0 (unlike ||)
```

### Modules

```javascript
// Export (math.js)
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export default function multiply(a, b) {
    return a * b;
}

// Import (main.js)
import multiply, { PI, add } from './math.js';
import * as math from './math.js';
```

---

## Best Practices

### ✅ Do's

1. **Use `const` by default**, `let` when needed
2. **Use strict equality** (`===` and `!==`)
3. **Use meaningful variable names**
4. **Write small, focused functions**
5. **Handle errors** with try/catch
6. **Use modern features** (arrow functions, template literals)
7. **Comment complex logic**

### ❌ Don'ts

1. **Don't use `var`**
2. **Don't pollute global scope**
3. **Don't use `==`** (loose equality)
4. **Don't modify DOM in loops** (batch changes)
5. **Don't ignore errors**

---

## 🔗 Resources

### Official Documentation

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) - Comprehensive JS documentation
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [ECMAScript Specification](https://tc39.es/ecma262/) - Official language spec

### Interactive Learning

- [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - Free curriculum
- [Codecademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) - Interactive lessons
- [The Odin Project - JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) - Project-based learning
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book

### Practice

- [Codewars](https://www.codewars.com/) - Coding challenges
- [LeetCode](https://leetcode.com/) - Algorithm problems
- [Exercism JavaScript Track](https://exercism.org/tracks/javascript) - Mentored practice

### Tools

- [Babel REPL](https://babeljs.io/repl) - Test modern JS syntax
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

---

## 📝 Exercises

### Exercise 1: Counter App

Create a counter with:

- Display showing current count
- Increment button (+)
- Decrement button (-)
- Reset button

### Exercise 2: To-Do List

Create a to-do list with:

- Input field for new tasks
- Add button
- Display list of tasks
- Delete button for each task

### Exercise 3: Quiz Game

Create a simple quiz:

- Array of questions and answers
- Display one question at a time
- Multiple choice buttons
- Show score at the end

---

*Previous: [CSS Documentation](../02-css/README.md) | Next: [Git & GitHub Documentation](../04-git-github/README.md)*

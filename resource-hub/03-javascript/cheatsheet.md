# 📋 JavaScript Cheat Sheet

Quick reference guide for JavaScript syntax and methods.

---

## Variables

```javascript
const name = 'Alice';    // Cannot be reassigned
let age = 25;            // Can be reassigned
var old = 'avoid';       // Old syntax, avoid
```

---

## Data Types

```javascript
// Primitives
const string = 'Hello';
const number = 42;
const boolean = true;
const nothing = null;
let notDefined;          // undefined

// Complex
const array = [1, 2, 3];
const object = { key: 'value' };
const func = () => {};

// Type checking
typeof 'hello'           // 'string'
typeof 42                // 'number'
typeof true              // 'boolean'
Array.isArray([])        // true
```

---

## String Methods

```javascript
const str = 'Hello World';

str.length               // 11
str.toUpperCase()        // 'HELLO WORLD'
str.toLowerCase()        // 'hello world'
str.trim()               // Remove whitespace
str.split(' ')           // ['Hello', 'World']
str.replace('World', 'JS') // 'Hello JS'
str.includes('World')    // true
str.startsWith('Hello')  // true
str.endsWith('World')    // true
str.indexOf('o')         // 4
str.slice(0, 5)          // 'Hello'
str.substring(0, 5)      // 'Hello'
str.charAt(0)            // 'H'
str.repeat(2)            // 'Hello WorldHello World'
str.padStart(15, '-')    // '----Hello World'
str.padEnd(15, '-')      // 'Hello World----'

// Template literals
const name = 'Alice';
`Hello, ${name}!`        // 'Hello, Alice!'
```

---

## Number Methods

```javascript
const num = 3.14159;

num.toFixed(2)           // '3.14'
num.toString()           // '3.14159'
parseInt('42')           // 42
parseFloat('3.14')       // 3.14
Number('42')             // 42
Number.isInteger(42)     // true
Number.isNaN(NaN)        // true

Math.round(3.5)          // 4
Math.floor(3.9)          // 3
Math.ceil(3.1)           // 4
Math.abs(-5)             // 5
Math.max(1, 2, 3)        // 3
Math.min(1, 2, 3)        // 1
Math.random()            // 0-1
Math.pow(2, 3)           // 8
Math.sqrt(16)            // 4
```

---

## Arrays

```javascript
const arr = [1, 2, 3, 4, 5];

// Properties
arr.length               // 5

// Access
arr[0]                   // 1
arr[arr.length - 1]      // 5 (last)

// Add/Remove
arr.push(6)              // Add to end
arr.pop()                // Remove from end
arr.unshift(0)           // Add to start
arr.shift()              // Remove from start
arr.splice(2, 1, 'new')  // Remove/insert at index

// Find
arr.indexOf(3)           // 2
arr.includes(3)          // true
arr.find(x => x > 3)     // 4
arr.findIndex(x => x > 3) // 3

// Transform
arr.map(x => x * 2)      // [2, 4, 6, 8, 10]
arr.filter(x => x > 2)   // [3, 4, 5]
arr.reduce((a, b) => a + b, 0) // 15

// Iterate
arr.forEach(x => console.log(x))

// Sort
arr.sort((a, b) => a - b) // Ascending
arr.sort((a, b) => b - a) // Descending

// Other
arr.reverse()            // [5, 4, 3, 2, 1]
arr.slice(1, 3)          // [2, 3]
arr.join('-')            // '1-2-3-4-5'
arr.concat([6, 7])       // [1, 2, 3, 4, 5, 6, 7]
arr.flat()               // Flatten nested arrays
[...arr]                 // Copy array
```

---

## Objects

```javascript
const obj = {
    name: 'Alice',
    age: 25,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

// Access
obj.name                 // 'Alice'
obj['name']              // 'Alice'
obj?.address?.city       // undefined (optional chaining)

// Modify
obj.email = 'a@b.com'    // Add property
delete obj.age           // Remove property

// Methods
Object.keys(obj)         // ['name', 'age', 'greet']
Object.values(obj)       // ['Alice', 25, ƒ]
Object.entries(obj)      // [['name', 'Alice'], ...]
Object.assign({}, obj)   // Copy object
{ ...obj }               // Copy object (spread)

// Destructuring
const { name, age } = obj;
const { name: n } = obj; // Rename
```

---

## Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const greet = (name) => `Hello, ${name}!`;
const greet = name => `Hello, ${name}!`;

// Default parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;

// Rest parameters
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
```

---

## Control Flow

```javascript
// If/else
if (condition) {
    // code
} else if (other) {
    // code
} else {
    // code
}

// Ternary
const result = condition ? 'yes' : 'no';

// Switch
switch (value) {
    case 'a':
        break;
    case 'b':
        break;
    default:
}

// Loops
for (let i = 0; i < 5; i++) { }
for (const item of array) { }
for (const key in object) { }
while (condition) { }
do { } while (condition);
```

---

## DOM Selection

```javascript
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('div')
document.querySelector('.class')
document.querySelector('#id')
document.querySelectorAll('.class')
```

---

## DOM Manipulation

```javascript
const el = document.querySelector('#el');

// Content
el.textContent = 'Text';
el.innerHTML = '<b>HTML</b>';

// Attributes
el.setAttribute('class', 'new');
el.getAttribute('class');
el.removeAttribute('class');

// Classes
el.classList.add('new');
el.classList.remove('old');
el.classList.toggle('active');
el.classList.contains('active');

// Styles
el.style.color = 'red';
el.style.backgroundColor = 'blue';

// Create/Add
const div = document.createElement('div');
parent.appendChild(div);
parent.append(div);
parent.prepend(div);
el.remove();
```

---

## Events

```javascript
// Add listener
el.addEventListener('click', (e) => {
    e.target           // Element clicked
    e.preventDefault() // Prevent default
    e.stopPropagation() // Stop bubbling
});

// Common events
'click'        // Mouse click
'dblclick'     // Double click
'mouseenter'   // Mouse enters
'mouseleave'   // Mouse leaves
'keydown'      // Key pressed
'keyup'        // Key released
'submit'       // Form submitted
'change'       // Input changed
'input'        // Input typing
'focus'        // Element focused
'blur'         // Element unfocused
'load'         // Page loaded
'scroll'       // Page scrolled
'resize'       // Window resized
```

---

## Async/Await

```javascript
// Promise
fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Async/await
async function getData() {
    try {
        const res = await fetch('/api/data');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}
```

---

## Fetch API

```javascript
// GET
const res = await fetch('/api/data');
const data = await res.json();

// POST
const res = await fetch('/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Alice' })
});
```

---

## Local Storage

```javascript
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

// Store objects
localStorage.setItem('user', JSON.stringify(user));
const user = JSON.parse(localStorage.getItem('user'));
```

---

## Date

```javascript
const now = new Date();

now.getFullYear()        // 2024
now.getMonth()           // 0-11
now.getDate()            // 1-31
now.getDay()             // 0-6 (Sun-Sat)
now.getHours()           // 0-23
now.getMinutes()         // 0-59
now.getSeconds()         // 0-59
now.getTime()            // Milliseconds since 1970
now.toISOString()        // '2024-01-15T...'
now.toLocaleDateString() // '1/15/2024'
```

---

## Spread & Destructuring

```javascript
// Spread arrays
const combined = [...arr1, ...arr2];

// Spread objects
const merged = { ...obj1, ...obj2 };

// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4];

// Object destructuring
const { name, age } = person;
const { name: n, age: a } = person;
```

---

## Short-Circuit & Nullish

```javascript
// AND (returns first falsy or last value)
const result = a && b;

// OR (returns first truthy or last value)
const result = a || 'default';

// Nullish coalescing (null/undefined only)
const result = a ?? 'default';

// Optional chaining
const city = user?.address?.city;
```

---

## Console

```javascript
console.log('Message');
console.warn('Warning');
console.error('Error');
console.table([{a: 1}, {a: 2}]);
console.time('label');
console.timeEnd('label');
console.group('label');
console.groupEnd();
console.clear();
```

---

*[Back to Main Index](../README.md)*

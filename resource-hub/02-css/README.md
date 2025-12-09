# 🎨 CSS - Cascading Style Sheets

## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls colors, fonts, layouts, and the overall visual appearance of web pages.

---

## 📚 Table of Contents

1. [Introduction to CSS](#introduction-to-css)
2. [CSS Syntax and Selectors](#css-syntax-and-selectors)
3. [Colors and Typography](#colors-and-typography)
4. [The Box Model](#the-box-model)
5. [Layout Techniques](#layout-techniques)
6. [Responsive Design](#responsive-design)
7. [CSS Variables](#css-variables)
8. [Best Practices](#best-practices)
9. [Resources](#resources)

---

## Introduction to CSS

### Three Ways to Add CSS

#### 1. External Stylesheet (Recommended)

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

#### 2. Internal Stylesheet

```html
<head>
    <style>
        body {
            background-color: white;
        }
    </style>
</head>
```

#### 3. Inline Styles (Avoid)

```html
<p style="color: blue;">Blue text</p>
```

---

## CSS Syntax and Selectors

### Basic Syntax

```css
selector {
    property: value;
    another-property: value;
}
```

### Types of Selectors

#### Element Selector

```css
p {
    color: blue;
}
```

#### Class Selector

```css
.highlight {
    background-color: yellow;
}
```

#### ID Selector

```css
#header {
    font-size: 24px;
}
```

#### Universal Selector

```css
* {
    margin: 0;
    padding: 0;
}
```

#### Attribute Selector

```css
input[type="text"] {
    border: 1px solid gray;
}
```

### Combinators

```css
/* Descendant (any level) */
article p {
    line-height: 1.6;
}

/* Child (direct) */
ul > li {
    list-style: none;
}

/* Adjacent sibling */
h1 + p {
    font-size: 1.2em;
}

/* General sibling */
h1 ~ p {
    color: gray;
}
```

### Pseudo-classes

```css
/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }

/* Form states */
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
input:checked { accent-color: green; }

/* Structural */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(3n) { color: red; }

/* Other */
p:empty { display: none; }
:not(.special) { opacity: 0.8; }
```

### Pseudo-elements

```css
/* First letter/line */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

p::first-line {
    font-style: italic;
}

/* Before/After content */
.quote::before {
    content: '"';
}

.quote::after {
    content: '"';
}

/* Selection */
::selection {
    background: yellow;
    color: black;
}

/* Placeholder */
input::placeholder {
    color: gray;
}
```

### Specificity

From lowest to highest:

1. Element selectors (`p`, `div`)
2. Class selectors (`.class`)
3. ID selectors (`#id`)
4. Inline styles
5. `!important` (avoid using)

```css
/* Specificity: 0-0-1 */
p { color: blue; }

/* Specificity: 0-1-0 */
.text { color: green; }

/* Specificity: 1-0-0 */
#main { color: red; }
```

---

## Colors and Typography

### Color Values

```css
/* Named colors */
color: red;
color: blue;

/* Hexadecimal */
color: #ff0000;
color: #f00;     /* shorthand */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);

/* HSLA */
color: hsla(0, 100%, 50%, 0.5);
```

### Typography

```css
/* Font family */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;

/* Font size */
font-size: 16px;
font-size: 1rem;
font-size: 1.5em;

/* Font weight */
font-weight: normal;    /* 400 */
font-weight: bold;      /* 700 */
font-weight: 300;

/* Font style */
font-style: italic;
font-style: normal;

/* Line height */
line-height: 1.6;
line-height: 24px;

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;

/* Text transform */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Letter/word spacing */
letter-spacing: 2px;
word-spacing: 4px;
```

### Google Fonts

```html
<!-- Add to HTML <head> -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

---

## The Box Model

Every HTML element is a box with four parts:

```
┌─────────────────────────────────┐
│            MARGIN               │
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Box Model Properties

```css
.box {
    /* Content dimensions */
    width: 200px;
    height: 100px;
    
    /* Padding (inside) */
    padding: 20px;
    padding: 10px 20px;           /* vertical horizontal */
    padding: 10px 20px 15px 25px; /* top right bottom left */
    
    /* Border */
    border: 1px solid black;
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    border-radius: 8px;
    
    /* Margin (outside) */
    margin: 20px;
    margin: 0 auto;  /* center horizontally */
}
```

### Box Sizing

```css
/* Include padding and border in width/height */
* {
    box-sizing: border-box;
}
```

---

## Layout Techniques

### Display Property

```css
display: block;        /* Full width, new line */
display: inline;       /* Width of content, same line */
display: inline-block; /* Inline with block properties */
display: none;         /* Hidden, removed from flow */
display: flex;         /* Flexbox container */
display: grid;         /* Grid container */
```

### Flexbox

Flexbox is ideal for one-dimensional layouts (row OR column).

```css
.container {
    display: flex;
    
    /* Direction */
    flex-direction: row;          /* default */
    flex-direction: column;
    flex-direction: row-reverse;
    
    /* Main axis alignment */
    justify-content: flex-start;  /* default */
    justify-content: center;
    justify-content: flex-end;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    
    /* Cross axis alignment */
    align-items: stretch;         /* default */
    align-items: flex-start;
    align-items: center;
    align-items: flex-end;
    
    /* Wrapping */
    flex-wrap: nowrap;            /* default */
    flex-wrap: wrap;
    
    /* Gap between items */
    gap: 20px;
}

.item {
    flex: 1;           /* Grow equally */
    flex-grow: 1;      /* Grow factor */
    flex-shrink: 0;    /* Don't shrink */
    flex-basis: 200px; /* Base width */
    order: 2;          /* Change order */
}
```

### CSS Grid

Grid is ideal for two-dimensional layouts (rows AND columns).

```css
.container {
    display: grid;
    
    /* Define columns */
    grid-template-columns: 200px 200px 200px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    
    /* Define rows */
    grid-template-rows: 100px auto 100px;
    
    /* Gap */
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
    
    /* Alignment */
    justify-items: center;
    align-items: center;
}

.item {
    /* Span multiple columns/rows */
    grid-column: span 2;
    grid-row: span 2;
    
    /* Position */
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}
```

### Position

```css
/* Static (default) */
position: static;

/* Relative (offset from normal position) */
position: relative;
top: 10px;
left: 20px;

/* Absolute (relative to positioned ancestor) */
position: absolute;
top: 0;
right: 0;

/* Fixed (relative to viewport) */
position: fixed;
bottom: 20px;
right: 20px;

/* Sticky (switches between relative and fixed) */
position: sticky;
top: 0;
```

---

## Responsive Design

### Media Queries

```css
/* Mobile first approach */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}

/* Large desktop */
@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

### Common Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile | < 768px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1199px |
| Large Desktop | ≥ 1200px |

### Responsive Units

```css
/* Relative to root font-size */
font-size: 1rem;

/* Relative to parent font-size */
font-size: 1.5em;

/* Percentage of parent */
width: 50%;

/* Viewport width/height */
width: 100vw;
height: 100vh;

/* Min/max viewport */
font-size: min(5vw, 2rem);
font-size: clamp(1rem, 2vw, 2rem);
```

---

## CSS Variables

Custom properties (CSS Variables) allow reusable values.

```css
:root {
    /* Define variables */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --spacing-unit: 8px;
    --border-radius: 4px;
}

.button {
    /* Use variables */
    background-color: var(--primary-color);
    padding: calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius);
}

/* Override in specific context */
.dark-theme {
    --primary-color: #0056b3;
}
```

---

## Best Practices

### ✅ Do's

1. **Use external stylesheets** for better organization
2. **Use meaningful class names** (`.nav-menu`, not `.nm`)
3. **Use CSS variables** for consistent values
4. **Mobile-first approach** for responsive design
5. **Use Flexbox/Grid** for layouts
6. **Comment your code** for complex sections
7. **Use `box-sizing: border-box`** globally

### ❌ Don'ts

1. **Don't use inline styles** (hard to maintain)
2. **Don't use `!important`** unless necessary
3. **Don't use IDs for styling** (prefer classes)
4. **Don't over-nest selectors** (keep specificity low)
5. **Don't use `px` for font sizes** (use `rem`)

### CSS Reset/Normalize

```css
/* Simple reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
}

img {
    max-width: 100%;
    display: block;
}
```

---

## 🔗 Resources

### Official Documentation

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS) - Comprehensive CSS documentation
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/) - Beginner-friendly tutorials
- [CSS-Tricks](https://css-tricks.com/) - Tips, tricks, and techniques

### Interactive Learning

- [freeCodeCamp CSS Course](https://www.freecodecamp.org/learn/2022/responsive-web-design/) - Free interactive lessons
- [Codecademy CSS Course](https://www.codecademy.com/learn/learn-css) - Structured learning
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox through a game
- [Grid Garden](https://cssgridgarden.com/) - Learn CSS Grid through a game

### Tools

- [Google Fonts](https://fonts.google.com/) - Free web fonts
- [CSS Gradient Generator](https://cssgradient.io/) - Create gradients
- [Coolors](https://coolors.co/) - Color palette generator
- [Box Shadow Generator](https://www.cssmatic.com/box-shadow) - Create box shadows
- [Autoprefixer](https://autoprefixer.github.io/) - Add vendor prefixes

### Reference

- [Can I Use](https://caniuse.com/) - Browser compatibility
- [CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## 📝 Exercises

### Exercise 1: Style a Card

Create a styled card component with:

- Rounded corners
- Box shadow
- Padding
- Centered text
- Hover effect

### Exercise 2: Navigation Bar

Create a horizontal navigation bar with:

- Flexbox layout
- Hover effects on links
- Fixed position at top

### Exercise 3: Responsive Grid

Create a responsive photo gallery with:

- CSS Grid layout
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

---

*Previous: [HTML Documentation](../01-html/README.md) | Next: [JavaScript Documentation](../03-javascript/README.md)*

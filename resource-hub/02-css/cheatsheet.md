# 📋 CSS Cheat Sheet

Quick reference guide for CSS properties and values.

---

## Selectors

| Selector | Example | Description |
|----------|---------|-------------|
| `*` | `* { }` | All elements |
| `element` | `p { }` | All `<p>` elements |
| `.class` | `.intro { }` | Elements with class="intro" |
| `#id` | `#header { }` | Element with id="header" |
| `element.class` | `p.intro { }` | `<p>` with class="intro" |
| `element, element` | `h1, h2 { }` | Multiple elements |
| `element element` | `div p { }` | Descendant |
| `element > element` | `div > p { }` | Direct child |
| `element + element` | `h1 + p { }` | Adjacent sibling |
| `element ~ element` | `h1 ~ p { }` | General sibling |
| `[attr]` | `[disabled] { }` | Has attribute |
| `[attr=value]` | `[type="text"] { }` | Attribute equals |
| `:hover` | `a:hover { }` | Mouse over |
| `:focus` | `input:focus { }` | Has focus |
| `:first-child` | `li:first-child { }` | First child |
| `:nth-child(n)` | `li:nth-child(2) { }` | Nth child |
| `::before` | `p::before { }` | Insert before |
| `::after` | `p::after { }` | Insert after |

---

## Colors

```css
/* Named */
color: red;

/* Hex */
color: #ff0000;
color: #f00;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);

/* HSLA */
color: hsla(0, 100%, 50%, 0.5);
```

---

## Typography

```css
/* Font */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;       /* 100-900 */
font-style: italic;

/* Text */
text-align: center;      /* left, right, justify */
text-decoration: none;   /* underline, line-through */
text-transform: uppercase; /* lowercase, capitalize */
line-height: 1.6;
letter-spacing: 2px;
word-spacing: 4px;

/* Shorthand */
font: italic bold 16px/1.5 Arial, sans-serif;
```

---

## Box Model

```css
/* Size */
width: 200px;
height: 100px;
min-width: 100px;
max-width: 500px;

/* Padding */
padding: 10px;           /* all sides */
padding: 10px 20px;      /* vertical horizontal */
padding: 10px 20px 15px; /* top horizontal bottom */
padding: 10px 20px 15px 25px; /* top right bottom left */

/* Margin */
margin: 10px;
margin: 0 auto;          /* center horizontally */

/* Border */
border: 1px solid black;
border-radius: 8px;

/* Box sizing */
box-sizing: border-box;  /* include padding/border in width */
```

---

## Background

```css
background-color: #fff;
background-image: url('image.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;

/* Shorthand */
background: #fff url('img.jpg') no-repeat center/cover;

/* Gradient */
background: linear-gradient(to right, #ff0000, #0000ff);
background: radial-gradient(circle, #ff0000, #0000ff);
```

---

## Display & Visibility

```css
display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;

visibility: hidden;      /* hidden but takes space */
opacity: 0.5;            /* transparency */
```

---

## Flexbox

```css
/* Container */
display: flex;
flex-direction: row;     /* column, row-reverse, column-reverse */
justify-content: center; /* flex-start, flex-end, space-between, space-around */
align-items: center;     /* flex-start, flex-end, stretch */
flex-wrap: wrap;
gap: 10px;

/* Items */
flex: 1;                 /* grow shrink basis */
flex-grow: 1;
flex-shrink: 0;
flex-basis: 200px;
order: 1;
align-self: flex-end;
```

---

## Grid

```css
/* Container */
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-template-rows: 100px auto;
gap: 20px;
justify-items: center;
align-items: center;

/* Items */
grid-column: 1 / 3;      /* start / end */
grid-column: span 2;
grid-row: span 2;
```

---

## Position

```css
position: static;        /* default */
position: relative;      /* relative to normal position */
position: absolute;      /* relative to positioned ancestor */
position: fixed;         /* relative to viewport */
position: sticky;        /* switches between relative and fixed */

top: 10px;
right: 10px;
bottom: 10px;
left: 10px;

z-index: 100;            /* stack order */
```

---

## Overflow

```css
overflow: visible;       /* default */
overflow: hidden;        /* clip content */
overflow: scroll;        /* always show scrollbars */
overflow: auto;          /* show scrollbars if needed */
overflow-x: scroll;
overflow-y: hidden;
```

---

## Shadows

```css
/* Box shadow */
box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
/* x-offset y-offset blur spread color */
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
```

---

## Transitions & Animations

```css
/* Transitions */
transition: all 0.3s ease;
transition: background-color 0.3s ease-in-out;
transition-property: all;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;

/* Transform */
transform: translateX(50px);
transform: translateY(-20px);
transform: scale(1.5);
transform: rotate(45deg);
transform: skew(10deg);

/* Animation */
animation: slidein 1s ease-in-out infinite;

@keyframes slidein {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
```

---

## Media Queries

```css
/* Mobile first */
@media (min-width: 768px) { }   /* Tablet */
@media (min-width: 1024px) { }  /* Desktop */
@media (min-width: 1200px) { }  /* Large */

/* Desktop first */
@media (max-width: 1199px) { }  /* Below large */
@media (max-width: 1023px) { }  /* Below desktop */
@media (max-width: 767px) { }   /* Below tablet */

/* Orientation */
@media (orientation: landscape) { }
@media (orientation: portrait) { }

/* Print */
@media print { }
```

---

## CSS Variables

```css
:root {
    --primary: #007bff;
    --spacing: 8px;
}

.element {
    color: var(--primary);
    padding: var(--spacing);
    margin: calc(var(--spacing) * 2);
}
```

---

## Units

| Unit | Description |
|------|-------------|
| `px` | Pixels |
| `%` | Percentage of parent |
| `em` | Relative to parent font-size |
| `rem` | Relative to root font-size |
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `fr` | Fraction (grid) |
| `ch` | Width of "0" character |

---

## Common Patterns

### Center Horizontally

```css
/* Block element */
margin: 0 auto;

/* Flexbox */
display: flex;
justify-content: center;
```

### Center Vertically

```css
/* Flexbox */
display: flex;
align-items: center;
min-height: 100vh;
```

### Center Both

```css
display: flex;
justify-content: center;
align-items: center;
```

### Responsive Image

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

### Reset

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

---

*[Back to Main Index](../README.md)*

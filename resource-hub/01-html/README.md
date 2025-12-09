# 🌐 HTML - HyperText Markup Language

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using a series of elements that tell the browser how to display content.

---

## 📚 Table of Contents

1. [Introduction to HTML](#introduction-to-html)
2. [HTML Document Structure](#html-document-structure)
3. [Common HTML Elements](#common-html-elements)
4. [Semantic HTML](#semantic-html)
5. [Forms and Inputs](#forms-and-inputs)
6. [Best Practices](#best-practices)
7. [Resources](#resources)

---

## Introduction to HTML

### History

- **1991**: Tim Berners-Lee created HTML
- **1995**: HTML 2.0 became a standard
- **2014**: HTML5 was released (current standard)

### How HTML Works

HTML uses **tags** to mark up content. Tags are enclosed in angle brackets `< >` and usually come in pairs:

```html
<tagname>Content goes here</tagname>
```

### Your First HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>
```

---

## HTML Document Structure

Every HTML document follows this basic structure:

```html
<!DOCTYPE html>           <!-- Declares HTML5 -->
<html lang="en">          <!-- Root element -->
<head>                    <!-- Metadata container -->
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>                    <!-- Visible content -->
    <!-- Your content here -->
</body>
</html>
```

### Key Elements Explained

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Declares the document type as HTML5 |
| `<html>` | Root element of the page |
| `<head>` | Contains metadata (not displayed) |
| `<title>` | Sets the browser tab title |
| `<body>` | Contains all visible content |

---

## Common HTML Elements

### Text Elements

```html
<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Text formatting -->
<strong>Bold text</strong>
<em>Italic text</em>
<mark>Highlighted text</mark>
<code>Inline code</code>

<!-- Line break and horizontal rule -->
<br>
<hr>
```

### Lists

```html
<!-- Unordered list (bullets) -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Links and Images

```html
<!-- Links -->
<a href="https://example.com">Visit Example</a>
<a href="about.html">About Page</a>
<a href="#section-id">Jump to Section</a>

<!-- Images -->
<img src="image.jpg" alt="Description of image">
<img src="https://example.com/photo.png" alt="Online image" width="300">
```

### Tables

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>17</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>16</td>
        </tr>
    </tbody>
</table>
```

### Divisions and Spans

```html
<!-- Block-level container -->
<div class="container">
    <p>Content inside a div</p>
</div>

<!-- Inline container -->
<p>This is <span class="highlight">highlighted</span> text.</p>
```

---

## Semantic HTML

Semantic elements clearly describe their meaning to both the browser and developer.

### Why Use Semantic HTML?

- **Accessibility**: Screen readers understand the page structure
- **SEO**: Search engines better understand your content
- **Maintainability**: Code is easier to read and maintain

### Semantic Elements

```html
<header>      <!-- Page or section header -->
<nav>         <!-- Navigation links -->
<main>        <!-- Main content (one per page) -->
<article>     <!-- Self-contained content -->
<section>     <!-- Thematic grouping of content -->
<aside>       <!-- Sidebar content -->
<footer>      <!-- Page or section footer -->
<figure>      <!-- Self-contained media -->
<figcaption>  <!-- Caption for figure -->
```

### Example Semantic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content...</p>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
```

---

## Forms and Inputs

Forms allow users to submit data to a website.

### Basic Form Structure

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Submit</button>
</form>
```

### Input Types

```html
<input type="text">        <!-- Single-line text -->
<input type="password">    <!-- Password (hidden) -->
<input type="email">       <!-- Email validation -->
<input type="number">      <!-- Numeric input -->
<input type="date">        <!-- Date picker -->
<input type="checkbox">    <!-- Checkbox -->
<input type="radio">       <!-- Radio button -->
<input type="file">        <!-- File upload -->
<input type="range">       <!-- Slider -->
<input type="color">       <!-- Color picker -->

<textarea></textarea>      <!-- Multi-line text -->
<select>                   <!-- Dropdown -->
    <option>Option 1</option>
    <option>Option 2</option>
</select>
```

---

## Best Practices

### ✅ Do's

1. **Always include `<!DOCTYPE html>`** at the top
2. **Use semantic elements** when possible
3. **Always add `alt` attributes** to images
4. **Use proper indentation** for readability
5. **Validate your HTML** using the W3C Validator
6. **Use lowercase** for tag names
7. **Close all tags** properly

### ❌ Don'ts

1. **Don't skip heading levels** (h1 → h3)
2. **Don't use `<br>` for spacing** (use CSS)
3. **Don't use tables for layout** (use CSS Grid/Flexbox)
4. **Don't use deprecated tags** like `<center>` or `<font>`
5. **Don't forget the `lang` attribute** on `<html>`

---

## 🔗 Resources

### Official Documentation

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML) - Comprehensive HTML documentation
- [W3C HTML Specification](https://html.spec.whatwg.org/) - Official HTML standard
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/) - Beginner-friendly tutorials

### Interactive Learning

- [freeCodeCamp HTML Course](https://www.freecodecamp.org/learn/2022/responsive-web-design/) - Free interactive lessons
- [Codecademy HTML Course](https://www.codecademy.com/learn/learn-html) - Structured learning path
- [The Odin Project - HTML](https://www.theodinproject.com/paths/foundations/courses/foundations#html-foundations) - Project-based learning

### Tools

- [W3C HTML Validator](https://validator.w3.org/) - Check your HTML for errors
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
- [HTML Entity Reference](https://html.spec.whatwg.org/multipage/named-characters.html) - Special characters

### Practice

- [HTML Exercises on W3Schools](https://www.w3schools.com/html/html_exercises.asp)
- [Frontend Mentor](https://www.frontendmentor.io/) - Real-world projects

---

## 📝 Exercises

### Exercise 1: Personal Profile Page

Create a webpage about yourself with:

- A heading with your name
- A paragraph about your hobbies
- An image (can be a placeholder)
- A list of your favorite things

### Exercise 2: Recipe Page

Create a recipe page with:

- Recipe title
- List of ingredients (unordered list)
- Step-by-step instructions (ordered list)
- An image of the dish

### Exercise 3: Contact Form

Create a contact form with:

- Name input
- Email input
- Message textarea
- Submit button

---

*Next: [CSS Documentation](../02-css/README.md)*

# 📋 HTML Cheat Sheet

Quick reference guide for common HTML elements and attributes.

---

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content here -->
    <script src="script.js"></script>
</body>
</html>
```

---

## Text Elements

| Element | Description | Example |
|---------|-------------|---------|
| `<h1>` - `<h6>` | Headings | `<h1>Title</h1>` |
| `<p>` | Paragraph | `<p>Text</p>` |
| `<strong>` | Bold (important) | `<strong>Bold</strong>` |
| `<em>` | Italic (emphasis) | `<em>Italic</em>` |
| `<mark>` | Highlighted | `<mark>Highlight</mark>` |
| `<small>` | Smaller text | `<small>Fine print</small>` |
| `<del>` | Deleted text | `<del>Removed</del>` |
| `<ins>` | Inserted text | `<ins>Added</ins>` |
| `<sub>` | Subscript | `H<sub>2</sub>O` |
| `<sup>` | Superscript | `x<sup>2</sup>` |
| `<code>` | Inline code | `<code>var x</code>` |
| `<pre>` | Preformatted | `<pre>  spaces  </pre>` |
| `<blockquote>` | Quote block | `<blockquote>Quote</blockquote>` |
| `<br>` | Line break | `Line 1<br>Line 2` |
| `<hr>` | Horizontal rule | `<hr>` |

---

## Links

```html
<!-- External link -->
<a href="https://example.com">Visit Site</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener">New Tab</a>

<!-- Internal link -->
<a href="about.html">About Page</a>

<!-- Anchor link -->
<a href="#section-id">Jump to Section</a>

<!-- Email link -->
<a href="mailto:email@example.com">Email Us</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Download link -->
<a href="file.pdf" download>Download PDF</a>
```

---

## Images

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description">

<!-- With dimensions -->
<img src="image.jpg" alt="Description" width="300" height="200">

<!-- With figure -->
<figure>
    <img src="photo.jpg" alt="A photo">
    <figcaption>Photo caption</figcaption>
</figure>
```

---

## Lists

```html
<!-- Unordered list -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>First</li>
    <li>Second</li>
</ol>

<!-- Definition list -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
</dl>
```

---

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </tr>
    </tbody>
</table>
```

---

## Forms

```html
<form action="/submit" method="POST">
    <!-- Text input -->
    <input type="text" name="username" placeholder="Username">
    
    <!-- Password -->
    <input type="password" name="pass">
    
    <!-- Email -->
    <input type="email" name="email" required>
    
    <!-- Number -->
    <input type="number" name="age" min="1" max="100">
    
    <!-- Checkbox -->
    <input type="checkbox" name="agree" id="agree">
    <label for="agree">I agree</label>
    
    <!-- Radio buttons -->
    <input type="radio" name="gender" value="m" id="male">
    <label for="male">Male</label>
    <input type="radio" name="gender" value="f" id="female">
    <label for="female">Female</label>
    
    <!-- Select dropdown -->
    <select name="country">
        <option value="">Select...</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
    </select>
    
    <!-- Textarea -->
    <textarea name="message" rows="4" cols="50"></textarea>
    
    <!-- Submit button -->
    <button type="submit">Submit</button>
</form>
```

---

## Input Types

| Type | Description |
|------|-------------|
| `text` | Single-line text |
| `password` | Hidden password |
| `email` | Email validation |
| `number` | Numeric only |
| `tel` | Telephone |
| `url` | URL validation |
| `date` | Date picker |
| `time` | Time picker |
| `datetime-local` | Date & time |
| `month` | Month picker |
| `week` | Week picker |
| `color` | Color picker |
| `range` | Slider |
| `file` | File upload |
| `hidden` | Hidden field |
| `checkbox` | Checkbox |
| `radio` | Radio button |
| `submit` | Submit button |
| `reset` | Reset form |
| `button` | Clickable button |

---

## Semantic Elements

```html
<header>     <!-- Page/section header -->
<nav>        <!-- Navigation -->
<main>       <!-- Main content -->
<article>    <!-- Self-contained content -->
<section>    <!-- Thematic section -->
<aside>      <!-- Sidebar content -->
<footer>     <!-- Page/section footer -->
<figure>     <!-- Media with caption -->
<figcaption> <!-- Figure caption -->
<details>    <!-- Expandable content -->
<summary>    <!-- Details heading -->
<time>       <!-- Date/time -->
<address>    <!-- Contact info -->
```

---

## Container Elements

```html
<!-- Block container -->
<div class="container">Content</div>

<!-- Inline container -->
<span class="highlight">Text</span>
```

---

## Media

```html
<!-- Video -->
<video src="video.mp4" controls width="400">
    Your browser doesn't support video.
</video>

<!-- Audio -->
<audio src="audio.mp3" controls>
    Your browser doesn't support audio.
</audio>

<!-- Embed iframe -->
<iframe src="https://example.com" width="600" height="400"></iframe>
```

---

## Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description">
<meta name="keywords" content="keyword1, keyword2">
<meta name="author" content="Author Name">
<meta name="robots" content="index, follow">
```

---

## Global Attributes

| Attribute | Description |
|-----------|-------------|
| `id` | Unique identifier |
| `class` | CSS class name(s) |
| `style` | Inline CSS styles |
| `title` | Tooltip text |
| `hidden` | Hides element |
| `tabindex` | Tab order |
| `data-*` | Custom data attributes |
| `lang` | Language |
| `dir` | Text direction (ltr/rtl) |

---

## Special Characters

| Character | Code |
|-----------|------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| `'` | `&apos;` |
| ` ` (space) | `&nbsp;` |
| `©` | `&copy;` |
| `®` | `&reg;` |
| `™` | `&trade;` |
| `€` | `&euro;` |
| `£` | `&pound;` |
| `→` | `&rarr;` |
| `←` | `&larr;` |

---

*[Back to Main Index](../README.md)*

---
layout: default
title: AI Prompting Guide
parent: AI Assistants
nav_order: 2
---

# 📋 AI Prompting Cheat Sheet

Quick reference guide for effective AI prompting.

---

## Basic Prompt Structure

```
[Context] + [Task] + [Constraints] + [Format]
```

**Example:**

```
I'm building a simple web app (context).
Create a JavaScript function (task)
that validates email addresses (more specific task).
It should return true/false (constraint)
and include comments explaining each step (format).
```

---

## Prompt Formulas

### Code Generation

```
Create a [language] [type] that [action].

Requirements:
- [requirement 1]
- [requirement 2]

Include [additional elements].
```

**Example:**

```
Create a JavaScript function that calculates 
the total price of items in a shopping cart.

Requirements:
- Accept an array of objects with price and quantity
- Apply a 10% discount if total exceeds $100

Include error handling for invalid inputs.
```

---

### Code Explanation

```
Explain this [language] code step by step.
Focus on [specific aspect].
Assume I'm a [skill level].

[paste code]
```

**Example:**

```
Explain this JavaScript code step by step.
Focus on the async/await syntax.
Assume I'm a beginner.

async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}
```

---

### Debugging

```
I have a bug in my [language] code.

Expected behavior: [what should happen]
Actual behavior: [what's happening]
Error message: [if any]

Here's my code:
[paste code]

What's causing this and how do I fix it?
```

---

### Code Review

```
Review this [language] code for:
- [aspect 1: e.g., best practices]
- [aspect 2: e.g., performance]
- [aspect 3: e.g., security]

Provide specific suggestions for improvement.

[paste code]
```

---

### Learning Concepts

```
Explain [concept] to me.

Include:
- Simple definition
- Real-world analogy
- Code example
- When to use it
- Common mistakes to avoid
```

---

## Prompt Modifiers

### Skill Level

| Modifier | When to use |
|----------|-------------|
| "for a beginner" | Learning basics |
| "for an intermediate" | Know basics, learning advanced |
| "for an expert" | Deep technical explanations |
| "like I'm 5" | Very simplified |

### Output Format

| Modifier | Result |
|----------|--------|
| "step by step" | Sequential instructions |
| "as bullet points" | List format |
| "with examples" | Include code samples |
| "briefly" | Concise response |
| "in detail" | Comprehensive response |
| "as a table" | Tabular format |

### Constraints

| Modifier | Effect |
|----------|--------|
| "without using X" | Avoid specific methods |
| "using only vanilla JS" | No frameworks/libraries |
| "compatible with ES5" | Version constraints |
| "following best practices" | Quality code |
| "optimized for performance" | Efficient code |

---

## Role Prompting

### Senior Developer

```
Act as a senior [language] developer. 
Review my code and suggest improvements 
following industry best practices.
```

### Teacher

```
Act as a programming teacher. 
Explain [concept] as if I'm learning it 
for the first time. Include practice exercises.
```

### Code Reviewer

```
Act as a code reviewer on my team. 
Look for bugs, security issues, and 
improvements in this pull request.
```

### Debugger

```
Act as a debugging expert. 
Help me find why this code isn't working 
and explain your reasoning process.
```

---

## Few-Shot Prompting

Give examples before your request:

```
Convert function names to descriptive comments:

getUserData → // Retrieves user data from database
calculateTotal → // Calculates the total price of items
validateEmail → ?
```

---

## Chain of Thought

Ask for reasoning:

```
Think through this step by step:

1. What does this code do?
2. What could go wrong?
3. How can we improve it?

Then provide the improved code.

[paste code]
```

---

## Common Prompts Library

### Function Generation

```
Write a [language] function called [name] 
that [does what]. It should accept [parameters] 
and return [return type].
```

### Error Fixing

```
This code gives me "[error message]". 
What's wrong and how do I fix it?
[code]
```

### Refactoring

```
Refactor this code to be more readable 
and follow [language] best practices.
[code]
```

### Adding Features

```
Add [feature] to this existing code. 
Keep the current functionality intact.
[code]
```

### Writing Tests

```
Write unit tests for this function using [test framework].
Cover edge cases and typical scenarios.
[code]
```

### Documentation

```
Write documentation comments for this [type].
Include parameters, return values, and examples.
[code]
```

### Converting Code

```
Convert this [language1] code to [language2].
Maintain the same functionality.
[code]
```

---

## Iteration Prompts

### Refine Output

```
Make it [simpler/shorter/more detailed]
```

### Add Features

```
Also add [feature] to the code above
```

### Change Approach

```
Try a different approach using [method]
```

### Fix Issues

```
This still doesn't work because [issue]. 
Try again.
```

### Clarify

```
Can you explain the [specific part] more?
```

---

## Things to Include

### For Better Code

- Language and version
- Framework (if any)
- Existing code context
- Expected behavior
- Error messages (exact)
- What you've already tried

### For Better Explanations

- Your current understanding
- What specifically confuses you
- How you plan to use this knowledge
- Your skill level

---

## Quick Tips

| Do ✅ | Don't ❌ |
|------|---------|
| Be specific | Be vague |
| Give context | Assume AI knows |
| Ask follow-ups | Accept first answer |
| Verify output | Blindly copy |
| Provide examples | Use ambiguous terms |
| Set constraints | Leave it open-ended |
| Break down complex tasks | Ask everything at once |

---

## Example: Progressive Prompting

**Start broad:**

```
Help me create a form validation function
```

**Add specifics:**

```
Make it validate email, password (min 8 chars), 
and confirm password fields
```

**Add constraints:**

```
Use vanilla JavaScript, return specific 
error messages for each field
```

**Add format:**

```
Return an object with isValid boolean 
and an errors array
```

---

*[Back to Main Index](../README.md)*

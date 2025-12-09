---
layout: default
title: Node.js & npm
parent: Resource Hub
nav_order: 5
---

# 📦 Node.js & npm - JavaScript Runtime & Package Manager

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript outside the browser, enabling server-side development, build tools, and command-line applications.

## What is npm?

npm (Node Package Manager) is the world's largest software registry. It allows you to install, share, and manage packages (reusable code libraries) for your projects.

---

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Installing Node.js and npm](#installing-nodejs-and-npm)
3. [Understanding Node.js](#understanding-nodejs)
4. [npm Basics](#npm-basics)
5. [package.json](#packagejson)
6. [Working with Packages](#working-with-packages)
7. [npm Scripts](#npm-scripts)
8. [Common Packages](#common-packages)
9. [Best Practices](#best-practices)
10. [Resources](#resources)

---

## Introduction

### Why Node.js?

1. **Same language everywhere**: Use JavaScript for both frontend and backend
2. **Large ecosystem**: Millions of packages available via npm
3. **Build tools**: Run development tools like bundlers, linters, and test runners
4. **Fast**: Built on Google's V8 engine
5. **Non-blocking I/O**: Efficient for handling many connections

### Use Cases

- Web servers and APIs
- Command-line tools (CLI)
- Build tools (Webpack, Vite)
- Desktop apps (Electron)
- Real-time applications
- Automation scripts

---

## Installing Node.js and npm

### Using the Official Installer

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS** (Long Term Support) version
3. Run the installer

### Using nvm (Recommended)

nvm (Node Version Manager) allows you to install and switch between multiple Node.js versions.

#### macOS/Linux

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:

# Install latest LTS
nvm install --lts

# Install specific version
nvm install 18.17.0

# Switch versions
nvm use 18.17.0

# Set default version
nvm alias default 18.17.0

# List installed versions
nvm ls
```

#### Windows

Use [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

```powershell
# After installation:
nvm install lts
nvm use lts
```

### Using Homebrew (macOS)

```bash
brew install node
```

### Verify Installation

```bash
# Check Node.js version
node --version
# or
node -v

# Check npm version
npm --version
# or
npm -v
```

---

## Understanding Node.js

### Running JavaScript with Node

```bash
# Run a JavaScript file
node script.js

# Open Node REPL (interactive mode)
node
> console.log('Hello')
Hello
> 2 + 2
4
> .exit
```

### Node.js vs Browser JavaScript

| Feature | Browser | Node.js |
|---------|---------|---------|
| DOM manipulation | ✅ Yes | ❌ No |
| `window` object | ✅ Yes | ❌ No |
| `document` object | ✅ Yes | ❌ No |
| File system access | ❌ No | ✅ Yes |
| `require`/`import` | Limited | ✅ Full |
| `process` object | ❌ No | ✅ Yes |
| Network access | Limited | ✅ Full |

### Basic Node.js Examples

#### Hello World

```javascript
// hello.js
console.log('Hello from Node.js!');
```

```bash
node hello.js
# Output: Hello from Node.js!
```

#### Reading Files

```javascript
// readFile.js
const fs = require('fs');

// Asynchronous
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Synchronous
const content = fs.readFileSync('example.txt', 'utf8');
console.log(content);
```

#### Command Line Arguments

```javascript
// args.js
console.log(process.argv);

// Run: node args.js hello world
// Output: ['/path/to/node', '/path/to/args.js', 'hello', 'world']
```

---

## npm Basics

### Initializing a Project

```bash
# Create package.json interactively
npm init

# Create with defaults
npm init -y
```

This creates a `package.json` file that tracks your project's dependencies and settings.

### Installing Packages

```bash
# Install a package (adds to dependencies)
npm install lodash
npm i lodash  # shorthand

# Install as dev dependency
npm install --save-dev eslint
npm i -D eslint  # shorthand

# Install globally (available everywhere)
npm install -g nodemon

# Install specific version
npm install lodash@4.17.21

# Install from package.json
npm install
npm i  # shorthand
```

### Types of Dependencies

| Type | Flag | package.json | Use Case |
|------|------|--------------|----------|
| Regular | (default) | `dependencies` | Production code (lodash, express) |
| Dev | `-D` or `--save-dev` | `devDependencies` | Development only (eslint, jest) |
| Global | `-g` | (none) | CLI tools (nodemon, create-react-app) |

### Uninstalling Packages

```bash
# Remove local package
npm uninstall lodash
npm un lodash  # shorthand

# Remove dev dependency
npm uninstall --save-dev eslint

# Remove global package
npm uninstall -g nodemon
```

### Updating Packages

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update lodash
```

---

## package.json

The `package.json` file is the heart of any Node.js project. It contains project metadata and dependencies.

### Structure

```json
{
    "name": "my-project",
    "version": "1.0.0",
    "description": "My awesome project",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "jest",
        "build": "webpack"
    },
    "keywords": ["javascript", "nodejs"],
    "author": "Your Name",
    "license": "MIT",
    "dependencies": {
        "express": "^4.18.2",
        "lodash": "^4.17.21"
    },
    "devDependencies": {
        "eslint": "^8.50.0",
        "jest": "^29.7.0"
    }
}
```

### Version Numbers (Semantic Versioning)

Versions follow the format: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

#### Version Specifiers

| Symbol | Meaning | Example |
|--------|---------|---------|
| `^` | Compatible with version | `^4.17.0` → `4.x.x` |
| `~` | Approximately equivalent | `~4.17.0` → `4.17.x` |
| `*` | Any version | `*` |
| `>=` | Greater than or equal | `>=4.0.0` |
| (none) | Exact version | `4.17.21` |

### package-lock.json

This file is automatically generated and locks the exact versions of all installed packages. **Always commit this file** to ensure consistent installs.

---

## Working with Packages

### Using Packages

After installing a package, you can use it in your code:

```javascript
// CommonJS (default in Node.js)
const lodash = require('lodash');
const express = require('express');

// ES Modules (add "type": "module" to package.json)
import lodash from 'lodash';
import express from 'express';
```

### Example: Using Lodash

```bash
npm install lodash
```

```javascript
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

console.log(_.sum(numbers));     // 15
console.log(_.shuffle(numbers)); // [3, 1, 5, 2, 4]
console.log(_.sample(numbers));  // random element
```

### The node_modules Folder

- Contains all installed packages and their dependencies
- Can be very large
- **Never commit to Git** (add to `.gitignore`)
- Regenerate with `npm install`

```gitignore
# .gitignore
node_modules/
```

---

## npm Scripts

npm scripts are custom commands defined in `package.json`. They're great for automating common tasks.

### Defining Scripts

```json
{
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest",
        "lint": "eslint .",
        "build": "webpack --mode production",
        "clean": "rm -rf dist"
    }
}
```

### Running Scripts

```bash
# Run a script
npm run start
npm run dev
npm run test
npm run lint

# Special shortcuts
npm start    # npm run start
npm test     # npm run test
npm t        # npm run test
```

### Chaining Scripts

```json
{
    "scripts": {
        "build": "npm run clean && npm run compile",
        "clean": "rm -rf dist",
        "compile": "webpack"
    }
}
```

### Pre and Post Scripts

```json
{
    "scripts": {
        "prebuild": "npm run clean",
        "build": "webpack",
        "postbuild": "echo Build complete!"
    }
}
```

---

## Common Packages

### Development Tools

| Package | Purpose | Install |
|---------|---------|---------|
| [nodemon](https://www.npmjs.com/package/nodemon) | Auto-restart on changes | `npm i -D nodemon` |
| [eslint](https://www.npmjs.com/package/eslint) | JavaScript linter | `npm i -D eslint` |
| [prettier](https://www.npmjs.com/package/prettier) | Code formatter | `npm i -D prettier` |
| [jest](https://www.npmjs.com/package/jest) | Testing framework | `npm i -D jest` |
| [typescript](https://www.npmjs.com/package/typescript) | TypeScript compiler | `npm i -D typescript` |

### Web Development

| Package | Purpose | Install |
|---------|---------|---------|
| [express](https://www.npmjs.com/package/express) | Web framework | `npm i express` |
| [axios](https://www.npmjs.com/package/axios) | HTTP client | `npm i axios` |
| [cors](https://www.npmjs.com/package/cors) | CORS middleware | `npm i cors` |

### Utilities

| Package | Purpose | Install |
|---------|---------|---------|
| [lodash](https://www.npmjs.com/package/lodash) | Utility functions | `npm i lodash` |
| [date-fns](https://www.npmjs.com/package/date-fns) | Date utilities | `npm i date-fns` |
| [uuid](https://www.npmjs.com/package/uuid) | Generate UUIDs | `npm i uuid` |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variables | `npm i dotenv` |

### Build Tools

| Package | Purpose | Install |
|---------|---------|---------|
| [vite](https://www.npmjs.com/package/vite) | Modern build tool | `npm i -D vite` |
| [webpack](https://www.npmjs.com/package/webpack) | Module bundler | `npm i -D webpack` |
| [parcel](https://www.npmjs.com/package/parcel) | Zero-config bundler | `npm i -D parcel` |

---

## Best Practices

### ✅ Do's

1. **Use exact versions** in production (`npm i --save-exact`)
2. **Commit package-lock.json**
3. **Use .gitignore** for node_modules
4. **Use npm scripts** for common tasks
5. **Keep dependencies updated**
6. **Use devDependencies** correctly
7. **Check package quality** before installing

### ❌ Don'ts

1. **Don't commit node_modules**
2. **Don't install everything globally**
3. **Don't ignore security warnings** (`npm audit`)
4. **Don't use outdated packages**
5. **Don't install packages you don't need**

### Security

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (may have breaking changes)
npm audit fix --force
```

### Useful Commands

```bash
# List installed packages
npm list
npm ls --depth=0  # Top-level only

# View package info
npm info lodash

# Search packages
npm search keyword

# Check npm cache
npm cache verify

# Clean npm cache
npm cache clean --force
```

---

## 🔗 Resources

### Official Documentation

- [Node.js Documentation](https://nodejs.org/en/docs/) - Official Node.js docs
- [npm Documentation](https://docs.npmjs.com/) - Official npm docs
- [npmjs.com](https://www.npmjs.com/) - Package registry

### Tutorials

- [Node.js Tutorial (W3Schools)](https://www.w3schools.com/nodejs/) - Beginner-friendly
- [The Node.js Handbook](https://www.freecodecamp.org/news/the-definitive-node-js-handbook/) - Comprehensive guide
- [Node.js (The Odin Project)](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) - Project-based

### Video Resources

- [Node.js Crash Course (Traversy Media)](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- [npm Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0)
- [Node.js Tutorial (Programming with Mosh)](https://www.youtube.com/watch?v=TlB_eWDSMt4)

### Tools

- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) - Manage Node versions
- [npx](https://www.npmjs.com/package/npx) - Execute npm packages
- [npm trends](https://npmtrends.com/) - Compare package popularity

### Package Discovery

- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) - Curated list
- [npms.io](https://npms.io/) - Package search with quality scores
- [Bundlephobia](https://bundlephobia.com/) - Check package sizes

---

## 📝 Exercises

### Exercise 1: Initialize a Project

1. Create a new folder
2. Run `npm init -y`
3. Install lodash
4. Create a script that uses lodash
5. Add an npm script to run it

### Exercise 2: Build Script

1. Create a project with source files
2. Install a bundler (parcel or vite)
3. Add build and dev scripts
4. Run your development server

### Exercise 3: CLI Tool

1. Create a simple command-line tool
2. Use `process.argv` for arguments
3. Install chalk for colored output
4. Make it executable with `npm link`

---

*Previous: [Git & GitHub Documentation](../04-git-github/README.md) | Next: [AI & LLMs Documentation](../06-ai-assistants/README.md)*

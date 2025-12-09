---
layout: default
title: npm Commands Cheat Sheet
parent: Node.js & npm
nav_order: 2
---

# 📋 npm Commands Cheat Sheet

Quick reference guide for npm commands.

---

## Getting Started

```bash
# Check version
node -v                  # Node.js version
npm -v                   # npm version

# Initialize project
npm init                 # Interactive setup
npm init -y              # Quick setup with defaults
```

---

## Installing Packages

```bash
# Install from package.json
npm install
npm i                    # Shorthand

# Install package (dependency)
npm install <package>
npm i <package>

# Install dev dependency
npm install --save-dev <package>
npm i -D <package>

# Install global package
npm install --global <package>
npm i -g <package>

# Install specific version
npm install <package>@<version>
npm install lodash@4.17.21

# Install from GitHub
npm install username/repo
```

---

## Uninstalling Packages

```bash
# Uninstall package
npm uninstall <package>
npm un <package>
npm remove <package>
npm rm <package>

# Uninstall dev dependency
npm uninstall --save-dev <package>
npm un -D <package>

# Uninstall global
npm uninstall -g <package>
```

---

## Updating Packages

```bash
# Check outdated packages
npm outdated

# Update all packages
npm update
npm up

# Update specific package
npm update <package>

# Update to latest (may have breaking changes)
npm install <package>@latest
```

---

## Running Scripts

```bash
# Run a script from package.json
npm run <script-name>

# Common shortcuts
npm start                # npm run start
npm test                 # npm run test
npm t                    # npm run test

# Examples
npm run dev
npm run build
npm run lint
```

---

## Package Info

```bash
# List installed packages
npm list
npm ls

# List top-level only
npm list --depth=0
npm ls --depth=0

# List global packages
npm list -g --depth=0

# View package info
npm info <package>
npm view <package>
npm show <package>

# View package versions
npm view <package> versions

# Search packages
npm search <keyword>
```

---

## Project Info

```bash
# View package.json
cat package.json

# View installed versions
npm ls <package>

# Check for issues
npm doctor

# Verify cache
npm cache verify
```

---

## Security

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix (may break things)
npm audit fix --force

# View detailed report
npm audit --json
```

---

## Cache Management

```bash
# Verify cache
npm cache verify

# Clean cache
npm cache clean --force

# View cache folder
npm config get cache
```

---

## Configuration

```bash
# View all config
npm config list
npm config ls -l         # All defaults too

# Get config value
npm config get <key>
npm config get registry

# Set config value
npm config set <key> <value>

# Delete config value
npm config delete <key>

# Edit config file
npm config edit
```

---

## Publishing (Advanced)

```bash
# Login to npm
npm login

# Publish package
npm publish

# Publish with tag
npm publish --tag beta

# Unpublish (within 72 hours)
npm unpublish <package>@<version>

# Deprecate version
npm deprecate <package>@<version> "message"
```

---

## Useful Flags

| Flag | Description |
|------|-------------|
| `--save` | Add to dependencies (default) |
| `-D, --save-dev` | Add to devDependencies |
| `-g, --global` | Install globally |
| `--save-exact` | Save exact version |
| `--dry-run` | Preview without doing |
| `--force` | Force the operation |
| `--production` | Skip devDependencies |
| `--legacy-peer-deps` | Ignore peer deps |

---

## npx - Execute Packages

```bash
# Run package without installing
npx <package>

# Examples
npx create-react-app my-app
npx eslint .
npx prettier --write .
npx cowsay "Hello!"

# Run specific version
npx <package>@<version>

# Run from npm registry
npx -p <package> <command>
```

---

## Version Management with nvm

```bash
# Install nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# List available versions
nvm ls-remote

# Install Node version
nvm install <version>
nvm install 18
nvm install --lts

# Use Node version
nvm use <version>
nvm use 18

# Set default version
nvm alias default <version>

# List installed versions
nvm ls

# Current version
nvm current
```

---

## Common Workflows

### New Project

```bash
mkdir my-project
cd my-project
npm init -y
npm install <dependencies>
```

### Clone & Setup

```bash
git clone <repo>
cd <repo>
npm install
npm run dev
```

### Add Dev Tools

```bash
npm i -D eslint prettier
npm i -D nodemon
npm i -D jest
```

### Clean Install

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

---

## package.json Scripts

```json
{
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "jest",
        "test:watch": "jest --watch",
        "lint": "eslint .",
        "lint:fix": "eslint . --fix",
        "format": "prettier --write .",
        "build": "webpack --mode production",
        "clean": "rm -rf dist"
    }
}
```

---

## Environment Variables

```bash
# Using dotenv package
npm install dotenv

# In .env file
API_KEY=your_api_key
PORT=3000

# In your code
require('dotenv').config();
console.log(process.env.API_KEY);
```

---

## Troubleshooting

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node/npm versions
node -v
npm -v

# Fix permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm

# Check for issues
npm doctor
```

---

*[Back to Main Index](../README.md)*

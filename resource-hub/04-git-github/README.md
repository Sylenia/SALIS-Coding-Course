---
layout: default
title: Git & GitHub
parent: Resource Hub
nav_order: 4
---

# 🌿 Git & GitHub - Version Control

## What is Git?

Git is a distributed version control system that tracks changes in your code. It allows multiple developers to work on the same project, maintains a history of all changes, and enables reverting to previous versions.

## What is GitHub?

GitHub is a web-based platform that hosts Git repositories. It provides collaboration features like pull requests, issues, and project management tools.

---

## 📚 Table of Contents

1. [Introduction to Version Control](#introduction-to-version-control)
2. [Installing Git](#installing-git)
3. [Basic Git Concepts](#basic-git-concepts)
4. [Essential Git Commands](#essential-git-commands)
5. [Branching and Merging](#branching-and-merging)
6. [Working with GitHub](#working-with-github)
7. [Collaboration Workflow](#collaboration-workflow)
8. [Best Practices](#best-practices)
9. [Resources](#resources)

---

## Introduction to Version Control

### Why Use Version Control?

1. **Track Changes**: See what changed, when, and by whom
2. **Collaboration**: Multiple people can work on the same project
3. **Backup**: Your code is stored safely in the cloud
4. **Experimentation**: Try new features without breaking the main code
5. **History**: Revert to any previous version

### Git vs GitHub

| Git | GitHub |
|-----|--------|
| Software (runs on your computer) | Website/service (in the cloud) |
| Tracks changes locally | Hosts your repositories online |
| Works offline | Requires internet |
| Free and open-source | Free tier + paid plans |

---

## Installing Git

### macOS

```bash
# Using Homebrew (recommended)
brew install git

# Or download from
# https://git-scm.com/download/mac
```

### Windows

Download from [git-scm.com](https://git-scm.com/download/win) and run the installer.

Or use [Git for Windows](https://gitforwindows.org/) which includes Git Bash.

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
```

### Verify Installation

```bash
git --version
# Should show something like: git version 2.40.0
```

### Initial Configuration

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use the same email as GitHub)
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Optional: Set default editor
git config --global core.editor "code --wait"

# View your configuration
git config --list
```

---

## Basic Git Concepts

### Repository (Repo)

A repository is a folder tracked by Git. It contains your project files and a hidden `.git` folder that stores the version history.

### The Three States

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Working   │    │   Staging   │    │    Local    │
│  Directory  │ -> │    Area     │ -> │  Repository │
└─────────────┘    └─────────────┘    └─────────────┘
      │                  │                   │
   git add           git commit          git push
      │                  │                   │
      ▼                  ▼                   ▼
 Your changes      Ready to commit     Saved in history
```

1. **Working Directory**: Where you make changes to files
2. **Staging Area**: Where you prepare changes for commit
3. **Repository**: Where your committed history is stored

### Commits

A commit is a snapshot of your project at a specific point in time. Each commit has:

- A unique ID (hash)
- Author information
- Date and time
- Commit message
- Reference to parent commit(s)

---

## Essential Git Commands

### Creating a Repository

```bash
# Initialize a new Git repository
git init

# Clone an existing repository
git clone https://github.com/username/repo.git

# Clone into a specific folder
git clone https://github.com/username/repo.git my-folder
```

### Checking Status

```bash
# See the status of your files
git status

# Short status
git status -s
```

### Staging Changes

```bash
# Stage a specific file
git add filename.txt

# Stage multiple files
git add file1.txt file2.txt

# Stage all changes
git add .

# Stage all changes (including deletions)
git add -A

# Unstage a file
git restore --staged filename.txt
```

### Committing Changes

```bash
# Commit with a message
git commit -m "Add new feature"

# Commit with detailed message (opens editor)
git commit

# Stage and commit in one step (tracked files only)
git commit -am "Update existing files"

# Amend the last commit
git commit --amend
```

### Viewing History

```bash
# View commit history
git log

# Compact log
git log --oneline

# Log with graph
git log --oneline --graph --all

# Show specific commit
git show commit-hash

# Show changes in a commit
git diff commit-hash
```

### Undoing Changes

```bash
# Discard changes in working directory
git restore filename.txt

# Discard all changes
git restore .

# Unstage a file
git restore --staged filename.txt

# Revert a commit (creates new commit)
git revert commit-hash

# Reset to a previous commit (careful!)
git reset --soft HEAD~1   # Keep changes staged
git reset --mixed HEAD~1  # Keep changes unstaged
git reset --hard HEAD~1   # Discard changes (dangerous!)
```

---

## Branching and Merging

### What is a Branch?

A branch is an independent line of development. The default branch is usually called `main` (or `master` in older projects).

```
        feature
         ┌────●────●
        /
●────●────●────●  main
              \
               └────●  bugfix
```

### Branch Commands

```bash
# List all branches
git branch

# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name
# Or (Git 2.23+)
git switch feature-name

# Create and switch in one step
git checkout -b feature-name
# Or
git switch -c feature-name

# Delete a branch
git branch -d feature-name

# Force delete (unmerged branch)
git branch -D feature-name

# Rename current branch
git branch -m new-name
```

### Merging

```bash
# Merge a branch into current branch
git merge feature-name

# Example workflow:
git checkout main
git merge feature-name
```

### Handling Merge Conflicts

When Git can't automatically merge, you'll see conflict markers:

```
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature-branch
```

Steps to resolve:

1. Open the conflicted file
2. Edit to keep the correct code
3. Remove the conflict markers
4. Stage the file: `git add filename`
5. Complete the merge: `git commit`

---

## Working with GitHub

### Creating a Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Fill in repository name and description
4. Choose public or private
5. Click **Create repository**

### Connecting Local to Remote

```bash
# Add a remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git
```

### Pushing and Pulling

```bash
# Push to remote
git push origin main

# Push and set upstream (first time)
git push -u origin main

# After setting upstream
git push

# Pull changes from remote
git pull origin main

# Fetch without merging
git fetch origin

# Pull with rebase
git pull --rebase origin main
```

### SSH vs HTTPS

**HTTPS** (easier to set up):

```bash
git clone https://github.com/username/repo.git
```

**SSH** (more secure, no password each time):

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add to GitHub Settings → SSH Keys

# Clone with SSH
git clone git@github.com:username/repo.git
```

---

## Collaboration Workflow

### Fork and Pull Request Workflow

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create a branch** for your changes
4. **Make changes** and commit
5. **Push** to your fork
6. Create a **Pull Request** on GitHub

```bash
# 1. Clone your fork
git clone https://github.com/your-username/repo.git

# 2. Add upstream remote
git remote add upstream https://github.com/original-owner/repo.git

# 3. Create a feature branch
git checkout -b my-feature

# 4. Make changes and commit
git add .
git commit -m "Add my feature"

# 5. Push to your fork
git push origin my-feature

# 6. Keep your fork updated
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Pull Requests (PRs)

A Pull Request is a way to propose changes:

1. Go to the repository on GitHub
2. Click **Pull requests** → **New pull request**
3. Select your branch
4. Add a title and description
5. Click **Create pull request**
6. Wait for review and approval
7. Merge when approved

### Code Reviews

- Review others' pull requests
- Leave constructive comments
- Approve or request changes
- Use GitHub's review features

---

## Best Practices

### ✅ Do's

1. **Commit often** with small, focused changes
2. **Write clear commit messages**
3. **Pull before you push**
4. **Use branches** for features and fixes
5. **Review your changes** before committing
6. **Keep the main branch stable**

### ❌ Don'ts

1. **Don't commit sensitive data** (passwords, API keys)
2. **Don't commit generated files** (use .gitignore)
3. **Don't force push** to shared branches
4. **Don't make huge commits**
5. **Don't commit broken code** to main

### Writing Good Commit Messages

```
# Good examples
git commit -m "Add user authentication feature"
git commit -m "Fix navigation menu on mobile"
git commit -m "Update README with installation instructions"

# Bad examples
git commit -m "fix"
git commit -m "asdfasdf"
git commit -m "stuff"
```

### Using .gitignore

Create a `.gitignore` file to exclude files from Git:

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
logs/
```

---

## 🔗 Resources

### Official Documentation

- [Git Documentation](https://git-scm.com/doc) - Official Git reference
- [GitHub Docs](https://docs.github.com/) - GitHub's official documentation
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free comprehensive Git book

### Interactive Learning

- [Learn Git Branching](https://learngitbranching.js.org/) - Visual/interactive Git tutorial
- [GitHub Skills](https://skills.github.com/) - GitHub's learning courses
- [Codecademy Git Course](https://www.codecademy.com/learn/learn-git) - Interactive Git lessons

### Tools

- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [GitKraken](https://www.gitkraken.com/) - Popular Git GUI
- [VS Code Git Integration](https://code.visualstudio.com/docs/editor/versioncontrol) - Built-in Git features

### Reference

- [Git Cheat Sheet (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf) - PDF cheat sheet
- [Conventional Commits](https://www.conventionalcommits.org/) - Commit message standard
- [gitignore.io](https://www.toptal.com/developers/gitignore) - Generate .gitignore files

### Video Tutorials

- [Git & GitHub Crash Course (Traversy Media)](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [Git Tutorial for Beginners (Programming with Mosh)](https://www.youtube.com/watch?v=8JJ101D3knE)

---

## 📝 Exercises

### Exercise 1: First Repository

1. Create a new folder and initialize Git
2. Create a file called `README.md`
3. Stage and commit the file
4. Create a GitHub repository
5. Push your local repo to GitHub

### Exercise 2: Branching Practice

1. Create a new branch called `feature-test`
2. Make some changes and commit
3. Switch back to main
4. Merge the feature branch

### Exercise 3: Collaboration

1. Fork a classmate's repository
2. Clone your fork
3. Make a change
4. Push and create a pull request

---

*Previous: [JavaScript Documentation](../03-javascript/README.md) | Next: [Node.js & npm Documentation](../05-nodejs-npm/README.md)*

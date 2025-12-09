---
layout: default
title: Git Commands Cheat Sheet
parent: Git & GitHub
nav_order: 2
---

# 📋 Git Commands Cheat Sheet

Quick reference guide for essential Git commands.

---

## Setup & Configuration

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "email@example.com"

# Set default branch
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# View configuration
git config --list

# View specific config
git config user.name
```

---

## Creating Repositories

```bash
# Initialize new repository
git init

# Clone existing repository
git clone <url>

# Clone into specific folder
git clone <url> <folder>

# Clone specific branch
git clone -b <branch> <url>
```

---

## Basic Commands

```bash
# Check status
git status
git status -s          # Short status

# Stage files
git add <file>         # Stage specific file
git add .              # Stage all changes
git add -A             # Stage all (including deletions)
git add *.js           # Stage by pattern

# Unstage files
git restore --staged <file>
git reset HEAD <file>  # Older syntax

# Commit changes
git commit -m "Message"
git commit -am "Message"  # Stage + commit
git commit --amend        # Edit last commit

# View history
git log
git log --oneline
git log --oneline --graph --all
git log -n 5           # Last 5 commits

# Show changes
git diff               # Unstaged changes
git diff --staged      # Staged changes
git diff <commit>      # Compare to commit
git show <commit>      # Show commit details
```

---

## Undoing Changes

```bash
# Discard working directory changes
git restore <file>
git checkout -- <file>  # Older syntax

# Unstage files
git restore --staged <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (unstage changes)
git reset HEAD~1

# Undo last commit (discard changes) ⚠️
git reset --hard HEAD~1

# Revert commit (safe - creates new commit)
git revert <commit>

# Restore file from commit
git restore --source=<commit> <file>
```

---

## Branches

```bash
# List branches
git branch             # Local branches
git branch -r          # Remote branches
git branch -a          # All branches

# Create branch
git branch <name>

# Switch branch
git checkout <name>
git switch <name>      # Git 2.23+

# Create and switch
git checkout -b <name>
git switch -c <name>   # Git 2.23+

# Rename branch
git branch -m <new-name>

# Delete branch
git branch -d <name>   # Safe delete
git branch -D <name>   # Force delete

# Delete remote branch
git push origin --delete <name>
```

---

## Merging

```bash
# Merge branch into current
git merge <branch>

# Abort merge
git merge --abort

# Continue after resolving conflicts
git add <files>
git commit
```

---

## Remote Repositories

```bash
# View remotes
git remote -v

# Add remote
git remote add origin <url>

# Remove remote
git remote remove origin

# Change remote URL
git remote set-url origin <url>

# Push to remote
git push origin <branch>
git push -u origin <branch>  # Set upstream
git push                     # After upstream set

# Pull from remote
git pull origin <branch>
git pull                     # After upstream set

# Fetch without merge
git fetch origin
git fetch --all

# Push all branches
git push --all origin
```

---

## Stashing

```bash
# Stash changes
git stash
git stash push -m "Message"

# List stashes
git stash list

# Apply stash
git stash pop          # Apply and remove
git stash apply        # Apply and keep

# Apply specific stash
git stash pop stash@{0}

# Drop stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

---

## Tags

```bash
# List tags
git tag

# Create tag
git tag v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"

# Push tag
git push origin v1.0.0
git push origin --tags

# Delete tag
git tag -d v1.0.0
git push origin --delete v1.0.0
```

---

## Viewing Changes

```bash
# Status
git status

# Differences
git diff                     # Working vs staged
git diff --staged            # Staged vs last commit
git diff <branch1> <branch2> # Between branches
git diff <commit1> <commit2> # Between commits

# Log
git log --oneline
git log --graph
git log --author="Name"
git log --since="2024-01-01"
git log --grep="keyword"
git log -- <file>            # History of file

# Blame (who changed what)
git blame <file>
```

---

## Useful Combinations

```bash
# Start fresh feature
git checkout main
git pull
git checkout -b feature-name

# Update feature branch
git checkout main
git pull
git checkout feature-name
git merge main

# Quick save work
git stash
git checkout other-branch
# ... do work ...
git checkout original-branch
git stash pop

# See what changed in last commit
git show --stat

# Find when bug introduced
git bisect start
git bisect bad              # Current is broken
git bisect good <commit>    # This was working
# Git will checkout commits for you to test
git bisect reset            # When done
```

---

## .gitignore Patterns

```gitignore
# Ignore file
secret.txt

# Ignore folder
node_modules/

# Ignore by extension
*.log

# Ignore pattern
*.local.js

# Except this file
!important.log

# Ignore in any directory
**/temp/

# Ignore in root only
/build
```

---

## Common Workflows

### Feature Branch

```bash
git checkout main
git pull
git checkout -b feature-x
# ... make changes ...
git add .
git commit -m "Add feature X"
git push -u origin feature-x
# Create PR on GitHub
```

### Sync Fork

```bash
git remote add upstream <original-repo-url>
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Undo Accidental Commit

```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Or if pushed (creates revert commit)
git revert HEAD
git push
```

---

## Troubleshooting

```bash
# See all refs
git reflog

# Recover deleted branch
git checkout -b <branch> <commit-hash>

# Clean untracked files
git clean -n            # Preview
git clean -f            # Delete files
git clean -fd           # Delete files and folders

# Fix detached HEAD
git checkout main

# Cancel rebase
git rebase --abort

# Continue rebase after fixing
git rebase --continue
```

---

## Aliases (Optional)

```bash
# Set up aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"

# Use aliases
git co main
git br -a
git ci -m "Message"
git st
git lg
```

---

*[Back to Main Index](../README.md)*

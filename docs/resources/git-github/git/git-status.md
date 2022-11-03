---
title: git status
sidebar_position: 3
---


```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   commit-me.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   work-in-progress.py

Untracked files:
    (use "git add <file>..." to include in what will be committed)
        data/just-created.csv
```

`git status` lists 4 main sections:

1. A check against your *remote tracking branch*. More on this in a moment.

1. Staged files (styled in green in the terminal). These are files that have been designated as ready-to-commit (or in a working state) but are waiting on changes to other files that should be included in the commit.

2. Unstaged files (styled in red in the terminal). These are files that have been modified since your last commit but are not ready to be committed.

3. Untracked files (also styled in red in the terminal). These are files that *git* determines it hasn't seen before.

:::tip Thinking cap

The file extensions I chose for files in the example above were not arbitrary. What do you think these file types say about the `commit` process in the context above? What kinds of files do you want to add to your source control and when?

:::

We'll dig into the purpose of each of these commit "stages" in the exercise at the end of this section. 


Get in the habit of running `git status` between everything you do. If you're using a GUI, use its indicators and shortcut buttons to frequently check the tracking status of the files in your branch. Here are the benefits of frequently running `git status`:

- Obviously, it will keep you in the habit of committing frequently. Keep in mind, reviewing a large change with tons of lines of code can be a lot more disorienting than reviewing the same change broken up into a series of small, digestible chunks. This is helpful not just for your collaborators, but also for yourself! After all, *you* are the person who will most frequently read your code.
- It will quickly notify you of any undesired changes to the file hierarchy of your project. For example, some scripts that you write will generate files in your project directory. It will also tell you if you have any untracked files (files that git is not tracking).
It will tell you if you have any untracked files. Untracked files are files that git is not tracking. This means that git will not take a snapshot of them when you commit. This is generally not what you want, but sometimes is! If you have untracked files, you can add them to git's tracking by running `git add <filename>`. You can also add all untracked files by running `git add .` (note the period at the end). If you would like to keep a file out of source control, you can add it to a `.gitignore` file. 

Let's continue now and learn about *branches* in git.
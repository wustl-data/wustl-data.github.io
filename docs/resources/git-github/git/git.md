---
title: Git
sidebar_position: 1
---

Git is a *version control system* (VCS). It allows you to track changes to your code and collaborate with others. It is by far the most popular VCS in use today. 

Git does a few key things at its core:
- It takes snapshots of your code when you *commit* your code. 
- It allows you to create and organize *branches* of your code base to represent *independent* changes to the code base.
- It allows you to incoporate these branches into a working version of your code base via a *merge*.

Git is packaged as a command line tool. When we run commands like `git status`, we are using git's `Command Line Interface` (CLI). While using git's CLI can be fast and powerful with practice, the syntax can get overwhelming if you are not used to working with git. Thus it might make sense to use git tool with a GUI instead. Examples and instructions such as the ones on this page will be written using git's command line syntax, but all of the concepts should be directly translatable to a GUI git program. 

:::tip

What git GUI programs are available?

- VS Code's built-in source control tab - press `Ctrl+Shift+G` to open it (g for *git*). This tab lets you perform basic commits and track what files have changed since your last commit.
- [GitLens VS Code extension](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (recommended). A more sophisticated implementation of the source control tab in VS Code that lets you do more complicated git operations like resolving merge conflicts and viewing the commit history of a file or lines in a file (which can be useful for determining who wrote which code in group/community projects).
- [GitHub Desktop](https://desktop.github.com/). GitHub's official GUI client. Obviously, it works well with GitHub-specific features. It has a clean UI for getting your brain used to working in git. Works very nicely on Windows and Mac, not tested on WSL-- let us know how it goes on Piazza if you try it out.

:::

:::caution Habits

GUI clients are great for getting started, but as you get used to concepts, consider applying your knowledge to the command line. It can speed up your workflow considerably, but does take a considerable amount of initial investment and discipline.

:::

Let's go over the process of committing a changeset in detail:

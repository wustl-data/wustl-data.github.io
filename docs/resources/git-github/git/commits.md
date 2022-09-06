---
title: Commits
sidebar_position: 2
---

A *commit* is a snapshot of your code at a given point in time in terms of changes that the program has seen since the last *commit* you made. Generally, you want to commit after you successfully make a change to the code so that the "snapshot" represents the code in a working state. The smaller this change, the smaller your commit, the better for code management and review. 

Commits require a commit *message*, which is a short description of the changes you made. Conventionally, messages are phrased as an imperative, e.g. "Add a new feature" or "Fix a bug", to remind us that we are describing a change relative to the previous commit.

```bash
git commit -m 'Update documentation'
```

:::tip

Take a second to examine [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) syntax. These are a set of conventions for commit messages that are used in many open source projects. They are a great way to keep your commit messages consistent and informative. I will leave it up to you if you would like to develop this discipline now or later, but it is a good idea to get into the habit of writing informative commit messages. Making yourself write appropriate commit messages will also encourage you to make commits at appropriate times.

:::

However, before we can actually make a commit, we need to *stage* some changes to that commit. Let's look at how we can use `git status` to determine what changes we need to stage.

---
title: Branches
sidebar_position: 5
---

To get an idea of the purposes of branches, let's take a look at a git graph. A git graph simply represents the history of a repository, representing each commit as a node in a directed acyclic graph (DAG).

*source: [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) by Atlassian*

![Git Flow DAG](https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=506)

You can review more details about the workflow at the provided link, but for now try to visualize how structuring snapshots of the code in this way can help us work together on code in teams and how it can help us manage our own code as we try various approaches to the problems we are trying to solve.

## Creating a Branch

To create a branch, we use the `git branch` command. This command takes a single argument, the name of the branch you want to create. Let's create a branch called `feature-1`:

```bash
git branch feature-1
```

This command will create a branch called `feature-1` but will not switch to it. To switch to the branch, we use the `git checkout` command. This command takes a single argument, the name of the branch you want to switch to. Let's switch to the `feature-1` branch:

```bash
git checkout feature-1
```

:::tip

A shortcut for creating and switching to a branch is to use the `-b` flag with the `git checkout` command. This will create a branch and switch to it in one command. Let's create a branch called `feature-2` and switch to it:

```bash
git checkout -b feature-2
```

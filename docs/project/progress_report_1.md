---
title: Progress Report 1
sidebar_position: 2
---

Due: Oct 7th, 2022

Submit a markdown file to Canvas with the following sections. Please restrict your submission to 1-2 pages, focusing on substance over style.

## Problem Domain/Statement

Describe the problem domain you are interested in. What is the problem you are trying to solve? What is the data you are using to solve the problem? What is the goal of your project? If you have a specific idea for a problem statement, briefly outline motivation for the statement. If you are still exploring, describe the topic domain you are interested in and some potential ideas for problem statements.

## Scope
Describe which course modules your project will cover by pointing to concrete examples of your initial exploration of data sources and your problem statement. As described in the [assignment specifications](assignment.md), you should cover, on average, 3 modules. You should also propose how you plan to divide the work among your team members, however it is early in the proecess and I would expect the actual distribution of work to change as you learn more about your data sources and problem statement. Creating a proposal for how you plan to divide the work is a good way to start thinking about how you will work together as a team.

## Timeline
Briefly describe a timeline for your project. Which aspects of your work do you expect to take the longest? Are there any components of your project that depend on other components of your project to be completed first? If your answers to these questions are too generic, you should probably hone in on your problem statement and data sources more.

## Example:

### Problem Domain/Statement

Our group wants to study memes for our group topic.  We found an example blog post that gives an introduction to the kinds of data problems we can pursue in the study of memes. We want to explore how to classify a meme and merge difference sources of meme data such as from Twitter and Reddit.

We chose this topic because memes are fun and can change the world through humor. Understanding the popularity of memes can be a helpful way to achieve an effective messaging campaign. It also provides a rich, defined data set and translates easily to a problem statement.

### Scope
We aim to cover the 3 modules as follows:
1. API: We will need to build API clients for both Twitter and Redit
2. Data normalization: We will need to make sure that our resulting data architecture normalizes the different data sets after merging. Since the Reddit and Twitter APIs can each return normalized data, we will only have to normalize the data at the final step, so this will count as 1/2 of a contribution.
3. Databases: Because image files are large, we will provide the option to store image data locally for faster consumption. We will only store images in the database, so this would be another 1/2 of a contribution.
4. Python/Pandas: We will offload much of the image processing techniques to existing solutions/libraries. However, we will need to take that output and manipulate the evaluation metrics such that we can evaluate the algorithm in a variety of contexts, such as specific meme formats. This will require heavy python/pandas code structuring and will make up our 3rd module requirement.

Adam has more experience with Python and Pandas, so initially he will split work on parts 1 and 4. Bob is interested in databases, so he will handle that component.and help with the Python/Pandas component. Charlie is flexible so he will also help with Python/Pandas and cover the data normalization section.

### Timeline:
The most important aspect of this project is collecting a useful dataset. We will spend from now until the next progress report honing in on what a useful data set will look like and making sure we are further scoping our problem directly. Once we have all agreed on what our data set should look like, we will finish our own components of the code and collaborate on the project where our components intersect (for example, Charlie might work with Bob on translating the dataset from SQL to Pandas effectively).


---
title: Progress Report 1
sidebar_position: 2
---

Due: Oct 7th, 2022

Submit a markdown file to Canvas with the following sections. Please restrict your submission to 1-2 pages, focusing on substance over style.

## Problem Domain/Statement

Describe the problem domain you are interested in. What is the problem you are trying to solve? What is the data you are using to solve the problem? What is the goal of your project? If you have a specific idea for a problem statement, briefly outline motivation for the statement. If you are still exploring, describe the topic domain you are interested in and some potential ideas for problem statements.

## Scope
Describe which course modules your project will cover by pointing to concrete examples of your initial exploration of data sources and your problem statement. As described in the [assignment specifications](assignment), you should cover 3 features in sum. You might also want to propose how you plan to divide the work among your team members, however it is early in the proecess and I would expect the actual distribution of work to change as you learn more about your data sources and problem statement. Creating a proposal for how you plan to divide the work is a good way to start thinking about how you will work together as a team.

## Timeline
Briefly describe a timeline for your project. Which aspects of your work do you expect to take the longest? Are there any components of your project that depend on other components of your project to be completed first? If your answers to these questions are too generic, you should probably hone in on your problem statement and data sources more.

## Anticipated Roadblocks

Describe any anticipated roadblocks or big question marks in your project proposal and potential ways around them.

## Example:

### Problem Domain/Statement

Our group wants to study memes for our group topic.  We found an example blog post ([dummy link](https://google.com)) that gives an introduction some common data management issues when dealing with memes. We want to explore how to classify memes and merge difference sources of meme data such as from Twitter and Reddit.

We chose this topic because memes are fun and can change the world through humor. Understanding the popularity of memes can be a helpful way to achieve an effective messaging campaign. It also provides a rich, defined data set and translates easily to a problem statement.

Potential problem statement: 
- How accurately can we distinguish a meme from a non-meme?
A potential alternative:
- Can we predict the popularity of a meme based on its content?

### Scope
We aim to cover our 3 total features as follows:
1. Data Gathering via API (1 feature): We will need to build API clients for both Twitter and Reddit. After consuming the relevant parts of the API for our project, we need to write manipulation scripts to store them in a common format. 
2. Database (0.5 feature) - Because image files are large, we will provide the option to store image data locally for faster consumption using a SQL database. We will store the remaining data in more lightweight formats.
3. API for data access (0.5 feature) - We will offload basic machine-vision tasks to external libraries and provide a brief set of wrapper functions for people to try out our baseline approach.
4. Dashboard (1 feature) - We will provide a dashboard that selects a random image from the database and the result of the classification for manual inspection of the algorithm.

Adam has more experience with Python and Pandas, so initially he will split work on parts 1 and 3. Bob is interested in databases, so he will handle that component.and help with the Python/Pandas component. Charlie is flexible so he will also help with the API Client code. Bob and Charlie will work together on coming up with a plan for the dashboard and we will reevaluate as a team for the next project report.

### Timeline:
The most important aspect of this project is curating and formatting our dataset to be useful. We will spend from now until the next progress report honing in on what a useful data set will look like and making sure we are further scoping our problem directly. Once we have all agreed on what our data set should look like and have a concrete idea of how to synthesize it, we will finish our own components of the code and collaborate on the project where our components intersect (for example, Charlie might work with Bob on translating images from SQL to Pandas effectively).

### Anticipated Roadblocks

The biggest problem we might face will be the establishment of a training data set that already has the memes classified. We might make the assumption that any image in a certain subreddit can be counted as a meme, while we might pick a different subreddit to find similar non-meme images.
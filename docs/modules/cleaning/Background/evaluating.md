---
title: Evaluating data cleanliness
sidebar_position: 6
---

Often, we will discover or be handed a fresh data set to our eyes that we need to analyze for quick improvements. Let's go over a few examples of ways we can determine how messy or clean our data is based on the concepts we've discussed.

### Data types of fields

This one is usually pretty easy. If we are using a data-oriented programming language such as Pandas, R, or SQL, we can simply check the data types for each field of an entity using the programming language's appropriate methods. If we are working with data from, say, a CSV file, we might need to manually determine the data types ourselves upon loading the file. Whether we are confirming existing data types or determining them, we want to carefully (but briefly) think about each column and what data type it should be. If we are unsure, we can always check the documentation for the data set or ask the data's creator.

### Constraints

We mentioned constraints, both physical and logical, that our data should adhere to for it to be useful and accurate. We should identify data points that do not adhere to these constraints with simple checks (e.g. is field `Percentage` between 0 and 100?) when possible. 

Sometimes, constraints are fuzzier. For example, if our data comes from a Gaussian distribution, a value of 4 standard deviations away from the mean may be extremely unlikely, but far from impossible (.1%). However, if we have dozens of data points that are 4 standard deviations away from the mean in a set of hundreds, we may want to investigate further. These sorts of patterns are slightly more difficult to identify, but we can use our intuition and domain knowledge to help us identify them.

One way we can identify unusual patterns in the data that are deserving of our attention is through descriptive statistics/summaries that are usually built in to data analysis languages/software.

A simple and quick way to get a summary of a data set is to use the `describe` method in Pandas. This will give us a quick summary of the data set, including the mean, standard deviation, minimum, maximum, and quartiles for each column. We can use this to identify outliers and other unusual patterns in the data.

#### Pandas profiling

The [`pandas-profiling` package](https://pandas-profiling.ydata.ai/docs/master/index.html) is a much more advanced version of the `describe` method. It will give us a much more detailed summary of the data set, including the data types, missing values, histograms, and correlation matrices for our data. Use this if you're looking for a more in-depth analysis of your data set.

### Data Visualization

Data visualization can be an excellent way to identify unusual patterns in the data. We can use histograms, box plots, and scatter plots to identify outliers and other unusual patterns in the data. 

We will go into more detail about data visualization later in the course, but for now be aware that Pandas comes with many visualization methods build in, including `plot`, `hist`, `boxplot`, and `scatter_matrix`.
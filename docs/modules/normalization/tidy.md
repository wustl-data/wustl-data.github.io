---
title: Tidy Data
sidebar_position: 2
---

In 2014, [Hadley Wickham](https://en.wikipedia.org/wiki/Hadley_Wickham), a prominent contributor for the R statistical programming language, published a paper titled [Tidy Data](https://www.jstatsoft.org/article/view/v059i10/v59i10.pdf). Let's take a look at how he defines *tidy data*:

> Tidy data is a standard way of mapping the meaning of a dataset to its structure. A dataset is messy or tidy depending on how rows, columns and tables are matched up with observations, variables and types. In tidy data:
> 1. Each variable forms a column.
> 2. Each observation forms a row.
> 3. Each type of observational unit forms a table.

> This is Codd’s 3rd normal form (Codd 1990), but with the constraints framed in statistical language, and the focus put on a single dataset rather than the many connected datasets common in relational databases. Messy data is any other arrangement of the data.

Let's take a look this toy example provided in the paper to try do deduce what he means:

:::tip

This page is written in Markdown, which doesn't provide a simple way for me to present these tables side-by-side. You might want to duplicate this tab and view the page in a separate window to view the tables side-by-side.

:::

> Take a minute to map the data transformations between the two tables. What do you notice? What is being assumed about the nature of the columns in each table? What about the rows? What about data types? Can you determine which table is commonly called the 'wide' format and which is commonly called the 'long' format?
## Raw Data
   
   | Row | a | b | c |
   | --- | - | - | - |
   |  A  | 1 | 4 | 7 |
   |  B  | 2 | 5 | 8 |
   |  C  | 3 | 6 | 9 |
   
## Molten Data

| Row | Column   | Value |
| --- | -------- | ----- |
|  A  | a        | 1     |
|  B  | a        | 2     |
|  C  | a        | 3     |
|  A  | b        | 4     |
|  B  | b        | 5     |
|  C  | b        | 6     |
|  A  | c        | 7     |
|  B  | c        | 8     |
|  C  | c        | 9     |


## A more concrete example

Again from *Tidy Data*, let's take a look at the example he provides that is a bit more concrete in the form of an exercise:

> Use `DataFrame.melt` to convert this Pew survey data from *wide* format into tidy (*long*) data. Use the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.melt.html) to help you.


| religion | <$10k | $10-20k | $20-30k | $30-40k | $40-50k | $50-75k |
| -------- | ----- | ------- | ------- | ------- | ------- | ------- |
| Agnostic | 27    | 34      | 60      | 81      | 76      | 137     |
| Atheist  | 12    | 27      | 37      | 52      | 35      | 70      |
| Buddhist | 27    | 21      | 30      | 34      | 33      | 58      |
| Catholic | 418   | 617     | 732     | 670     | 638     | 1116    |
| Hindu    | 1     | 9       | 7       | 15      | 11      | 34      |
| Jewish   | 19    | 19      | 25      | 25      | 30      | 95      |
| Muslim   | 6     | 10      | 15      | 11      | 10      | 5       |
| Orthodox | 3     | 6       | 9       | 9       | 5       | 10      |
| Other    | 15    | 9       | 16      | 19      | 17      | 29      |
| Unaffiliated | 217 | 244     | 300     | 343     | 293     | 506     |

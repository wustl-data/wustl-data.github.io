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


<iframe width="100%" height="600px" src="https://replit.com/team/data-wrangling/Melting-wide-form-data"></iframe>


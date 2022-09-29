---
title: Normalized Data
sidebar_position: 3
---

## Codd-Normal Form

In the previous section, we saw that Hadley Wickham referenced a 1960 paper by Edgar F. Codd, which introduced the concept of relational databases. In this section, we will look at the Codd Normal Form, which is a set of rules for organizing data in a relational database.

Generally, the "Normal Forms" increase in strictness with number. If a database is in 3NF, it is also in 2NF and 1NF; if a database is in 2NF, it is also in 1NF, etc.

### First Normal Form

The first normal form is the most basic. It requires that each cell in a table be a single value. No multi-valued cells are allowed. For example, the following table is not in 1NF:

| id | name | friends |
|----|------|---------|
| 1  | Bob  | Alice, Charlie, Dave |
| 2  | Alice | Bob, Charlie, Dave |

The `friends` column contains multiple values, so this table is not in 1NF.

To fix this, we can split the `friends` column into multiple columns, one for each friend. This is called "decomposition" and is a common technique for converting non-1NF tables into 1NF tables. The following table is in 1NF:

| id | name | friend1 | friend2 | friend3 |
|----|------|---------|---------|---------|
| 1  | Bob  | Alice   | Charlie | Dave    |
| 2  | Alice | Bob     | Charlie | Dave    |

### Second Normal Form

The second normal form requires that the table be in 1NF, and a second requirement that can get a little confusing.

Let's use the definition and examples from [Wikipedia](https://en.wikipedia.org/wiki/Database_normalization#Second_normal_form_(2NF)) to explore this statement:

>  It does not have any non-prime attribute that is functionally dependent on any proper subset of any candidate key of the relation. 
> - A non-prime attribute of a relation is an attribute that is not a part of any candidate key of the relation. 

Here is an example of a table that is not in 2NF:

#### Electric toothbrush models

| Manufacturer | Model | Manufacturer Country |
|--------------|-------|----------------------|
| Forte | X-Prime       | Italy |
| Forte | Ultraclean    | Italy |
| Dent-o-fresh | EZbrush | USA |
| Brushmaster | Superbrush | USA |
| Kobayashi | ST-60 | Japan |
| Hoch | Toothmaster | Germany |
| Hoch | X-Prime | Germany |  

> Exercise: 
> 1. What is the "candidate key" for this table?
> 2. What are the "prime attributes"?
> 3. Which columns are "functionally dependent" on a prime attribute?
> 4. How do we fix this table to make it 2NF?

<!-- <detail>
<description>Reveal answer</description>
The `Manufacturer` and `Model` columns are the candidate key. The `Manufacturer Country` column is not part of the candidate key, so it is a "non-prime attribute". The `Manufacturer Country` column is functionally dependent on the `Manufacturer` column, so it is not in 2NF.
</detail> -->

### Third Normal Form

The third normal form requires that the table be in 2NF, and a yet another confusingly-worded requirement:

> It does not have any non-prime attribute that is transitively dependent on any candidate key of the relation.

Here is an example of a table that is not in 3NF, again borrowed from Wikipedia (slightly modified):

#### Tournament Winners

| Tournament | Year | Winner | Winner's Date of Birth |
|------------|------|--------|------------------------|
| Wimbledon | 2019 | Novak Djokovic | 22 May 1987 |
| Wimbledon | 2018 | Roger Federer | 8 August 1981 |
| Wimbledon | 2017 | Roger Federer | 8 August 1981 |
| US Open | 2019 | Rafael Nadal | 3 June 1986 |
| US Open | 2018 | Novak Djokovic | 22 May 1987 |
| US Open | 2017 | Roger Federer | 8 August 1981 |

> Exercise:
> 1. Perform the same steps as above to analyze the data's structure and come up with a fix.
> 2. What is the difference between this example and the previous one? How does this help you understand the definition of 3NF provided?
> 3. When might it be acceptable to stick with 2NF instead of 3NF?

## Summary

The three normal forms can often be summed up in this pithy expression:

Every non key attribute depends on:
1. The key
2. The whole key
3. And nothing but the key

(So help me Codd)

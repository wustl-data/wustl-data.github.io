---
title: Accurate representations
sidebar_position: 4
---

### Typos and Synonyms

When working with string data, it might seem obvious that we want to handle any typos or misspellings in the data. After all, we do want our data to be "correct".

:::caution Keep In Mind

What is considered "correct" might depend on what's consuming the data.

:::

However, the benefits of correcting typos and misspellings go much deeper than that. To illustrate why, let's look at some address data, which is notoriously [heterogenous](https://pe.usps.com/text/pub28/welcome.htm) and therefore [difficult to parse](https://www.mjt.me.uk/posts/falsehoods-programmers-believe-about-addresses/). Additionally, the data is often entered by hand, which means that there are many opportunities for typos and misspellings.

For our example, let's say we're collecting some field data on a door to door campaign. Our brave field volunteers are well meaning, but aren't exactly trained in the art of data science, and your campaign isn't exactly flush with cash, so your volunteers are given pen and paper as they go door to door, which are then transcribed into a word doc by a different volunteer who can barely read his handwriting, etc. Here's what we get:

| Address | Name | Time |
| --- | --- | --- |
| 123 Main St | Jon Smth | 1230 |
| 456 Wrangler Ln | Jane Doe   | 1500 |
| 123 main street | J Smith | noon |
| 456 Wrangler Ln | Jane Elizabeth Doe   | 1:00 |
| 123A S Main St. | John Smith | 4/3c |

As far as volunteer-collected data goes, we could have done a lot worse. At least we, as humans, can make some sense of it:
> we knocked on the door of two people named Jane and John a few times this week at various times in the afternoon. 

However, if we were to try to parse this data programmatically, we would run into some problems. For example:
- we might want to know how many times we knocked on the door of each person, but we can't do that if we don't know that "Jane Doe" and "Jane Elizabeth Doe" are the same person, or that "Jhn Smith" and "John Smith" are the same person, or even if "John Smith" and "John Smith" are the same person. 
- We might also want to know how many times we knocked on the door of each address, but we can't do that if we don't know that "123 Main St" and "123 main street" are the same address. 
- We might want know what time we knocked on the door of each person, but we can't do that if we don't know that "1230" is 30 minutes past "noon".

At least with the `Time` column, we might be able to rely on some super smart time parsing library to figure out what time it was. However, we can't always rely on accurate `Address` parsing, because there are so many ways to write an address. This small example data set isn't so bad, but we we get to thousands or millions of rows, it becomes effectively impossible to parse the addresses without some kind of manual intervention or expenive geocoding service. However, we can still massively improve the quality of our data set by going by some selected set of rules for how we want to represent addresses, and then cleaning the data to match those rules.

This section's homework assignment will have you perform this standardization by transforming abbreviations, capitalizations, and punctuations into a consistent format.

Once the data is clean, it might look like this:

| Address | Name | Time |
| --- | --- | --- |
| 123 MAIN ST | JOHN SMITH | 12:30 PM |
| 456 WRANGLER LN | JANE DOE   | 3:00 PM |
| 123 MAIN ST | JOHN SMITH | 12:00 PM |
| 456 WRANGLER LN | JANE DOE   | 1:00 PM |
| 123 MAIN ST | JOHN SMITH | 3:00 PM |

Now our program can much more easily tell us some basic statistics of the data by grouping on the `Address` and `Name` columns: we knocked on the door of John Smith at 123 MAIN ST three times, and Jane Doe at 456 WRANGLER LN two times.

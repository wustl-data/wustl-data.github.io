---
title: Tidying in Pandas
sidebar_position: 2.5
---

Let's go over some functions and features that are useful for tidying data in Pandas.

## Multi-indexing

Multi-indexing is a way to organize data in a table with multiple levels of row and column labels. This is useful for data that has multiple attributes for an identifier, such as a combination of 'Name' and "Birthday" to identify a person.

Multi-Indexing can be quite simple in Pandas if you stick to using it appropriately. You can usually form a multi-index by passing a list of column labels where you might be expected to provide a single one. For example:

```python
pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Alice"],
        "Birthday": ["1990-01-01", "1991-01-01", "2001-01-01"],
        "Favorite Color": ["Red", "Blue", "Green"],
    }
).set_index(["Name", "Birthday"])
```

Multi-indexes are particularly useful when joining columns from different tables, as we'll see in the assignment.

## DataFrame.stack

Pandas has a `melt` method that can "melt" certain columns as previously described. However, I highly encourage the usage of `stack` instead of `melt` for converting from wide form to long form--it will get you into the habit of using appropriate indexing, which gives you speed and readability.

Examine this diagram from the [Pandas *reshaping* docs](https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html) to understand how `stack` works:

![](https://pandas.pydata.org/pandas-docs/stable/_images/reshaping_stack.png)

There are more nuanced differences between `stack` and `melt`, but for our purposes, `stack` is usually the better choice.

## DataFrame.drop_duplicates

The `drop_duplicates` method is useful for removing duplicate rows from a DataFrame. It takes a list of column names to use as the identifier for a row. For example, if we have a table of meetings we have scheduled with people identified with their names and birthdays, we can use `drop_duplicates` to remove duplicate rows:

```python
pd.DataFrame(
    {
        "Name": ["Alice", "Bob", "Alice", "Alice"],
        "Birthday": ["1990-01-01", "1991-01-01", "2001-01-01", "2001-01-01"],
        "Meeting Date": ["2021-01-01", "2021-01-01", "2021-01-02", "2021-01-03"],
    }
).drop_duplicates(["Name", "Birthday"])
```

:::warning

What is a potentially harmful side effect of the operation above?

:::

:::caution

Unlike in SQL databases, Pandas indexes are not required to be unique, but you should almost always try to make sure that they are.

:::

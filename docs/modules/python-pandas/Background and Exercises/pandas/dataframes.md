---
title: DataFrames
sidebar_position: 2
---

A DataFrame is a 2-dimensional labeled data structure. It is a collection of Series objects, where each Series is a column of the DataFrame. Assuming good data organization, each column should represent a variable, and each row should represent an observation/record/data point. For example, if we have a collection of height and weight measurements, we could represent them as a DataFrame like:

```python
measures = pd.DataFrame(
    {
        'height': [1.5, 1.6, 1.7, 1.8, 1.9],
        'weight': [60, 65, 70, 75, 80]
    },
    index=['Ann', 'Brad', 'Charlie', 'Dan', 'Emma']
)
```

There are even more ways to initialize a DataFrame than there are to initialize a Series, but the above is the most common: a dictionary of equally-sized lists, where the keys are the column names and the values are the column data. 


:::tip

This constructor is the same as the `from_dict` constructor, and it is the default constructor for a Pandas instance.

:::

While the default constructor syntax is most common, I find the `from_records` constructor to be more practical and conceptually useful. The tradeoff is that it is slightly more verbose.

Use the [`from_records` constructor](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.from_records.html) to recreate the above DataFrame:

<iframe width="100%" height="600px" src="https://replit.com/team/data-wrangling/DataFrame-fromrecords"></iframe>


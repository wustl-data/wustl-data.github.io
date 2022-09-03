---
title: Series
sidebar_position: 1
---

A `Series`, at a high level, should be thought of as a labeled, indexed list. The "label" (`name`) indicates the variable that the data represents, while the `index` indicates a label for each observation/measurement in the collection. For example, if we have a collection of height measurements, we could represent them as a Series like:

```python
heights = pd.Series(
    [1.5, 1.6, 1.7, 1.8, 1.9],
    index=['Ann', 'Brian', 'Charlie', 'Dan', 'Emma'],
    name='heights'
)
```

The `index` argument is optional, but it's good practice to include it if you have a meaningful label for each row. If you don't specify an index, Pandas will automatically assign a RangeIndex, which is just a list of integers starting at 0.

:::warning

You are technically allowed to have different data types (e.g. `int` and `str`) within a Series, but I wouldn't suggest it. For one, it will slow down Pandas since it won't be able to take advantage of NumPy arrays, which are required to be the same type. For another, it's just bad data organization.

:::

:::tip

Because Pandas' two main structures, `Series` and `DataFrame`, are Python classes, it might be helpful to remember what classes are, exactly. Remember, classes consist of:
1. attributes (variables) which contain data, and
2. methods (functions) which operate on that data.

The various referenced components of these data structures can be accessed via *attributes* (e.g. `heights.values` or `heights.index.values`). But Pandas also provides Series-specific and DataFrame-specific *methods* which operate on the data. For example, `Series` objects have a `to_dataframe()` method that converts them to a 1-dimensional DataFrame.

:::


In addition to thinking of a Series as a labeled, indexed list, we can also conceptualize it as a labeled dictionary, where the keys are the index labels and the values are the measurements. For example, the data from the Series above could be represented as:
```python
heights = {'Ann': 1.5, 'Brian': 1.6, 'Charlie': 1.7, 'Dan': 1.8, 'Emma': 1.9}
```
This dictionary can be fed to a Series constructor along with a `name` attribute. A Series doesn't technically *need* a name attribute, but it's good practice to give it one.

Let's complete the construction of this Series in your first interactive exercise:

:::tip Replit

We will be trying out Replit for our interactive tutorials. Sign up for an account with your WUSTL email, and post on Piazza if you run into any issues. If you have enough screen real estate to use the tutorial embedded in our website, feel free to rearrange your workspace in a way that feels comfortable... you can show/hide windows or switch from 'stacked' to 'side-by-side' layout in the sidebar as necessary. Or, you can view the exercises in a separate browser window. Please post to Piazza if you have trouble getting the exercises to work smoothly.

:::

> Using the `heights` dictionary, initialize a Series that is equivalent to one we constructed with a list at the beginning of this section. Use the [`Series` reference page](https://pandas.pydata.org/docs/reference/api/pandas.Series.html) if you need some guidance.

<iframe width="100%" height="500px" src="https://replit.com/team/data-wrangling/Series-Construction"></iframe>


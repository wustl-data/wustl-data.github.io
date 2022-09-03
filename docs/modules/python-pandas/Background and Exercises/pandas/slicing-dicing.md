---
title: Slicing and Dicing
sidebar_position: 3
---

Hopefully this knowledge of Pandas' underlying structure can demystify the syntax for accessing data somewhat. Let's see what we mean.

Most commonly, you will want to access a particular column of a DataFrame. The syntax for this in Pandas is:

```python
df['column_name']
```

where `df` is the name of the DataFrame and `column_name` is the name of the column you want to access. For example, if we wanted to access the `height` column of the `measures` DataFrame, we would write:

```python
measures['height']
```

This returns a Series named *height* with the height measurements and retains the index labels from the dataframe! The bracket syntax we use to access a series from a DataFrame mirrors the syntax we would use if we wanted to access the list of height values from the dictionary that we initialized the DataFrame with:

```python
measures_dict ={
    'height': [1.5, 1.6, 1.7, 1.8, 1.9],
    'weight': [60, 65, 70, 75, 80]
}
measures_dict['height']
```

So what if we want only certain columns, or only certain rows? If you're reaching for `.loc` or `.iloc` in your holsters, just hold your horses, wrangler. First let's look at boolean indexing.

Boolean indexing uses a *boolean statement* to determine which rows to filter from the frame. For example, if we wanted to filter the `measures` DataFrame to only include people who are taller than 1.7 meters, we could write:

```python
measures[measures['height'] > 1.7]
```

When you're getting started with Pandas syntax, all of the brackets and repetition can get a little nauseating. But it's important to remember that the brackets are just a way to access the data, and the boolean statement is just a way to filter the data. So, if we wanted to filter the `measures` DataFrame to only include people who are taller than 1.7 meters and weigh less than 75 kilograms, we could write:

```python
measures[(measures['height'] > 1.7) & (measures['weight'] < 75)]
```

That's how Pandas selects rows, but what about columns?

Here is the syntax for selecting multiple columns from a dataframe:
```python
df[['column1', 'column3', 'column4']]
```

It's easy enough to conceptualize the outer brackets as our 'selector' and the inner brackets as indicating the *list* of column names. But let's think carefully about this one. Let's think again about our `measures_dict` we used to initialize the `measures` DataFrame. Can we access our data in the same way with the dictionary? Let's try it (with an `age` column added for clarity):

<iframe width="100%" height="600px" src="https://replit.com/team/data-wrangling/Accessing-multiple-columns"></iframe>

Ultimately, it makes more sense that this syntax works in Pandas when we consider that Pandas actually stores the columns as its own index, just on a different axis. Here we start to see some of the power that Pandas brings to the table under the hood with some of its 'syntactic sugar'. It is these sorts of connections and discoveries that encourage me to keep my Pandas toolbox simple and lean. Things can get pretty messy when you take too much advantage of Pandas' overly-permissive API.

Remember:

> **There should be one-- and preferably only one --obvious way to do it.**

:::info

For more on this approach to Pandas syntax, check out the YouTube series [An Opinionated Guide to Pandas](https://www.youtube.com/playlist?list=PLgJhDSE2ZLxaENZWWF_VOUa5886KiUd15), also linked in the Resources section.

:::
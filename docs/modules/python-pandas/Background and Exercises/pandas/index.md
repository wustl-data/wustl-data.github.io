---
title: Pandas
---

Pandas, in essence, is a library built on top of NumPy that provides some user-friendly ways to organize and label data. It also provides more sophisticated data manipulation functions than found in NumPy. 

Take a very quick glance at the [Pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html#user-guide) to get an idea of the various capbabilities of Pandas.

:::info

The name *Pandas* derives from the econometric term *panel data*.

:::

:::info

The fact that Pandas is built upon NumPy (which is built on C) makes it very fast -- on par with SQL for straightforward queries. Because Pandas offers all of the advantages of NumPy and more, it is a rare occasion that I find it necessary to use the NumPy package directly. Usually these occasions are:
1. compatibility with third-party packages which require NumPy arrays as inputs, or
2. NumPy's `linspace` method which is often useful for creating arbitrary x-axis data points for plotting symbolic mathematical functions (e.g. making the `x` array to plot `y = m*x + b`).

:::


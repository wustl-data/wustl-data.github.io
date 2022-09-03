---
title: List Comprehensions
sidebar_position: 4
---


List comprehensions are a concise way to create lists. For example, they can be used to create lists from other lists. For example, if we have a list of numbers and we want to create a new list that contains the square of each number, we could do:

```python
numbers = [1, 2, 3, 4, 5]
squares = [number**2 for number in numbers]
```

This is equivalent to:

```python
squares = []
for number in numbers:
    squares.append(number**2)
```

In addition to being more concise, this syntax allows us to avoid the extra step of initializing an empty list. Furthermore, list comprehensions usually perform faster than for loops. (Almost everything performs faster than for loops).


List comprehensions can also be used to filter a list. For example, if we want to create a list of only the even numbers from the `numbers` list, we could do:

```python
even_numbers = [number for number in numbers if number % 2 == 0]
```

:::tip

Between list comprehensions and Pandas' set-based syntax, I personally have not written a for-loop in my Python code in years. If you feel the need to use one, it might be worth it to stop and think if your code can be implemented more efficiently.

:::


---
title: Dictionaries and Dict Comprehensions
sidebar_position: 5
---

Dictionaries are a very powerful and common data structure in Python. Fundamentally, they are a set of key-value pairs. Usually (but not necessarily), keys are strings, while their corresponding values can be whatever you wish (including function handles). They are often an efficient way to handle branching circumstances in your code (as opposed to long if/elif statements).

For example instead of:

```python
if foo='a':
    print(1)
elif foo='b':
    print(2)
elif foo='c':
    print(3)
elif foo='d':
    print(4)
```

We may simply write:
```python
awesome_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
print(awesome_dict[foo])
```

You'll notice that we access the value for a key using brackets ([]) in the above example. Something to keep in mind is that if you try to access a nonexistent key with brackets, you will get an error. To avoid this, you can use the `get` method, which will return `None` if the key doesn't exist. For example:
```python
awesome_dict.get('e')
```
will return `None` instead of throwing an error.

Dict comprehensions are similar to list comprehensions and a concise way to create dictionaries. For example, if we have a dictionary of numbers and we want to create a new dictionary that contains the square of each number, we could do:

```python
numbers = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
squares = {key: value**2 for key, value in numbers.items()}
```

This is equivalent to:

```python
squares = {}
for key, value in numbers.items():
    squares[key] = value**2
```

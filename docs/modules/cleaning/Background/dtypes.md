---
title: Data types of fields
sidebar_position: 2
---

One of the first things we can do is make sure our data fields are represented with the correct data type. Why is the data type important?

1. Performance

    As discussed in the last module, Pandas is built on top of Numpy. Part of the reason it can take advantage of Numpy's speed is the consistent use of data types. As you might remember from CompSci 101 or a data structures course, different data types are stored different ways in the computer's memory, which makes searching and manipulating sets/lists of that data type work differently. For example, a boolean represented as a true boolean data type only takes up one bit of memory (in theory). If you try to represent the same variable as an integer, the computer now needs 4 bytes of information. That's 32x the memory space! If you try to represent the same information as the string values "True" or "False" - That's 16 bytes per character, for a minimum of 80 bytes! That's 640x the memory! Now imagine you have a data set with millions of true/false values and you need to search through the true/false values... it adds up quickly. Representing data with its natural data type will usually allow us to operate on it the fastest.

    :::tip Categoricals
    
    It's good to know that if your variable is a *categorical variable*, you can get huge performance boosts by representing it as such. Think of it as a boolean variable with more than two (binary) outcomes. If you have a column for day of the week, for example, you can (again, theoretically) represent all possible values in 3 bits (7 < 2**3 = 8) instead of the hundreds of bytes a string would take.

    :::

2. Functionality

    Because we are working in Python, it provides us with all kinds of helpful datatype-specific operations that require the data be of the right type. This is no exception when the data happens to be stored in a DataFrame rather than just in a regular Python variable. We can add and multiply columns together if they're numeric, but not if they're represented as strings, etc.


3. Saving time

    When the data is properly stored as its correct data type as soon as possible, it can save countless hours for that data's users, including yourself, keeping us from needing to convert the data later on, possibly several times across a code base.


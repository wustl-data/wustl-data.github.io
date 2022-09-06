---
title: Assignment 1
sidebar_position: 2
---

Grab your starter code from GitHub Classroom using [this link](https://classroom.github.com/a/XxyXydik). If you need them, follow the instructions in the `README` to help you get your starter code set up successfully.

:::tip

A green circle will be provided intermittently in the assignment instructions as a friendly reminder to commit your code.

:::

## Part 1

Use the Faker library and Pandas to generate a CSV with simulated personal data.

1. (40 points) - Create a script in your root of your project called `fake_records.py`. Using the [Faker](https://faker.readthedocs.io/en/master/index.html) data generator, write a function `generate` in this module that generates 1000 records with the following labels: `First Name`, `Last Name`, `Street Address`, `Phone Number` 🟢. Your function should organize the output using standard Python data structures (e.g. lists, dictionaries, tuples, etc.).

2. (20 points) - Create a function `save` in your `fake_records` module that takes the output of your function above as input, uses Pandas to convert the records to a CSV file in a root-level directory named `data` called `fake_records.csv`.

3. Modify your `.gitignore` file to ignore the `data` directory 🟢.

## Part 2
Perform some basic manipulations using Pandas.

1. (10 points) - Write a function `load` in `fake_records.py` that loads the `fake_records.csv` file into a Pandas DataFrame 🟢.

2. (10 points) - Write a function `add_salaries` that adds a column to the DataFrame called `Salary`. The values in this column should be randomly generated integers between 20,000 and 100,000 🟢.

3. (10 points) - Write a function `over_50k` that filters the DataFrame to only include records where the `Salary` is greater than 50,000 🟢.

4. (10 points) - Write a function `normalize` that mathematically normalizes the `Salary` column by subtracting the mean and dividing by the standard deviation 🟢. It should take a Series as input and return a Series as output. You do not need to modify the DataFrame.

Submit your assignment to gradescope at any stage of the process to check your work. Your highest score will be accepted. If you do not have your IDE configured to format your code on save, format it manually with `black` before submitting.

Follow this process for submitting your assignment to Gradescope.

1. Make sure the code you wish to evaluate is properly committed to your local repository.
2. Push your local repository to its `origin` remote on GitHub.
3. Use GradeScope to submit your assignment via the GitHub integration.
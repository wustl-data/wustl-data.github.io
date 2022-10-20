## Due: 10/27 5:00 PM

### [[GitHub Classroom - Assignment 4](https://classroom.github.com/a/3RHutrBD)]

*You should assume this assignment will be manually graded by default. Autograder code may be distributed and modified over the course of the week*.

Open the Stack Overflow Developer Survey dataset in this [Kaggle Notebook](https://www.kaggle.com/code/razamh/stack-overflow-developer-survey-analysis). Skim the notebook to get oriented with the data set. Determine which column contains relevant salary data for analysis.

:::tip

You may want to download the .csv of the dataset into your project repo for data exploration at this step. You are more than welcome to do so, but you'll likely get more out of this assignment without it.

:::




1. **10 points** - Refactor `test_median_by_undergrad_no_data` and `test_median_by_undergrad_single_major` into a single test using the following process:
    1. Configure the tests to use the `survey` fixture in `conftest.py`.
    2. Configure the `survey` fixture to take a `salaries_majors` fixture as input.
    3. Implement the `salaries_majors` fixture to return a 2-element tuple in the format `(salaries, majors)` where `salaries` and `majors` are lists.
    4. Use the [params](https://docs.pytest.org/en/latest/how-to/fixtures.html#parametrizing-fixtures) argument to pass both test cases to the fixtures.


2. **10 points** - Using `groupby.quantile`, write tests for a function `salary_quantile` that returns the 10th, 50th, and 90th salary percentile.
3. **10 points** - Implement `salary_quantile`.
4. **10 points** - Refactor your `median_by_undergrad` function to use the `salary_quantile` function above.

5. **10 points** - Write tests for a function `ecdf` that manually calculates the eCDF of the data.

    - Input: Groupby object
    - Output: Dataframe with index or column `UndergradMajor` and columns `ConvertedComp` (**sorted**), `Percentile` 

6. **10 points** - Implement the above function
    :::tip

    You may use any resources you find on the internet to implement this function, just cite your sources. You may also spot-check your work using Plotly's ecdf plot generator.

    :::

7. **5 points** Refactor your `quantile` function to use your `ecdf` function.

8. **10 points** Implement tests & a function `salaries_ecdf` that uses your previous functions to return salary ecdfs with undergraduate major as the first index level.

9. **5 points** Refactor your implementations to take a `GroupBy` object as input instead of a DataFrame.

10. **10 points** - Implement tests & for a function `gt_50_k` using `groupby.filter` to restrict your results to majors where the median salary is at least 50k. 

11. **10 points** - Using the functions we've build thus far, implement tests & a function `group_analysis` that takes any arbitrary numerical column and any arbitrary categorical column to display ecdf info by groupings. 
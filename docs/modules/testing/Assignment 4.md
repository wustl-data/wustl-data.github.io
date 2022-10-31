## Due: Tuesday, 11/1 5:00 PM

### [[GitHub Classroom - Assignment 4](https://classroom.github.com/a/3RHutrBD)]

*You should assume this assignment will be manually graded by default. Autograder code may be distributed and modified over the course of the week*.

Open the Stack Overflow Developer Survey dataset in this [Kaggle Notebook](https://www.kaggle.com/code/razamh/stack-overflow-developer-survey-analysis). Skim the notebook to get oriented with the data set. Determine which column contains relevant salary data for analysis and replace the dummy column names in the starter code.

:::tip

You might be thinking about downloading the .csv of the dataset into your project repo for data exploration at this step. You are more than welcome to do so, but you'll likely get more out of this assignment without it.

:::

### IMPORTANT:

I will be looking at your git histories to track your methodology as your repo progresses. You do not have to do steps 1-10 in order, but you do need to follow the red-green-refactor methodology. **Include commits at each red-green-refactor step.** You might need multiple cycles of R-G-R to fulfill the requirements at each step.


:::info NOTE ADDED 10/22

"🔴" steps will be subjectively evaluated to determine your test coverage--i.e. how closely your tests reflect the correctness of your code in the final solution. You can receive minimum 5 points for testing at least one attribute/behavior of the function accurately.

:::

🟢 - Write the bare mimimum amount of code to make your test pass. If you're unsure where to begin, try the approach of fixing the errors displayed in the terminal from the test run one-by-one until you get to green.

✅✅✅ - Refactor as many times as necessary, in small chunks, keeping your tests green. Commit after each refactoring. 

:::info NOTE ADDED 10/22

Unless it is explicitly its own step, your refactoring steps wont be graded, but it is strongly encouraged to spend more time on this step up front to battle complexity in your code.

:::

As a courtesy, try to only perform commits at each step above. Use the "staging" tree (using `git add`) to manage your files and changes as much as possible between these commits. If you end up with a lot of stray commits, look up how to do a `rebase` or `squash` with your commits. I may ask you to resubmit the assignment if your git history is hard to track.


1. **10 points** - Refactor `test_median_by_undergrad_no_data` and `test_median_by_undergrad_single_major` into a single test. 

:::note

Instructions for Part 1 updated 10/31

:::

**You may use the implementation in this [example](https://github.com/wustl-data/4-schlich/tree/6fc24430e945d3ca97f967c14f1b1d09da87c394/tests) repo** to guide your refactoring, however you must show at least one intermediate refactoring step. The implementation for this approach was reviewed in class and is available on Zoom. Alternatively, you also may attempt the following process as provided in the original version of the assignment.
    1. Configure the tests to use the `survey` fixture in [`conftest.py`](https://docs.pytest.org/en/6.2.x/fixture.html#conftest-py-sharing-fixtures-across-multiple-files). ✅
    2. Configure the `survey` fixture to take a `salaries_majors` fixture as input.
    3. Implement the `salaries_majors` fixture to return a 2-element tuple in the format `(salaries, majors)` where `salaries` and `majors` are lists. 
    4. Use the [params](https://docs.pytest.org/en/latest/how-to/fixtures.html#parametrizing-fixtures) argument to pass both test cases to the fixtures. 
    5. Merge your two tests into one. ✅


2. **10 points** - Using `groupby.quantile`, write tests for a function `salary_quantile` that returns the 10th, 50th, and 90th salary percentile grouped by undergraduate major. 🔴
3. **10 points** - Implement `salary_quantile`. 🟢
4. **10 points** - Refactor your `median_by_undergrad` function to use the `salary_quantile` function above. ✅✅✅

5. **10 points** - Write tests for a function `ecdf` which will manually calculate the eCDF of the data. Test for bounds and monotonicity. 🔴
 

6. **10 points** - Implement the above function 🟢✅
    :::tip

    You may use any resources you find on the internet to implement this function, just cite your sources in the README. You may also spot-check your work using Plotly's ecdf plot generator and the real .csv data.

    :::


7. **10 points** Implement tests & a function `salaries_ecdf` that uses your previous functions to return salary ecdfs with undergraduate major as the first index level. 🔴🟢✅

8. **10 points** Refactor your implementations to take a `GroupBy` object as input instead of a DataFrame. ✅

9. **10 points** - Implement tests and function `gt_50_k` using `groupby.filter` to restrict your results to majors where the median salary is at least 50k. 🔴🟢✅

10. **10 points** - Using the functions we've built thus far, implement tests & a function `group_analysis` that takes any arbitrary numerical column and any arbitrary categorical column, and an arbitrary choice of the previous transformation functions (median, quantile, ecdf) to return attribute info by groupings. 🔴🟢✅

Open the Stack Overflow Developer Survey dataset in this [Kaggle Notebook](https://www.kaggle.com/code/razamh/stack-overflow-developer-survey-analysis). Skim the notebook to get oriented with the data set. 

:::tip

You may want to download the .csv of the dataset into your project repo for exploration at this step. You are welcome to do so, but you might get more out of this assignment without the .csv file.

:::

:::info

The Kaggle notebook analysis performs some cleaning on the dataset -- feel free to apply as many or as few of these cleaning steps as you feel is appropriate.

:::

1. **10 points** - Write a test for a function `stacksurvey.median_by_undergrad` that calculates the median salary for each undergraduate major. Do not write any application code (i.e. in the `stacksurvey` module) in this step.

    - Tip 1: Use the Kaggle documentation to figure out which column you need to extract.
    - Tip 2:

    - Output: Series with Undergraduate major as index and median salary as values.

    - Remember arrange/act/assert: 
        - arrange: construct test cases 
            - *(5 points for constructing appropriate test data)*
        - act: call your function
        - assert: check that the output or side effects of your function are as expected 
            - *(5 points for an appropriate assertion. Stick to a strict unit testing philosophy and only assert one aspect of behavior here)*

    > Remember: your tests can be run with the `pytest` command, which automatically detects Python files and functions prefixed with `test` in the `tests/` folder. Please make a new test file and name your file and test appropriately. Make sure the example test provided passes before you start to make sure your test runner is working correctly. Make sure you are running pytest from your root directory and inside your virtual environment.
    
    > The [datatest](https://datatest.readthedocs.io/en/latest/intro/validating-pandas.html) library may help you generate more readable test output when asserting on Pandas objects.

2. **10 points** - Perform **one** cycle of red-green refactor being sure to make a commit at each step. Reminder:
    - Red 🔴: write your tests before you write your application code. Commit after writing your test in Question #1. After your commit, try not to modify the test other than to fix simple syntax or logic errors. If you need to significantly rewrite your test, start the cycle from scratch.
    - Green 🟢: Get your test to pass as quickly as possible. Code with the goal of writing the median function but stop when your test passes.
        > Don't worry too much about using the most efficient implementation, but do be as efficient as you can while still not getting stuck on the details. Save the tough thinking for the next step.
    - Refactor 🟢🟢🟢: apply refactorings to your code, but only refactorings that keep your tests green. 
        > Your goal is to make as many small refactoring commits as possible that keep your tests passing. Here's where you want to implement appropriate data types or replace code with more modular and concise versions of equivalent functionality. For example, this would be a good time to replace a loop with a more appropriate Pandas function that uses a set-based operation, replace repeating code blocks with a stub function, replace hard-coded values with generalizable variables, or replace a series of if/else statements with a dictionary. When you feel like you have no refactorings to make (including within your tests), write a new test or test condition to go back to red (move on to #3).

3. **10 points** - Write another unit test that tests one additional behavior of your median calculation function. If you can't think of an additional behavior to test, write a test for question #5 instead.

4. **10 points** - Do one more cycle of red-green-refactor.  This time also refactor your tests to extract common steps - consider using pytest fixtures to accomplish this. If you consider it appropriate, you can also combine your two tests into one test at this step. 5 points for at least 1 refactor and the other 5 points will be allocated based on completeness of refactoring. You may do as many additional cycles as you like before moving to step 5. 

Continuing the TDD development cycle at this point is encouraged but not required.

5. **20 points** - Using `groupby.quantile`, write a function that accepts a groupby object and returns the 10th, 50th, and 90th salary percentile.
    - Input: Groupby object
    - Output: Dataframe with columns "10%", "Median", and "90%" and UndergradMajor index.

6. **20 points** - Write a function that manually calculates the eCDF of the data for each undergraduate major.

    - Input: Groupby object
    - Output: Dataframe with index or column `UndergradMajor` and columns `ConvertedComp` (**sorted**), `Percentile` 

    > Hint: feel free to use implementations [here](https://stackoverflow.com/questions/21887625/python-empirical-distribution-function-ecdf-implementation) as a resource. You might build on previous steps or start a new implementation.

7. **10 points** - Write a function using `groupby.filter` to restrict your results to majors where the median salary is at least 50k. You should be able to apply this function to any of your previous functions where `UndergradMajor` defines the granularity.

8. **10 points** - Refactor out any remaining common elements of the previous functions. Code will be subjectively evaluated on cleanliness from 0-10. 
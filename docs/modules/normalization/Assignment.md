# Assignment 3

In the previous assignment we cleaned MEC campaign donation data to help us organize and query the dataset. In this assignment, we will implement such organization and querying. 

Example solutions for the previous assignment have been provided in the starter template for this assignment.

:::warning

This assignment document is still under revision. The current draft is provided now for anyone who wants to get a head start. This warning will be removed when the assignment has been fully tested with a working solution.

:::

:::tip

Example autograder scripts are provided in the `tests` directory in the starter code template. Run the tests with the `pytest` command to see more helpful errors and feedback than what Gradescope will give you.

Unless errors need to be corrected in the test logic, the actual autograder will use the same test logic as what is provided, but may use different example test data. Any corrections to the autograder logic-wise will be posted in this space.

:::


1. (50 points total) - Implement the following utility functions to partially normalize the MEC contributions dataset according to the provided specifications. These utility functions are fed to `normalize(contributions)` which returns a dictionary containing each of the resulting tables.

	Starting with tables that are easy to break off from our `contributions` table:

    1. (10 points) - Implement `split_addresses` by selecting the relevant columns, grouping on `Street Address` and `Zip`, and using `DataFrame.GroupBy.agg(pd.Series.mode)` to choose the *most common* elements to assign to `City` and `State`. 

	:::info

	`DataFrame.GroupBy.agg(pd.Series.mode)` is very similar to the example we saw that used the `sum` GroupBy function that we saw in class. Instead of `sum`, we are using the more generic `agg` (`aggreate`) function, which takes an aggregating function as an input. In this case, we are providng `pd.Series.mode` as this function, which returns the most common element in a series.

	:::
	
	2. (10 points) - Implement `split_recipients` to create a normalized `Recipients` by selecting the relevant columns, grouping on `MECID`, and using `DataFrame.GroupBy.agg(pd.Series.mode)` to choose the *most common* elements per name to assign to `Committee Name`.

	3. (10 points) - Implement `trim_contributions` to select only the fields in the `Contributions` table that are relevant to our analysis. Our campaign is only interested in the `Date` and `Amount` fields. You also need to include all foreign key fields.

	Now let's handle normalizing the `Contributor` information:

	3. (20 points) -Implement `stack_contributors`to combine contributor info. Suggested approach:
		1. Combining the fields `First Name` and `Last Name` into a new field called `Individual`.
		2. Give the column axis the label `Contributor Type` by assigning the label to `contributions.columns.name`.
		3. Select the appropriate columns.
		4. Use `DataFrame.stack()` to stack the columns into a single column.
		5. Give the resulting Series the name `Contributor Name`. 

	4. (20 points) - Implement `split_contributors` to create a normalized `Contributors` table. Suggested approach:
		1. Call `stack_contributors` to get a Series of contributors corresponding to each contribution.
		2. Reset the index to get a DataFrame with a column for each of the original columns in `contributions`.
		3. Use `DataFrame.GroupBy.first()` to get the first contributor name for each contributor type. (This is guaranteed to be correct because of our `stack` step).

2. (30 points) - Now that we have methods to normalize our data, we should provide a function to query various attributes of the data set. Implement `get_contributions(normalized_frames, selected_fields`, specified as follows:
  - Input: 
  	- `normalized_frames`: A dictionary of normalized tables, as returned by `normalize(contributions)`.
	- `selected_fields`: A dictionary of the form `{table_name: [field1, field2, ...]}` specifying which fields to select from each table. For example, `{'Contributions': ['Date'], 'Contributors': ['Contributor Name', "Contributor Type"]}` would select the `Date` field from the `Contributions` table and the `Contributor Name` and `Contributor Type` fields from the `Contributors` table.

  -Output: returns a DataFrame that is the result of joining the selected fields from each table in `normalized_frames` according to the foreign key relationships between the tables. After the tables are joined, group by all selected fields and provide a sum of the `Amount` total for the groups.

  
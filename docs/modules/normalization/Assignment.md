# Assignment 3

[Link to assignment on GitHub Classroom](https://classroom.github.com/a/xqUxry8v)

## Due: Thursday, Oct 13

In the previous assignment we cleaned MEC campaign donation data to help us organize and query the dataset. In this assignment, we will implement such organization and querying. 

Example solutions for the previous assignment have been provided in the starter template for this assignment.


:::tip

Example autograder scripts are provided in the `tests` directory in the starter code template. Run the tests with the `pytest` command to see more helpful errors and feedback than what Gradescope will give you.

Unless errors need to be corrected in the test logic, the actual autograder will use the same test logic as what is provided, but may use different example test data. Any corrections to the autograder logic-wise will be logged in this space.

:::


1. (70 points total) - Implement the following utility functions to partially normalize the MEC contributions dataset according to the provided specifications. These utility functions are fed to `normalize(contributions)` which returns a dictionary containing each of the resulting tables.

	Starting with tables that are easy to break off from our `contributions` table:

    1. (10 points) - Implement `split_addresses` by selecting the relevant columns, and using `DataFrame.GroupBy.agg(pd.Series.mode)` to group on `Zip` and `Street Address` and choose the *most common* elements to assign to `City` and `State`. 

		:::info

		`DataFrame.GroupBy.agg(pd.Series.mode)` is very similar to the example that used the `sum` GroupBy function that we saw in class. Instead of `sum`, we are using the more generic `agg` (`aggregate`) function, which takes an aggregating function as an input. In this case, we are providng `pd.Series.mode` as this function, which returns the most common element in a series.

		Example syntax:
		
		```python
		df.groupby(column_list).agg(pd.Series.mode)
		```

		:::
	
	2. (10 points) - Implement `split_recipients` to create a normalized `Recipients` by selecting the relevant columns, and using `DataFrame.GroupBy.agg(pd.Series.mode)` to group on `MECID` and choose the *most common* elements per name to assign to `Committee Name`.

	3. (10 points) - Implement `trim_contributions` to select only the fields in the `Contributions` table that are relevant to our analysis. Our campaign is only interested in the `Date` and `Amount` fields. You also need to include all foreign key fields.

	Now let's handle normalizing the `Contributor` information:

	3. (20 points) - Implement `stack_contributors` to tidy contributor info. Suggested approach:
		1. Combine the fields `First Name` and `Last Name` into a new column called `Individual`.
		2. Give the column axis the label `Type` by assigning the label to `contributions.columns.name`.
		3. Select the appropriate columns.
		4. Use `DataFrame.stack()` to stack the columns into a single column.
		5. Give the resulting Series the name `Contributor Name` with `Series.rename`. 

	4. (20 points) - Implement `split_contributors` to split off the normalized `Contributors` table from the main `Contributions` table. We will make the simplifying assumption that `Contributors` to `Addresses` is a one-to-many relationship (code is provided to implement this assumption in this step). Suggested approach:
		1. ~~Call `stack_contributors` to get a Series~~ Start with the provided code, which uses your `stack_contributors` implementation to give you a starting data frame of `contribution`s with the `contributor` info appropriately stacked and indexed and `Address` info appended.
		2. Reset the index (`DataFrame.reset_index()`) to get a DataFrame with columns `Contributor Name` and `Type`.
		3. Use `DataFrame.GroupBy.first()` to get the first contributor type for each contributor name. 

2. (30 points) - Now that we have methods to normalize our data, we should provide a function to query various attributes of the data set. Finish the function `get_contributions(normalized_frames, selected_fields)` by performing the appropriate joins.
	- Input: 
		- `normalized_frames`: A dictionary of normalized tables, as returned by `normalize(contributions)`.
		- `selected_fields`: A dictionary of the form `{table_name: [field1, field2, ...]}` specifying which fields to select from each table. For example, `{'Contributions': ['Date'], 'Contributors': ['Contributor Name', "Contributor Type"]}` would select the `Date` field from the `Contributions` table and the `Contributor Name` and `Type` fields from the `Contributors` table.
			- `Amount` is selected by default from the `Contributions` table so we can calculate the amount from various groupings
			- Fields that make up indexes/foreign keys should be grouped with the table they are an index for in `selected_fields`. For example, `MECID` should be included via `{'Recipients': ['MECID']}` rather than `{'Contributions': ['MECID']}`.

	- Output: returns a DataFrame that is the result of joining the selected fields from each table in `normalized_frames` according to the foreign key relationships between the tables. After the tables are joined, group by all selected fields and provide a sum of the `Amount` total for the groups.

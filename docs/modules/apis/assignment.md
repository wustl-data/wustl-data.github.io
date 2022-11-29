---
title: Assignment 6
---

## Building an API Client for US Census data
### Due: 12/2, 5:00 PM

#### [GitHub Classroom Link](https://classroom.github.com/a/bISSMHjc)

:::warning Corrections

See the [corrections log](corrections.md) for any adjustments that may be necessary to follow the assignment and submit autograder-compatible code. Please go over this page as necessary to make sure the suggested changes match your code base, and run a `git pull` if I've manually pushed any changes to your repository.

:::

Use the following resources to familiarize yourself with the US Census Web API. Browse/skim these resources and use them as a reference as needed:
- The [Census API User Guide](https://www.census.gov/data/developers/guidance/api-user-guide.Example_API_Queries.html). 
    - Full PDF guide
    - *Example API Queries* tab/section, **Population Estimates Example**. Steps 1-7 give a basic overview of the API syntax. 

- The base endpoint of the dataset at https://api.census.gov/data/2019/pep/charagegroups
    - sub-endpoints such as https://api.census.gov/data/2019/pep/charagegroups/variables.json (navigable from the dataset endpoint)


:::tip

This assignment introduces MyPy type checking. In the last module you were introduced to [*type hints*](https://docs.python.org/3/library/typing.html) as a non-binding way to specify the type of a function's argument or its output type. [Mypy](https://mypy.readthedocs.io/en/stable/index.html) is a tool can check your code for type errors before you run it. Type hints and type classes are provided here to help convey the specifications of the assignment. The default VS code settings in your Codespaces should provide type checks during linting. If you would like manually to check your code using the mypy type checker, run it with `mypy <file/dir/wildcard>`  in your terminal.

:::

Use the API documentation, test specifications, docstrings, and type hints to guide your implementations. 

1. **Base URL** (10 points)
    Implement the function `endpoint` to construct a base URL for the US Census API for a given year and dataset. 

2. **Variables** (10 points)
    Implement the function `variables` to convert a list of census variables into a comma separated string of the values.
    
3. **Variable Predicates** (10 points)
    Implement the function `convert_values` to convert a dictionary of `variable: values` into a dictionary of `variable: value_ids` for the categorical variables HISP and SEX.

    :::tip

    Use the documentation to find the mapping of categorical variable names to integers.

    :::


4. **State Geographies** (10 points)
    - Implement the function `geographies` that converts a list of state abbreviations to a string of comma-separated FIPS codes. 

    :::tip

    The `us` module is installed on your Codespace/devcontainer. Find its documentation for a convenient conversion function.

    :::


5. **County FIPS codes** (10 points)
    - County-level FIPS codes may be found at https://www.census.gov/library/reference/code-lists/ansi.html#county. However, programmatic access to this data will need an outside-the-box approach since the codes are hidden behind a dropdown menu. Inspect a few URLs of the county FIPS codes from different states, then create a function that returns a DataFrame of the county-level FIPS data from a state FIPS code.
    
    :::tip

    `pandas.read_csv` can take a URL argument as input.

    :::

6. **Implement API Client function** (30 points) 

    - Browse the Census API docs and determine where you may apply for an API key, and do so. Add a (text) file named `.env` to the root of your repository and add your API key as such:
    ```
    CENSUS_API_KEY=<yourkeyhere>
    ```
    - Add your `.env` file to your `.gitignore` so that others may not take advantage of your API key.        
    - Install `python-dotenv` using Poetry and use the library to read your API key from your .env into an *environment variable*.
    - Use `os.environ` to load the value from the *environment variable* into your code.
    - Optional: Modify the provided test for `census.get` to use your API key.

    :::info

    For users without an API key, the Census API allows for a certain number of free queries per day per IP address as described in their docs. The autograder will be provided with its own API key (set via environment variable), thus it must use an API key to avoid this limit and so must your implementations.

    :::

    - Implement the function `client.get` to retrieve data from the Census API using your API key.
    - Use the [requests](https://docs.python-requests.org/en/latest/) package to make your API call inside the body of your function.
    - Use the `params` argument of `requests.get` to pass your query parameters to the API in a "Pythonic" fashion.
    
    :::tip

    Utilize your functions from the previous steps to appropriate handle the arguments to your function and provide them to `requests.get`. You might consider adding a `counties`argument to  `geographies` to handle counties similarly to how you handled states.

    :::

    - Your function should return a DataFrame of the data returned by the API.


**7. 20 free points**

~~7. **Data verification** (20 points)~~
    ~~- To test that your API key is working properly (without sharing it with me!), write a function that uses the internal Python function `time.time_ns()` to seed a Faker instance. Use this instance to generate ten random integers from 1 to 50 and use these values as FIPS codes to make a query for all counties in these states and save the output to a file named `<your seed value>.csv` in your root directory. Run this function from a Python shell or notebook and include the file in your submission.~~
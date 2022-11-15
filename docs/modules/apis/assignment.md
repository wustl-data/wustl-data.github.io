---
title: Assignment 6
---

## Building an API Client

## US Census API
Use the following resources to familiarize yourself with the US Census web API. Browse and skim these resources as needed:
- The [Census API User Guide](https://www.census.gov/data/developers/guidance/api-user-guide.Example_API_Queries.html). 
    - Full PDF guide
    - *Example API Queries* tab/section, **Population Estimates Example**. Steps 1-7 give a basic overview of the API syntax. 

- The API endpoint of the dataset at https://api.census.gov/data/2019/pep/charagegroups
    - sub-endpoints such as https://api.census.gov/data/2019/pep/charagegroups/variables (navigable from the dataset endpoint)


:::tip

This assignment introduces MyPy type checking. In the last module you were introduced to [*type hints*](https://docs.python.org/3/library/typing.html) as a non-binding way to specify the type of a function's argument or its output type. [Mypy](https://mypy.readthedocs.io/en/stable/index.html) is a tool can check your code for type hours before you run it. Type hints and type classes are provided here to help convey the specifications of the assignment. To run the mypy type checker, run `mypy <filename>` in your terminal.

:::

Use the API Guide, test specifications, and type hints to guide your implementations. 

1. **Base URL** (10 points)
    Implement the function `endpoint` to construct a base URL for the US Census API for a given year and dataset. 

2. **Variables** (10 points)
    Implement the function `variables` to convert a list of census variables into a comma separated string of the values.
    
3. **Variable Predicates** (10 points)
    Implement the function `predicates` to convert a dictionary of `variable: values` pairs into a dictionary of `variable: value_id` pairs. Use the [`us`](https://github.com/unitedstates/python-us) package to convert names and abbreviations to FIPS codes and vice versa.

4. **Geographies** (10 points)


- `test_variables` - 5 pts
- `test_variable_predicates` - 5 pts
- `test_geographies` - 5 pts
- `test_api_call` - 10 pts


1. **Single example query -- 30 points**. 

    
    - Use [requests](https://docs.python-requests.org/en/latest/) to make your API call. `requests.get` allows you to pass in query parameters using a Python dictionary, so take advantage of this -- notice that we didn't compose the querystring URL manually and instead focused on encoding each individual parameter as parameter values (as with `variables`) or key-value pairs (as with `variable_predicates`). Python's new [dictionary union operator](https://www.python.org/dev/peps/pep-0584/#specification) might be helpful.
    - You must obtain an API key from the Census to authenticate your API client. Do some digging to find the link to the API key request form. Examine the test to figure out the syntax for authenticating if you have not already.
        - You must store this API key in an environment variable and load it into your code using `os.environ` and `python-dotenv`: see your `.env` file for examples.

2. **Generalizing your client - 30 points**

    Once your simple example test is passing, you will likely need to make some modifications to your code for it to handle all possible query options. The autograder will be testing a meaningful selection of queries. These tests will be hidden from you by the autograder, but you will be able to view the test output, including errors,s when you submit the assignment. Think about the following as you proceed:
    - You must figure out how your function will process the various inputs by thinking carefully about the specifications provided by the Census API, most of which are outlined in the Core Concepts section of the documentation.
    - When developing and testing your API, DO NOT include repeated external API requests inside of loops that iterate through all possible values -- Not only is this poor code design, but it puts an unnecessary strain on the Census's servers and network traffic. Many APIs will limit the rate at which you can make requests and may cut off your access if they find excessive activity coming from your IP address or API key.
    - You can find a csv export of county FIPS codes for a given state on census.gov... find it through Google if you need it in your code.
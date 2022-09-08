---
title: Imports, Packages, and Modules
sidebar_position: 2
---

At the top of most Python scripts you will see statements like:
```python
import pandas as pd
from scipy import stats
```

These statements are called *imports*. They allow us to use code from other Python scripts. The `pandas` library is a *package* that contains many *modules*. `pd` is an *alias* that allows us to refer to the `pandas` package using a shorter name. The `stats` module is part of the `scipy` package. The `from` statement allows us to import only the `stats` module from `scipy`.

Not only can you import packages and modules from third-party packages, you can also use them to reuse your own code from other files in your project. For example, if you have a file called `my_functions.py` in a top-level folder named `code` which contains a function called `my_function`, you can import it into another file using:

```python
from code.my_functions import my_function
# note the dot syntax to represent slashes in a file path
# you can use relative paths with the .. syntax
```

:::note Note (added 9/8)

In order for the above to be true, the module you wish to import must be *installed* on your system. There are many ways to accomplish this, but the easiest is to ensure your module is in a folder that matches the `"name"` field setting in your `pyproject.toml`.

:::

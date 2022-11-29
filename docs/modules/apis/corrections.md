---
title: Corrections/Clarifications
sidebar_position: 2
---

1. If you cloned an early version of the starter code, the type hint for the `geos` argument to `get` was incorrectly given as: 

    ```python
    dict[str, dict[str, list[str]]],
    ```
    The type hint should be:
    ```python
    dict[str, list[str]],
    ```
    It was also incorrectly listed as `geographies` in the docstring. You may not see these errors in your starter code if you cloned the assignment more recently.

2. Python was prematurely updated to version 3.11 in some versions of the starter code and needed to be reverted to 3.10 in order to be autograder-compatible. As of the time of this writing, all submissions running into the error have been pushed this fix on GitHub. Some students may still see the error in their starter code if they cloned the assignment before the fix was applied. Here are the steps I took to fix the error:

    1. In `.devcontainer/Dockerfile`, change the Python version to 3.10 in line 1
    2. In `pyproject.toml`, in the `[tool.poetry.dependencies]` section, change line that defines the Python version to `python = ">=3.10,<3.12"`.
    3. Open the VS Code command palette and search for `rebuild`. Select the appropriate option to rebuild the devcontainer with the new Python version.
    4. In the new devcontainer, run `poetry update` to update the virtual environment with the new Python version.
    5. Commit your code

    If your submission completely crashes the autograder, this is the likely culprit. You may either attempt the fix outlined above or ping me to push a fix to your repository when I am able.

3. Some other packages were also updated in the starter code to fix some mypy incompatibility issues. If you're interested in using the type checking, ask about an updated pyproject.toml file, or keep an eye on this space.

4. Be aware that the autograder is testing for more example cases than the ones provided in the starter tests. If you are passing your tests locally but failing your autograder's assertions, you may consider adding more test cases as appropriate. You should at least be able to see which tests are failing, if your autograder fails completely, please open a post on Piazza.

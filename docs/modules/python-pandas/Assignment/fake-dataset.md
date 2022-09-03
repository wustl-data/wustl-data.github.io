# Simulating a dataset with Faker

## Install the project dependencies
The code in the git repository that you cloned includes some package dependencies, so we will install them:
```bash
$ poetry install
```
Now, we will let Poetry create a virtual environment for us (which isolates our package dependencies from the rest of our system) and activate it for our shell:
```bash
$ poetry shell
```
You should now see your activated virtualenv on your command line next to your shell prompt. You are now ready to Python!!!

## Create a Python script
Using your IDE (or a bash command if you're feeling adventurous), create a file called `hw0.py`.

## Commit your changes
You made a successful change to your repository, so it's time to commit your changes. As we progress, you may skip some of these smaller meaningless commits between steps, but it's better to make too many commits now and get in the habit of performing them often.

 1. Check on your git status:
  ```bash
  $ git status
  ```
  You will notice that `hw0.py` is not being tracked. Let's fix that.
  
 2. Add your new file to "staging":
  ```bash
  $ git add hw0.py
  ```
  
 3. Check your git status again to make sure that your file was added to staging. It should be a nice green color. In general, "staging" should be reserved for files that are ready to commit, but you want to wait until you finish coding up some other files before committing them all together. Since this is the only file we are changing, let's commit.
 4. Run:
  ```bash
  $ git commit -m "add hw0.py"
  ```
  The `-m` flag stands for "message" and is required on all git commits -- simply type a sentence that describes what the commit does.  Someone reviewing your code should easily be able to review all of the steps you took via your commit history through these messages.
  
 Great job, almost done!
 
 ## Write some Python
 The dependencies you installed with Poetry included a neat package that generates fake data called `Faker`. Let's use this code to make a `.csv` file full of fake information.
 
 -- Exercise 1: getting familiar with Pandas
 
 5. Open `hw0.py`
 6. Skim the [Faker documentation](https://faker.readthedocs.io/en/master/) and write a script that generates 600 unique first names. Seed the data with your student ID. 
 7. Commit your code.
 8. Now, add some code that creates a file named `fake_data.csv`. This CSV file should contain a column for fake first names, last names, addresses, and phone numbers. I suggest using Python's built-in `csv` module or installing Pandas and using the `.to_csv` function. The `csv` route would be quicker, easier and more "Pythonic." On the other hand, now is as good of a time as any to start getting acquainted with Pandas if you are not already familiar.  Commit your code again -- I expect at least two commits out of this step.
 9. As a reminder, it's good practice to keep your data out of version control. I will be checking your scripts, not your data files! Add `fake_data.csv` to a file named `.gitignore`.

-- Exercise 2: getting familiar with Numpy

 1. Create a Numpy matrix of shape 300 x 50 containing random numbers.
 2. Calculate an array containing the mean of each column using `numpy.mean()`
 3. Calculate an array containing the standard deviation of each column using `numpy.std()`
 4. Normalize the matrix created from step 1 by subtracting the mean array from that matrix and then divide it by the standard deviation array (these tasks can easily be done thanks to a Numpy's feature called [broadcasting](https://numpy.org/doc/stable/user/basics.broadcasting.html)).  
 5. Save the normalized array as `normalized.npy` using `numpy.save()`. 

## Make your code look pretty 
Making sure that your code is well formatted and easy to read is an important step, especially when you work in a team where others may need to understand/build upon your code. 
Here we will introduce a fairly decent Python formatted called [Black](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html).

Install Black with:
``` bash
$ pip install black 
```
Note that Black requires you to have Python v3.6.2 or later.
If you want to use Black to format Jupyter Notebook, use 
``` bash
$ pip install 'black[jupyter]'
```
After making sure that your code works like you expect, simply run the following command from a terminal to format your code:
``` bash
$ black FILE_NAME.py # format a single file
$ black FOLDER_PATH/ # format all files in a folder
```
Alternatively, Black can also be ran with:
``` bash
$ python -m black FILE_OR_DIR_PATH
```

More information about Black and how to get started can be found [here](https://black.readthedocs.io/en/stable/usage_and_configuration/the_basics.html).


## Submit your code for grading
Your code is ready for grading!
Push to the repository you cloned this from:
```bash
$ git push
```
Behind the scenes, this runs `git push origin main` by default-- `origin` specifies which _remote_ repository you would like to push to, while `main` specifies which branch you would like to push.

Please submit your assignment to Gradescope using the link found on Canvas -- it looks like a few of you have already added the course on Gradescope so hopefully there are no issues finding the link. You may submit as many times as you would like up to the due date.

To simplify things a little for hw0, the checks only make sure that you

- have a script called "hw0_1.py" that creates a file called "fake_data.csv" when ran as a script (when ran from a terminal).
	- the CSV (generated from step 1 of exercise 1) contains 600 rows of data
	- the CSV has four columns
- Have a script called "hw0_2.py" that creates a file called "normalized_data.npy" when ran as a script. 
	- The npy file contains a Numpy array of shape 300x50
	- The mean and standard deviation of every column are 0 and 1, respectively. 

These are all checked in one test that awards 20 fake points.

Future assignments will have more stringent checks but this will do for now.

Please email me if you think the Autograder is incorrectly grading your submissions.
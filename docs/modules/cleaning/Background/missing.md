---
title: Missing Data
sidebar_position: 5
---

We usually want to strive for a good complete data set, but more often than not we will be dealing with missing or corrupted data for one or many attributes of an observation. 

Usually in a data wrangling context, "missing" data is data that is missing for a particular observation. For example, if we are looking at a data set of people and their heights, we might have a data set that looks like this:

| Name | Height | 
|------|--------|
| Alice | 5'4" |
| Bob | 6'1" |
| Charlie |  |
| Dave | 6'2" |

Obviously, we're missing the height for Charlie here. The way to proceed here is probably straightforward for this example; if we want to know the group's average height, we'd just leave Charlie out of the calculation.

:::warning

Be careful when replacing missing values with a constant value. In a different context, it might be tempting to replace a missing value with `0`, but doing so might throw off some calculations. Conversely, it's important to identify when a data set you have inherited contains this kind of data collection error and correct it. It's more common than you'd think.

:::

In other examples, it might not be so clear what to do with missing data. For example, if we are looking at a data set of people and their heights and weights, we might have a data set that looks like this:

| Name | Height | Weight |
|------|--------|--------|
| Alice | 5'4" | 120 lbs |
| Bob | 6'1" |  |
| Charlie |  | 140 lbs  |
| Dave | 6'2" | 150 lbs |

We won't get too deep in the mathematics, but hopefully the point here is intuitive. Let's imagine we're trying to model the relationship between height and weight. Obviously this is not a straight line, but you can imagine it being something like that. Since we observe a relationship between the other data points, we can probably make a reasonable guess about what Bob's weight is. We can also probably make a reasonable guess about what Charlie's height is. Filling in missing data with estimated values is called *interpolation*. Whether or not you may want to actually do this depends on the problem's context, but the point is that we can make a reasonable guess about what the missing data is, and we can use that to make a more complete or illustrative data set.

:::info

What step would we need to take before we would be able to make these interpolations?

:::

## True defaults

Despite our warning earlier about filling in missing values with a constant, sometimes it makes sense to do so if we can surmise some sort of true default value. In most instances, the need to do this will be remedied by adequate data collection practices: if "missing" data has a true default, it should be collected as such. For example, maybe you are administering an online quiz and you want to count wrong (provided) answers and non-answers alike to be marked incorrect in the evaluation. If we are truly confident that we will not need to differentiate between incorrect answers and non-answers, our software can simply record them all as "wrong". However, maybe the person programming the quiz is not confident that this is the case, and so they record the non-answers as `null` or `None` or `NaN` or whatever the language's equivalent is. In this case, we can fill in the `null` values with `False` or `0` or whatever our analysis needs to know that the non-answers should be counted incorrectly.


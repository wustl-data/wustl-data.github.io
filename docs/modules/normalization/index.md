---
title: What is normalized data?
sidebar_position: 1
---

Before we begin, let's clarify some terminology:

:::caution

In other contexts (including the context of HW1), *normalization* can refer to the process of transforming data to fit on a standard unit scale by subtracting the mean and dividing by the standard deviation. From this point on in the course, unless explicitly noted, *normalization* and *normalized data* will refer to the concepts in this module.

:::

At a very high level, normalized data is data organized according to a particular set of standards that intends to make data easier to understand and query. These standards have formal definitions, but as an introduction we will talk about a more general reframing of normalized data described as 'tidy' data.

Normalization is a property of *relational* data, which is a type of *tabular* data
- Tabular data: data organized in tables
- Relational data: tabular data linked by relationships defined by "foreign keys"
- Normalized data: relational data organized according to particular set of standards.
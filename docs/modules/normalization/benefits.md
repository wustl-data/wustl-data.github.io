---
title: Why does it matter?
sidebar_position: 4
---

## Benefits of Normalization

Now that we know all of the requirements for normalized data, let's look at some of the benefits of normalization.

### Data Integrity

Data in a database is not always static. Even if the data itself is static, the manipulations you make as you explore or query a dataset will change the structure of the data in consequential ways. Normalizing your data provides a huge safeguard against changes that can corrupt your data.

Formally we can describe these corruptions as "anomalies" in the data. There are three types of anomalies, but we will focus on the most common and illustrative kind: the **update anomaly**.

#### Update Anomalies

Given a *Salary* table with the following columns:

| id | name | current address | year | salary |
|----|------|---------|------|--------|
| 1  | Bob  | 123 Main St | 2018 | 50000 |
| 2  | Alice | 456 Main St | 2018 | 60000 |
| 1  | Bob  | 123 Main St | 2019 | 55000 |
| 2  | Alice | 456 Main St | 2019 | 65000 |

<detail><description>What happens if Bob moves and we need to fix his address? How would normalization help with this?</description>
  The updating script would have to update Bob's address in two rows instead of simply one. If we normalized the tables, the update would only have to make 1 change and the integrity of the data would still be intact. This is a simple example, but we can easily follow it to its logical extreme.
  </detail>

### Save on storage

By reducing the redudancies in the data, we can reduce the amount of memory required to store the data. This is especially important for large datasets.

### Accurate aggregations

Duplicate values can cause problems when you are trying to aggregate data. For example, if you want to calculate the average salary for an employee you might get the wrong answer if you are storing a salary column in a table that stores a time sheet for the employee.

### Semantic understanding

When you are working with a dataset, it is of utmost importance to understand the meaning of the data and how the fields and entities relate to one another. Normalization helps you understand the meaning of the data by providing a clear structure for the data.

---
title: Why does it matter?
sidebar_position: 2
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

What happens if Bob moves and we need to fix his address? How would normalization help with this?

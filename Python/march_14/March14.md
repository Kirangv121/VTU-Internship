# Python Fundamentals: Lists in Python

---

## 1. Lists in Python

A **list** is a built-in Python data structure used to store **multiple items in a single variable**.  
Lists are **ordered, mutable (changeable), and allow duplicate values**.

Lists are written using **square brackets `[]`**, and the elements are separated by commas.

Example:

```python
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
```

---

## Creating Lists

Lists can be created by placing elements inside square brackets.

Example:

```python
fruits = ["apple", "banana", "mango"]
numbers = [10, 20, 30, 40]
mixed_list = [1, "Python", True, 3.5]
```

Lists can store **different data types in the same list**.

You can also create an empty list and add items later.

Example:

```python
items = []
```

---

## Indexing

Indexing is used to **access individual elements from a list using their position**.

In Python, indexing **starts from 0**.

Example:

```python
fruits = ["apple", "banana", "mango"]

print(fruits[0])
print(fruits[1])
print(fruits[2])
```

Output:

```
apple
banana
mango
```

Python also supports **negative indexing**, which accesses elements from the end of the list.

Example:

```python
print(fruits[-1])
```

Output:

```
mango
```

---

## Slicing

Slicing is used to **access a range of elements from a list**.

Syntax:

```
list[start : end]
```

The `start` index is included, while the `end` index is excluded.

Example:

```python
numbers = [10, 20, 30, 40, 50]

print(numbers[1:4])
```

Output:

```
[20, 30, 40]
```

You can also omit start or end values.

Example:

```python
print(numbers[:3])
print(numbers[2:])
```

---

## Nested Lists

A **nested list** is a list that contains **another list as its element**.

Example:

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

Elements inside nested lists can be accessed using **multiple indices**.

Example:

```python
print(matrix[0][1])
```

Output:

```
2
```

Here:
- `matrix[0]` accesses the first inner list
- `matrix[0][1]` accesses the second element of that inner list

---
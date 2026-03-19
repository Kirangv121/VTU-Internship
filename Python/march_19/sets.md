# Python Fundamentals: Sets in Python

---

## 1. Sets in Python

A **set** is a built-in Python data structure used to **store multiple elements in a single variable**.  
Sets are mainly used when we want to **store unique values and avoid duplicates**.

Sets are written using **curly braces `{}`** or by using the `set()` function.

Example:

```python
numbers = {1, 2, 3, 4}
fruits = {"apple", "banana", "mango"}
```

Sets are commonly used in situations where **duplicate values should not be allowed**.

---

## Creating Sets

Sets can be created by placing elements inside **curly braces `{}`** separated by commas.

Example:

```python
numbers = {10, 20, 30, 40}
names = {"Alice", "Bob", "Charlie"}
```

You can also create a set using the **`set()` constructor**.

Example:

```python
numbers = set([1, 2, 3, 4])
```

To create an **empty set**, you must use `set()` because `{}` creates an empty dictionary.

Example:

```python
empty_set = set()
```

---

## Unique Values

One of the main features of sets is that they **store only unique elements**.  
If duplicate values are added, they will automatically be removed.

Example:

```python
numbers = {1, 2, 3, 3, 4, 4, 5}

print(numbers)
```

Output:

```
{1, 2, 3, 4, 5}
```

The duplicate values are automatically eliminated.

---

## Set Characteristics

Sets have several important characteristics:

- **Unordered** → Elements do not have a fixed position.
- **Unique Elements** → Duplicate values are automatically removed.
- **Mutable** → Elements can be added or removed after creation.
- **No Indexing** → Elements cannot be accessed using indexes.
- **Iterable** → We can loop through set elements using loops.

Example:

```python
fruits = {"apple", "banana", "mango"}

for fruit in fruits:
    print(fruit)
```

Sets are very useful when working with **unique collections of items** or performing mathematical operations like union and intersection.

---
# Python Fundamentals: Set Methods in Python

---

# 1. Set Methods

Sets in Python provide several **built-in methods** that allow us to perform operations such as **adding elements, removing elements, and performing mathematical set operations** like union, intersection, and difference.

Sets are particularly useful when working with **unique data collections** and when performing operations similar to **mathematical sets**.

Example set:

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
```

---

# add()

The `add()` method is used to **add a single element to a set**.

Since sets only store **unique values**, if the element already exists, it will **not be added again**.

Syntax:

```
set.add(element)
```

Example:

```python
numbers = {1, 2, 3}

numbers.add(4)

print(numbers)
```

Output:

```
{1, 2, 3, 4}
```

Example with duplicate value:

```python
numbers.add(3)
print(numbers)
```

The value `3` will not be duplicated in the set.

---

# remove()

The `remove()` method is used to **remove a specific element from a set**.

Syntax:

```
set.remove(element)
```

Example:

```python
numbers = {1, 2, 3, 4}

numbers.remove(2)

print(numbers)
```

Output:

```
{1, 3, 4}
```

Important note:

If the element **does not exist**, `remove()` will produce a **KeyError**.

Example:

```python
numbers.remove(10)
```

This will raise an error because `10` is not present in the set.

---

# union()

The `union()` method is used to **combine elements from two sets into a new set**.

All **unique elements from both sets** will appear in the result.

Syntax:

```
set1.union(set2)
```

Example:

```python
set_a = {1, 2, 3}
set_b = {3, 4, 5}

result = set_a.union(set_b)

print(result)
```

Output:

```
{1, 2, 3, 4, 5}
```

Duplicate elements are automatically removed.

Union can also be performed using the **`|` operator**.

Example:

```python
result = set_a | set_b
```

---

# intersection()

The `intersection()` method returns a new set containing **only the elements that exist in both sets**.

Syntax:

```
set1.intersection(set2)
```

Example:

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

result = set_a.intersection(set_b)

print(result)
```

Output:

```
{3, 4}
```

Intersection can also be performed using the **`&` operator**.

Example:

```python
result = set_a & set_b
```

---

# difference()

The `difference()` method returns a new set containing **elements that exist in the first set but not in the second set**.

Syntax:

```
set1.difference(set2)
```

Example:

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5}

result = set_a.difference(set_b)

print(result)
```

Output:

```
{1, 2}
```

Difference can also be performed using the **`-` operator**.

Example:

```python
result = set_a - set_b
```

---

# symmetric_difference()

The `symmetric_difference()` method returns a set containing **elements that are present in either of the sets but not in both**.

It removes the **common elements** and keeps only the **unique elements from both sets**.

Syntax:

```
set1.symmetric_difference(set2)
```

Example:

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

result = set_a.symmetric_difference(set_b)

print(result)
```

Output:

```
{1, 2, 5, 6}
```

Symmetric difference can also be performed using the **`^` operator**.

Example:

```python
result = set_a ^ set_b
```

---

# Summary of Set Operations

| Method | Description |
|------|-------------|
| `add()` | Adds an element to a set |
| `remove()` | Removes a specific element from a set |
| `union()` | Combines two sets and returns all unique elements |
| `intersection()` | Returns elements common to both sets |
| `difference()` | Returns elements present in one set but not the other |
| `symmetric_difference()` | Returns elements present in either set but not both |

---
# Python Fundamentals: Tuple Methods

---

## 1. Tuple Methods

Tuples are **immutable data structures**, meaning their elements cannot be modified after creation.  
Because of this property, Python provides only **two built-in methods** for tuples:

- `count()`
- `index()`

These methods help in **analyzing or searching elements within a tuple**.

Example tuple:

```python
numbers = (10, 20, 30, 20, 40, 20)
```

---

## count()

The `count()` method is used to **count how many times a specific element appears in a tuple**.

Syntax:

```
tuple.count(value)
```

Example:

```python
numbers = (10, 20, 30, 20, 40, 20)

print(numbers.count(20))
```

Output:

```
3
```

This means the value `20` appears **three times** in the tuple.

---

## index()

The `index()` method is used to **find the position (index) of the first occurrence of a specific element** in a tuple.

Syntax:

```
tuple.index(value)
```

Example:

```python
numbers = (10, 20, 30, 20, 40)

print(numbers.index(20))
```

Output:

```
1
```

This means the first occurrence of `20` is at **index position 1**.

If the element does not exist in the tuple, Python will raise an **error**.

Example:

```python
numbers.index(100)
```

This will produce a **ValueError** because the element is not present in the tuple.

---
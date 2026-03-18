# Python Fundamentals: Operations on Tuples

---

## 1. Operations on Tuples

Tuples support several operations that allow us to **access, check, and traverse elements** stored inside them.  
Although tuples are **immutable**, we can still perform operations like indexing, slicing, membership testing, and iteration.

Example tuple:

```python
numbers = (10, 20, 30, 40, 50)
```

---

## Indexing

Indexing is used to **access a specific element from a tuple using its position**.

In Python, indexing **starts from 0**.

Example:

```python
numbers = (10, 20, 30, 40, 50)

print(numbers[0])
print(numbers[2])
```

Output:

```
10
30
```

Python also supports **negative indexing**, which allows access to elements from the end of the tuple.

Example:

```python
print(numbers[-1])
```

Output:

```
50
```

---

## Slicing

Slicing is used to **extract a portion of a tuple by specifying a range of indices**.

Syntax:

```
tuple[start : end]
```

The `start` index is included, while the `end` index is excluded.

Example:

```python
numbers = (10, 20, 30, 40, 50)

print(numbers[1:4])
```

Output:

```
(20, 30, 40)
```

Other slicing examples:

```python
print(numbers[:3])
print(numbers[2:])
```

---

## Membership

Membership operations are used to **check whether a specific element exists in a tuple**.

Python provides the `in` and `not in` operators for this purpose.

Example:

```python
numbers = (10, 20, 30, 40)

print(20 in numbers)
print(50 in numbers)
```

Output:

```
True
False
```

Example using `not in`:

```python
print(60 not in numbers)
```

---

## Iteration

Iteration means **traversing through each element of the tuple one by one**.

This is commonly done using a `for` loop.

Example:

```python
numbers = (10, 20, 30, 40)

for num in numbers:
    print(num)
```

Output:

```
10
20
30
40
```

Iteration allows us to **process or display each element stored in the tuple**.

---
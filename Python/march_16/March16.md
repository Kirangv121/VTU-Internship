# Python Fundamentals: Tuples in Python

---

## 1. Tuples in Python

A **tuple** is a built-in Python data structure used to store **multiple elements in a single variable**, similar to a list.  
However, unlike lists, tuples are **immutable**, which means their elements **cannot be changed after creation**.

Tuples are written using **parentheses `()`**, and elements are separated by commas.

Example:

```python
numbers = (1, 2, 3, 4)
names = ("Alice", "Bob", "Charlie")
```

Tuples can store **different data types** and also allow duplicate values.

Example:

```python
data = (10, "Python", True, 3.5)
```

---

## Tuple Creation

Tuples can be created by placing elements inside **parentheses** separated by commas.

Example:

```python
fruits = ("apple", "banana", "mango")
numbers = (10, 20, 30)
```

A tuple with a **single element** must include a comma after the element.

Example:

```python
single_tuple = (5,)
```

Tuples can also be created without parentheses.

Example:

```python
colors = "red", "green", "blue"
```

---

## Tuple Immutability

One important property of tuples is **immutability**, which means their elements **cannot be modified after the tuple is created**.

Example:

```python
numbers = (1, 2, 3)

numbers[0] = 10
```

This will produce an error because tuples **do not allow item assignment**.

However, tuples can still contain **mutable elements like lists**, which can be modified internally.

Example:

```python
data = (1, [2, 3], 4)

data[1][0] = 10
```

---

## Packing and Unpacking

### Packing

Packing refers to **storing multiple values into a single tuple**.

Example:

```python
student = ("Rahul", 20, "Python")
```

Here, multiple values are **packed into one tuple variable**.

---

### Unpacking

Unpacking refers to **assigning the values of a tuple to multiple variables**.

Example:

```python
name, age, course = student

print(name)
print(age)
print(course)
```

Each variable receives the corresponding value from the tuple.

Python also supports **extended unpacking** using `*`.

Example:

```python
numbers = (1, 2, 3, 4, 5)

a, *b = numbers

print(a)
print(b)
```

Output:

```
1
[2, 3, 4, 5]
```

---
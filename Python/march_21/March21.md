# Python Fundamentals: Dictionaries in Python

---

## 1. Dictionaries in Python

A **dictionary** is a built-in Python data structure used to store data in **key-value pairs**.  
Each element in a dictionary consists of a **key** and its corresponding **value**.

Dictionaries are:
- **Unordered** (no fixed index positions)
- **Mutable** (can be modified)
- **Indexed using keys (not numbers)**

Dictionaries are written using **curly braces `{}`**.

Example:

```python
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
```

---

## Key-Value Pairs

A dictionary stores data in the form of **key-value pairs**, where:

- **Key** → A unique identifier (must be immutable like string, number, tuple)
- **Value** → The data associated with the key

Example:

```python
student = {
    "name": "Rahul",
    "age": 20
}
```

Here:
- `"name"` and `"age"` are keys
- `"Rahul"` and `20` are values

Keys must be **unique**, but values can be duplicated.

---

## Creating Dictionary

Dictionaries can be created using **curly braces `{}`** with key-value pairs.

Example:

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "Bangalore"
}
```

You can also create an empty dictionary and add elements later.

Example:

```python
data = {}
```

Using `dict()` constructor:

```python
info = dict(name="Bob", age=30)
```

---

## Accessing Values

Values in a dictionary are accessed using their **keys**.

Example:

```python
student = {
    "name": "Rahul",
    "age": 20
}

print(student["name"])
print(student["age"])
```

Output:

```
Rahul
20
```

Using `get()` method (safe way):

```python
print(student.get("name"))
```

If the key does not exist, `get()` returns `None` instead of an error.

---

## Nested Dictionaries

A **nested dictionary** is a dictionary that contains **another dictionary as its value**.

Example:

```python
students = {
    "student1": {
        "name": "Rahul",
        "age": 20
    },
    "student2": {
        "name": "Amit",
        "age": 22
    }
}
```

Accessing nested values:

```python
print(students["student1"]["name"])
```

Output:

```
Rahul
```

Nested dictionaries are useful for storing **complex structured data**.

---
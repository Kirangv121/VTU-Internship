# Python Fundamentals: Dictionary Methods

---

## 1. Dictionary Methods

Dictionaries in Python provide several **built-in methods** to access, modify, and manage data stored as **key-value pairs**.

These methods make it easy to **retrieve keys, values, update data, and remove elements**.

Example dictionary:

```python
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
```

---

## keys()

The `keys()` method is used to **get all the keys from a dictionary**.

Syntax:

```
dict.keys()
```

Example:

```python
print(student.keys())
```

Output:

```
dict_keys(['name', 'age', 'course'])
```

---

## values()

The `values()` method is used to **get all the values from a dictionary**.

Syntax:

```
dict.values()
```

Example:

```python
print(student.values())
```

Output:

```
dict_values(['Rahul', 20, 'Python'])
```

---

## items()

The `items()` method returns **both keys and values as pairs (tuples)**.

Syntax:

```
dict.items()
```

Example:

```python
print(student.items())
```

Output:

```
dict_items([('name', 'Rahul'), ('age', 20), ('course', 'Python')])
```

---

## get()

The `get()` method is used to **access the value of a key safely**.

If the key does not exist, it returns **None instead of an error**.

Syntax:

```
dict.get(key)
```

Example:

```python
print(student.get("name"))
print(student.get("marks"))
```

Output:

```
Rahul
None
```

---

## update()

The `update()` method is used to **add new key-value pairs or modify existing ones**.

Syntax:

```
dict.update({key: value})
```

Example:

```python
student.update({"age": 21})
student.update({"city": "Bangalore"})

print(student)
```

Output:

```
{'name': 'Rahul', 'age': 21, 'course': 'Python', 'city': 'Bangalore'}
```

---

## pop()

The `pop()` method is used to **remove a specific key and return its value**.

Syntax:

```
dict.pop(key)
```

Example:

```python
removed_value = student.pop("age")

print("Removed:", removed_value)
print("Updated Dictionary:", student)
```

Output:

```
Removed: 21
Updated Dictionary: {'name': 'Rahul', 'course': 'Python'}
```

If the key does not exist, it will produce an error.

---

## Summary

| Method | Description |
|--------|-------------|
| `keys()` | Returns all keys in the dictionary |
| `values()` | Returns all values in the dictionary |
| `items()` | Returns key-value pairs as tuples |
| `get()` | Safely retrieves value for a key |
| `update()` | Adds or updates key-value pairs |
| `pop()` | Removes a key and returns its value |

---
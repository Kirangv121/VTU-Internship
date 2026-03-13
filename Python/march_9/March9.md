# Python Fundamentals: Variables and Data Types

---

## 1. Variables in Python

Variables are used to **store data values in a program**. In Python, variables are created when a value is assigned to them.

Example:
```python
x = 10
name = "Python"
```

---

### Variable Declaration
In Python, you do not need to declare the type of a variable explicitly. A variable is created automatically when a value is assigned using the `=` operator.

Example:
```python
age = 20
language = "Python"
```

---

### Naming Rules
To write valid and clean Python code, follow these rules when naming variables:

* **Start with a letter or underscore** – e.g., `name`, `_value`
* **Cannot start with a number** – `1name` is invalid
* **Use only letters, numbers, and underscores**
* **Variable names are case-sensitive** – `age`, `Age`, and `AGE` are different
* **Avoid Python reserved keywords** like `class`, `if`, `while`, etc.

Valid examples:
```
student_name
_age
total_marks
user1
```

Invalid examples:
```
1name
class
total-marks
```

---

### Dynamic Typing
Python is **dynamically typed**, which means a variable can store different data types during program execution.

Example:
```python
x = 10        # Integer
x = "Ten"     # String
```

---

### Type Checking (`type()`)
Python provides the **`type()` function** to check the data type of a variable.

Example:
```python
x = 10
print(type(x))
```

Output:
```
<class 'int'>
```

---

# 2. Data Types in Python

Data types define **the type of value stored in a variable**. Python provides several built-in data types.

---

### int
The `int` data type represents **whole numbers without decimal points**.

Example:
```python
age = 21
year = 2026
```

---

### float
The `float` data type represents **numbers with decimal points**.

Example:
```python
price = 99.99
temperature = 36.5
```

---

### str
The `str` data type represents **text or sequence of characters enclosed in quotes**.

Example:
```python
name = "Python"
message = "Hello World"
```

---

### bool
The `bool` data type represents **logical values**, which can be either `True` or `False`.

Example:
```python
is_student = True
is_logged_in = False
```

---

### NoneType
`NoneType` represents the **absence of a value or a null value**.

Example:
```python
value = None
```
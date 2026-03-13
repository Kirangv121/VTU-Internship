# Python Fundamentals: Boolean and Arithmetic Operators

---

## 1. Boolean in Python

A **Boolean** is a data type that represents logical values used in conditions and decision-making in programs.

Python provides two Boolean values:
- `True`
- `False`

These values are commonly used in comparisons, conditions, and logical operations.

Example:
```python
is_logged_in = True
is_admin = False
```

---

### Boolean Values

Boolean values represent **truth conditions** in a program.

There are only two Boolean values in Python:

* **True** – Represents a true condition
* **False** – Represents a false condition

Example:
```python
print(True)
print(False)
```

These values are often produced by comparison operations.

Example:
```python
print(10 > 5)   # True
print(3 > 8)    # False
```

---

### Truthy & Falsy Values

In Python, some values are automatically considered **True (Truthy)** or **False (Falsy)** when used in conditions.

**Falsy values include:**

- `False`
- `None`
- `0`
- `0.0`
- `""` (empty string)
- `[]` (empty list)
- `{}` (empty dictionary)

Example:
```python
if 0:
    print("True")
else:
    print("False")
```

Output:
```
False
```

All other values are generally considered **Truthy**.

Example:
```python
if 10:
    print("This is Truthy")
```

---

### Boolean Operations

Boolean operations are used to **combine or modify logical conditions**.

Common Boolean operators include:

* `and` – Returns True if **both conditions are true**
* `or` – Returns True if **at least one condition is true**
* `not` – Reverses the Boolean value

Example:
```python
a = True
b = False

print(a and b)
print(a or b)
print(not a)
```

---

# 2. Arithmetic Operators

Arithmetic operators are used to **perform mathematical calculations in Python**.

---

### Basic Arithmetic Operators

| Operator | Description | Example |
|--------|-------------|--------|
| `+` | Addition | `5 + 3` |
| `-` | Subtraction | `5 - 3` |
| `*` | Multiplication | `5 * 3` |
| `/` | Division | `10 / 2` |
| `%` | Modulus (remainder) | `10 % 3` |
| `//` | Floor Division | `10 // 3` |

Example:
```python
a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a // b)
```

---

### Exponentiation Operator (`**`)

The `**` operator is used to **raise a number to the power of another number**.

Example:
```python
print(2 ** 3)
```

Output:
```
8
```

This means **2 raised to the power of 3**.

---

### Operator Precedence

Operator precedence determines **the order in which operations are performed in an expression**.

Python follows standard mathematical rules:

1. `()` Parentheses
2. `**` Exponentiation
3. `*`, `/`, `//`, `%`
4. `+`, `-`

Example:
```python
result = 5 + 3 * 2
print(result)
```

Output:
```
11
```

Multiplication happens first before addition.

Example with parentheses:
```python
result = (5 + 3) * 2
print(result)
```

Output:
```
16
```

---

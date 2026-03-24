# Python Fundamentals: Encapsulation in Python

---

## 1. Encapsulation in Python

**Encapsulation** is an OOP concept that means **binding data (variables) and methods (functions) together into a single unit (class)** and restricting direct access to some components.

It helps in:
- **Data protection**
- **Controlled access**
- **Improving code security and maintainability**

---

## Private Variables

In Python, **private variables** are used to restrict direct access from outside the class.

They are defined using **double underscore `__`** before the variable name.

Example:

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.__age = age   # private variable
```

Here:
- `name` → public variable  
- `__age` → private variable

Trying to access directly:

```python
s1 = Student("Rahul", 20)
print(s1.__age)   # This will give an error
```

---

## Getter Methods

A **getter method** is used to **access the value of a private variable** safely.

Example:

```python
class Student:
    def __init__(self, age):
        self.__age = age

    def get_age(self):
        return self.__age
```

Usage:

```python
s1 = Student(20)
print(s1.get_age())
```

Output:

```
20
```

---

## Setter Methods

A **setter method** is used to **modify the value of a private variable** with control.

Example:

```python
class Student:
    def __init__(self, age):
        self.__age = age

    def set_age(self, age):
        self.__age = age
```

Usage:

```python
s1 = Student(20)
s1.set_age(25)
print(s1.get_age())
```

Output:

```
25
```

---

## Data Hiding

**Data hiding** means restricting direct access to internal data of the object.

It ensures that:
- Data cannot be modified accidentally
- Only controlled methods can access or update data

Example:

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        self.__balance += amount
```

Here:
- `__balance` is hidden from direct access
- It can only be accessed through methods

---

## Complete Example

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age = age


s1 = Student("Rahul", 20)

print("Age:", s1.get_age())

s1.set_age(25)
print("Updated Age:", s1.get_age())
```

---

## Summary

| Concept | Description |
|--------|-------------|
| Encapsulation | Wrapping data and methods into one unit |
| Private Variables | Variables restricted using `__` |
| Getter | Method to access private data |
| Setter | Method to modify private data |
| Data Hiding | Restricting direct access to data |

---
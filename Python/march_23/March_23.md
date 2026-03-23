# Python Fundamentals: OOP Concepts in Python

---

## 1. OOP Concepts in Python

**Object-Oriented Programming (OOP)** is a programming approach that is based on the concept of **objects and classes**.  
It helps in organizing code in a **structured, reusable, and modular way**.

Python supports OOP concepts such as:
- Classes
- Objects
- Attributes
- Methods
- Constructors

---

## Class & Object

### Class
A **class** is a blueprint or template used to create objects.  
It defines the structure (variables) and behavior (functions) of objects.

Example:

```python
class Student:
    pass
```

### Object
An **object** is an instance of a class.  
It represents a real-world entity and contains actual data.

Example:

```python
s1 = Student()
```

Here, `Student` is the class and `s1` is the object.

---

## Attributes

**Attributes** are variables that belong to a class or an object.  
They store data related to the object.

Example:

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

Here:
- `name` and `age` are attributes of the class

---

## Methods

**Methods** are functions defined inside a class.  
They define the behavior or actions that an object can perform.

Example:

```python
class Student:
    def display(self):
        print("Student details")
```

Methods always take `self` as the first parameter, which refers to the current object.

---

## __init__ Constructor

The `__init__` method is a **constructor** in Python.  
It is automatically called when an object is created.

It is used to **initialize object attributes**.

Example:

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

Creating object:

```python
s1 = Student("Rahul", 20)
```

Here, the constructor initializes:
- `name = Rahul`
- `age = 20`

---

## Complete Example

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)


s1 = Student("Rahul", 20)
s1.display()
```

Output:

```
Name: Rahul
Age: 20
```

---

## Summary

| Concept | Description |
|--------|-------------|
| Class | Blueprint for creating objects |
| Object | Instance of a class |
| Attributes | Variables that store data |
| Methods | Functions inside a class |
| __init__ | Constructor to initialize object |

---
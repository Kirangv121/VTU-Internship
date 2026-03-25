# Python Fundamentals: Inheritance in Python

---

## 1. Inheritance in Python

**Inheritance** is an OOP concept where one class **inherits properties and methods from another class**.  
It helps in **code reusability** and reduces duplication.

- The class being inherited from is called the **Base Class (Parent Class)**
- The class that inherits is called the **Derived Class (Child Class)**

---

## Base Class

A **base class** is the class whose properties and methods are inherited by another class.

Example:

```python
class Animal:
    def speak(self):
        print("Animal makes sound")
```

---

## Derived Class

A **derived class** is the class that **inherits from the base class**.

Syntax:

```
class ChildClass(ParentClass):
```

Example:

```python
class Dog(Animal):
    def bark(self):
        print("Dog barks")
```

Usage:

```python
d = Dog()
d.speak()
d.bark()
```

Output:

```
Animal makes sound
Dog barks
```

---

## super() Function

The `super()` function is used to **call methods or constructors of the parent class** from the child class.

It is mainly used inside the constructor to initialize parent class attributes.

Example:

```python
class Animal:
    def __init__(self, name):
        self.name = name


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed
```

Usage:

```python
d = Dog("Tommy", "Labrador")
print(d.name)
print(d.breed)
```

Output:

```
Tommy
Labrador
```

---

## Types of Inheritance

Python supports different types of inheritance:

### 1. Single Inheritance
One child class inherits from one parent class.

```python
class A:
    pass

class B(A):
    pass
```

---

### 2. Multiple Inheritance
A child class inherits from **more than one parent class**.

```python
class A:
    pass

class B:
    pass

class C(A, B):
    pass
```

---

### 3. Multilevel Inheritance
A class inherits from a class which is already inherited from another class.

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass
```

---

### 4. Hierarchical Inheritance
Multiple child classes inherit from the same parent class.

```python
class A:
    pass

class B(A):
    pass

class C(A):
    pass
```

---

### 5. Hybrid Inheritance
A combination of two or more types of inheritance.

---

## Complete Example

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def show(self):
        print("Name:", self.name)


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def display(self):
        print("Breed:", self.breed)


d = Dog("Tommy", "Labrador")

d.show()
d.display()
```

---

## Summary

| Concept | Description |
|--------|-------------|
| Inheritance | Acquiring properties from another class |
| Base Class | Parent class |
| Derived Class | Child class |
| super() | Calls parent class methods |
| Types | Single, Multiple, Multilevel, Hierarchical, Hybrid |

---
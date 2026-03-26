# Python Fundamentals: Polymorphism in Python

---

## 1. Polymorphism

**Polymorphism** means **"many forms"**.  
In Python, it allows the **same function or method name to behave differently** based on the object or data it is working with.

It improves:
- Code flexibility
- Reusability
- Scalability

Example:

```python
print(len("Hello"))     # String length
print(len([1, 2, 3]))  # List length
```

Here, `len()` works differently for different data types.

---

## Method Overriding

**Method overriding** occurs when a **child class provides its own implementation of a method that is already defined in the parent class**.

Example:

```python
class Animal:
    def speak(self):
        print("Animal makes sound")


class Dog(Animal):
    def speak(self):
        print("Dog barks")
```

Usage:

```python
d = Dog()
d.speak()
```

Output:

```
Dog barks
```

The child class method overrides the parent class method.

---

## Method Overloading (Conceptual)

Python does not support traditional method overloading like some other languages.  
However, it can be achieved using **default arguments or variable-length arguments**.

Example:

```python
class Math:
    def add(self, a, b=0, c=0):
        return a + b + c
```

Usage:

```python
m = Math()

print(m.add(2, 3))
print(m.add(2, 3, 4))
```

Output:

```
5
9
```

Here, the same method works with different numbers of arguments.

---

## Duck Typing

**Duck typing** means that the type of an object is determined by its **behavior (methods)** rather than its actual class.

"If it looks like a duck and behaves like a duck, it is a duck."

Example:

```python
class Dog:
    def speak(self):
        print("Dog barks")


class Cat:
    def speak(self):
        print("Cat meows")


def make_sound(animal):
    animal.speak()
```

Usage:

```python
d = Dog()
c = Cat()

make_sound(d)
make_sound(c)
```

Output:

```
Dog barks
Cat meows
```

Here, both objects work because they have the same method `speak()`.

---

## Complete Example

```python
class Bird:
    def fly(self):
        print("Bird can fly")


class Sparrow(Bird):
    def fly(self):
        print("Sparrow flies")


class Ostrich(Bird):
    def fly(self):
        print("Ostrich cannot fly")


birds = [Sparrow(), Ostrich()]

for b in birds:
    b.fly()
```

---

## Summary

| Concept | Description |
|--------|-------------|
| Polymorphism | Same method behaves differently |
| Method Overriding | Child class redefines parent method |
| Method Overloading | Same method with different arguments (conceptual) |
| Duck Typing | Behavior matters, not the object type |

---
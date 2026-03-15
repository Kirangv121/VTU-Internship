# Python Fundamentals: Function Arguments and Return Statement

---

## 1. Function Arguments

Function arguments are **values passed to a function when it is called**, allowing the function to work with external data.

Arguments make functions **more flexible and reusable**.

Example:
```python
def greet(name):,
    print("Hello", name)

greet("Alice")
```

---

### Positional Arguments

In positional arguments, the **values are passed in the same order as the function parameters**.

Example:
```python
def student(name, age):
    print(name, age)

student("Rahul", 20)
```

Here, `"Rahul"` is assigned to `name` and `20` is assigned to `age`.

---

### Keyword Arguments

Keyword arguments allow values to be **passed using parameter names**, making the order of arguments flexible.

Example:
```python
def student(name, age):
    print(name, age)

student(age=20, name="Rahul")
```

The order does not matter because the arguments are specified by name.

---

### Default Arguments

Default arguments allow a function parameter to **have a default value if no argument is provided** during the function call.

Example:
```python
def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Alice")
```

If no argument is passed, `"Guest"` will be used.

---

### Variable-Length Arguments (`*args`, `**kwargs`)

Sometimes a function needs to accept **multiple arguments without knowing the exact number**.

#### *args
`*args` allows a function to accept **multiple positional arguments**.

Example:
```python
def add(*numbers):
    print(sum(numbers))

add(1, 2, 3, 4)
```

---

#### **kwargs
`**kwargs` allows a function to accept **multiple keyword arguments as a dictionary**.

Example:
```python
def display(**data):
    print(data)

display(name="Rahul", age=20)
```

---

# 2. Return Statement

The `return` statement is used to **send a value back from a function to the place where it was called**.

---

### Returning Values

A function can return a result using the `return` keyword.

Example:
```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)
```

Output:
```
8
```

---

### Multiple Return Values

Python allows a function to **return multiple values at the same time**.

Example:
```python
def calculation(a, b):
    return a + b, a - b

sum_value, diff_value = calculation(10, 5)

print(sum_value)
print(diff_value)
```

---

### Early Return Logic

A function can return early when a condition is met, stopping further execution of the function.

Example:
```python
def check_number(num):
    if num < 0:
        return "Negative number"
    
    return "Positive number"

print(check_number(5))
print(check_number(-3))
```

The function exits immediately once the `return` statement is executed.

---
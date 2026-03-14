# Python Fundamentals: Loop Control and Functions

---

## 1. Break & Continue

`break` and `continue` are **loop control statements** used to change the normal flow of loops in Python.

---

### break Statement

The `break` statement is used to **immediately terminate the loop** when a certain condition is met.

Example:
```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

Output:
```
0
1
2
3
4
```

The loop stops completely once the condition becomes true.

---

### continue Statement

The `continue` statement is used to **skip the current iteration and move to the next iteration of the loop**.

Example:
```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

Output:
```
0
1
3
4
```

The value `2` is skipped.

---

## 2. Loop Control

Loop control statements help **control the execution flow of loops** by stopping, skipping, or modifying iterations.

Common loop control statements in Python include:

- `break` → Stops the loop completely
- `continue` → Skips the current iteration
- `pass` → Acts as a placeholder when no action is required

Example:
```python
for i in range(3):
    pass
```

`pass` does nothing but allows the program to run without errors.

---

## 3. Infinite Loop Handling

An **infinite loop** occurs when a loop condition always remains true and never becomes false.

Example of an infinite loop:
```python
while True:
    print("This loop runs forever")
```

To safely handle infinite loops, we usually include a **break condition**.

Example:
```python
count = 0

while True:
    print(count)
    count += 1
    
    if count == 5:
        break
```

This prevents the loop from running forever.

---

# 4. Functions in Python

Functions are **blocks of reusable code that perform a specific task**. They help organize programs and avoid repeating code.

---

### Defining Functions

A function in Python is defined using the `def` keyword followed by the function name and parentheses.

Syntax:
```python
def function_name():
    # code block
```

Example:
```python
def greet():
    print("Hello, Welcome to Python")
```

---

### Calling Functions

After defining a function, it must be **called (invoked)** to execute the code inside it.

Example:
```python
def greet():
    print("Hello, Welcome to Python")

greet()
```

Output:
```
Hello, Welcome to Python
```

---

### Scope of Variables

Variable scope refers to **the region of a program where a variable can be accessed**.

There are mainly two types:

**Local Scope**  
Variables defined inside a function are only accessible within that function.

Example:
```python
def show():
    x = 10
    print(x)

show()
```

**Global Scope**  
Variables defined outside functions can be accessed throughout the program.

Example:
```python
x = 20

def display():
    print(x)

display()
```
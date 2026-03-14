# Python Fundamentals: Conditional Statements and Loops

---

## 1. Conditional Statements

Conditional statements are used to **control the flow of a program by executing different blocks of code based on conditions**.

---

### if Statement

The `if` statement is used to **execute a block of code only if a specified condition is true**.

Example:
```python
age = 18

if age >= 18:
    print("You are eligible to vote")
```

---

### if-else Statement

The `if-else` statement is used when a program needs to **execute one block of code if the condition is true and another block if it is false**.

Example:
```python
age = 16

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
```

---

### if-elif-else Statement

The `if-elif-else` statement is used when **multiple conditions need to be checked in sequence**.

Example:
```python
marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Grade D")
```

---

### Nested Conditions

A nested condition occurs when **an `if` statement is placed inside another `if` statement** to check additional conditions.

Example:
```python
age = 20
citizen = True

if age >= 18:
    if citizen:
        print("Eligible to vote")
```

---

# 2. Loops in Python

Loops are used to **execute a block of code repeatedly until a specified condition is met**.

---

### for Loop

A `for` loop is used to **iterate over a sequence such as a list, string, or range of numbers**.

Example:
```python
for i in range(5):
    print(i)
```

---

### while Loop

A `while` loop is used to **execute a block of code repeatedly as long as the condition remains true**.

Example:
```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

---

### range() Function

The `range()` function is used to **generate a sequence of numbers**, commonly used with loops.

Examples:

```python
for i in range(5):
    print(i)
```

Range with start and stop values:

```python
for i in range(1, 6):
    print(i)
```

Range with step value:

```python
for i in range(1, 10, 2):
    print(i)
```

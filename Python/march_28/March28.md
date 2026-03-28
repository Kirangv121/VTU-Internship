# Python Fundamentals: Multithreading in Python

---

## 1. What is Multithreading?

**Multithreading** is a technique where multiple threads (small units of a process) run **concurrently within a single program**.

It is mainly used to:
- Improve performance
- Perform multiple tasks at the same time
- Handle tasks like file operations, network calls, etc.

Example:
A program downloading multiple files at the same time using threads.

---

## Thread vs Process

| Feature | Thread | Process |
|--------|--------|---------|
| Definition | Smallest unit of execution | Independent program |
| Memory | Shares memory with other threads | Has separate memory |
| Speed | Faster | Slower |
| Communication | Easy (shared memory) | Complex (IPC required) |
| Creation Cost | Low | High |

---

## threading Module

Python provides a built-in module called **`threading`** to work with threads.

To use it:

```python
import threading
```

This module allows us to:
- Create threads
- Start threads
- Manage thread execution

---

## Creating Threads

Threads can be created by passing a function to the `Thread` class.

Syntax:

```
threading.Thread(target=function_name)
```

Example:

```python
import threading

def task():
    print("Thread is running")

t1 = threading.Thread(target=task)
t1.start()
```

Output:

```
Thread is running
```

---

## join()

The `join()` method is used to **wait for a thread to finish its execution before moving to the next part of the program**.

Without `join()`, threads may run independently and the main program may finish earlier.

Example:

```python
import threading
import time

def task():
    print("Task started")
    time.sleep(2)
    print("Task finished")

t1 = threading.Thread(target=task)

t1.start()
t1.join()

print("Main program ends")
```

Output:

```
Task started
Task finished
Main program ends
```

---

## Complete Example

```python
import threading
import time

def print_numbers():
    for i in range(1, 6):
        print("Number:", i)
        time.sleep(1)

def print_letters():
    for ch in ['A', 'B', 'C', 'D', 'E']:
        print("Letter:", ch)
        time.sleep(1)

t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

t1.start()
t2.start()

t1.join()
t2.join()

print("Both threads finished")
```

---

## Summary

| Concept | Description |
|--------|-------------|
| Multithreading | Running multiple threads in a program |
| Thread | Small unit of execution |
| Process | Independent program |
| threading module | Used to create and manage threads |
| start() | Starts thread execution |
| join() | Waits for thread to complete |

---
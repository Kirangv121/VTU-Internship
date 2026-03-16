# Python Fundamentals: List Methods and Concatenation

---

## 1. List Methods

Python lists provide several **built-in methods** that allow us to modify and manage list elements easily.

These methods help in **adding, removing, sorting, and manipulating elements** in a list.

---

### append()

The `append()` method is used to **add a new element at the end of the list**.

Example:

```python
fruits = ["apple", "banana"]

fruits.append("mango")

print(fruits)
```

Output:

```
['apple', 'banana', 'mango']
```

---

### insert()

The `insert()` method is used to **add an element at a specific index position** in the list.

Syntax:

```
list.insert(index, element)
```

Example:

```python
numbers = [1, 2, 4]

numbers.insert(2, 3)

print(numbers)
```

Output:

```
[1, 2, 3, 4]
```

---

### remove()

The `remove()` method is used to **remove a specific element from the list by its value**.

Example:

```python
fruits = ["apple", "banana", "mango"]

fruits.remove("banana")

print(fruits)
```

Output:

```
['apple', 'mango']
```

---

### pop()

The `pop()` method is used to **remove an element from the list using its index**.  
If no index is provided, it removes the **last element** of the list.

Example:

```python
numbers = [10, 20, 30, 40]

numbers.pop()

print(numbers)
```

Output:

```
[10, 20, 30]
```

Example with index:

```python
numbers.pop(1)
```

---

### sort()

The `sort()` method is used to **arrange the list elements in ascending order**.

Example:

```python
numbers = [5, 2, 9, 1]

numbers.sort()

print(numbers)
```

Output:

```
[1, 2, 5, 9]
```

---

### reverse()

The `reverse()` method is used to **reverse the order of elements in the list**.

Example:

```python
numbers = [1, 2, 3, 4]

numbers.reverse()

print(numbers)
```

Output:

```
[4, 3, 2, 1]
```

---

# 2. Concatenating Two Lists

List concatenation means **joining two lists together into a single list**.  
This is commonly done using the **`+` operator**.

Example:

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

result = list1 + list2

print(result)
```

Output:

```
[1, 2, 3, 4, 5, 6]
```

---

# 3. List Comprehension (Introduction)

List comprehension is a **compact and efficient way to create lists using a single line of code**.

Syntax:

```
[expression for item in iterable]
```

Example:

```python
numbers = [x for x in range(5)]

print(numbers)
```

Output:

```
[0, 1, 2, 3, 4]
```

Example with condition:

```python
even_numbers = [x for x in range(10) if x % 2 == 0]

print(even_numbers)
```

Output:

```
[0, 2, 4, 6, 8]
```

List comprehension makes code **shorter, cleaner, and easier to read**.

---
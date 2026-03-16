# append()
fruits = ["apple", "banana"]
fruits.append("mango")
print("Append:", fruits)


# insert()
numbers = [1, 2, 4]
numbers.insert(2, 3)
print("Insert:", numbers)


# remove()
fruits = ["apple", "banana", "mango"]
fruits.remove("banana")
print("Remove:", fruits)


# pop()
numbers = [10, 20, 30, 40]
numbers.pop()
print("Pop last:", numbers)

numbers.pop(1)
print("Pop index 1:", numbers)


# sort()
numbers = [5, 2, 9, 1]
numbers.sort()
print("Sort:", numbers)


# reverse()
numbers = [1, 2, 3, 4]
numbers.reverse()
print("Reverse:", numbers)


# Concatenating two lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]

result = list1 + list2
print("Concatenation:", result)


# List comprehension
numbers = [x for x in range(5)]
print("List comprehension:", numbers)

even_numbers = [x for x in range(10) if x % 2 == 0]
print("Even numbers:", even_numbers)
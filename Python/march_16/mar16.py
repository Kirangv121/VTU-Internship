# Tuple Creation
numbers = (1, 2, 3, 4)
names = ("Alice", "Bob", "Charlie")

print("Numbers:", numbers)
print("Names:", names)


# Tuple with mixed data types
data = (10, "Python", True, 3.5)
print("Mixed Tuple:", data)


# Single element tuple
single_tuple = (5,)
print("Single Tuple:", single_tuple)


# Tuple without parentheses
colors = "red", "green", "blue"
print("Colors:", colors)


# Tuple Immutability Example
numbers = (1, 2, 3)

# numbers[0] = 10  # This will cause an error because tuples are immutable


# Tuple with mutable element
data = (1, [2, 3], 4)

data[1][0] = 10
print("Modified inner list:", data)


# Tuple Packing
student = ("Rahul", 20, "Python")
print("Packed Tuple:", student)


# Tuple Unpacking
name, age, course = student

print("Name:", name)
print("Age:", age)
print("Course:", course)


# Extended Unpacking
numbers = (1, 2, 3, 4, 5)

a, *b = numbers

print("First Value:", a)
print("Remaining Values:", b)
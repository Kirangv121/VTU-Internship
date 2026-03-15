# Creating Lists
fruits = ["apple", "banana", "mango"]
numbers = [10, 20, 30, 40, 50]
mixed_list = [1, "Python", True, 3.5]

print("Fruits:", fruits)
print("Numbers:", numbers)
print("Mixed List:", mixed_list)


# Indexing
print("\nIndexing Example")
print(fruits[0])
print(fruits[1])
print(fruits[2])


# Negative Indexing
print("\nNegative Indexing")
print(fruits[-1])


# Slicing
print("\nSlicing Example")

print(numbers[1:4])
print(numbers[:3])
print(numbers[2:])


# Nested Lists
print("\nNested List Example")

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix)
print(matrix[0])
print(matrix[0][1])
print(matrix[2][2])
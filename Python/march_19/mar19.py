# Creating Sets
numbers = {10, 20, 30, 40}
fruits = {"apple", "banana", "mango"}

print("Numbers Set:", numbers)
print("Fruits Set:", fruits)


# Creating set using set() function
numbers2 = set([1, 2, 3, 4])
print("Set using set():", numbers2)


# Empty Set
empty_set = set()
print("Empty Set:", empty_set)


# Unique Values (Duplicate removal)
numbers = {1, 2, 3, 3, 4, 4, 5}
print("Set with duplicates removed:", numbers)


# Iterating through a set
fruits = {"apple", "banana", "mango"}

print("\nIterating through set:")
for fruit in fruits:
    print(fruit)
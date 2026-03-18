# Tuple Example
numbers = (10, 20, 30, 20, 40, 20)

print("Tuple:", numbers)


# count() method
print("\nCount Method Example")
count_value = numbers.count(20)
print("20 appears", count_value, "times")


# index() method
print("\nIndex Method Example")
index_value = numbers.index(20)
print("First occurrence of 20 is at index:", index_value)


# Another index example
names = ("Alice", "Bob", "Charlie", "Bob")

print("\nNames Tuple:", names)
print("Index of 'Bob':", names.index("Bob"))


# Handling element not present (example)
# Uncommenting the following line will produce an error
# print(numbers.index(100))
# Tuple Example
numbers = (10, 20, 30, 40, 50)

print("Tuple:", numbers)


# Indexing
print("\nIndexing Examples")
print(numbers[0])
print(numbers[2])
print(numbers[-1])


# Slicing
print("\nSlicing Examples")
print(numbers[1:4])
print(numbers[:3])
print(numbers[2:])


# Membership
print("\nMembership Examples")
print(20 in numbers)
print(50 in numbers)
print(60 not in numbers)


# Iteration
print("\nIteration Example")

for num in numbers:
    print(num)
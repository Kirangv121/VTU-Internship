# Tuple Data Analysis Program

# Creating a tuple with 10 numeric values
numbers = (10, 25, 30, 45, 50, 65, 70, 85, 90, 100)

print("Tuple Elements:")
print(numbers)

# Printing first three values
print("\nFirst three values:")
print(numbers[:3])

# Printing last three values
print("\nLast three values:")
print(numbers[-3:])

# Checking membership
search_number = int(input("\nEnter a number to search: "))

if search_number in numbers:
    print("The number exists in the tuple.")
else:
    print("The number does not exist in the tuple.")
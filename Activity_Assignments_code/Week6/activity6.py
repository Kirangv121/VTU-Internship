# Function-Based Calculator System

# Function for addition
def add(a, b):
    return a + b

# Function for subtraction
def subtract(a, b):
    return a - b

# Function for multiplication
def multiply(a, b):
    return a * b

# Function for division
def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Division by zero is not allowed"


print("Calculator Program")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")

choice = int(input("Enter your choice (1-4): "))

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if choice == 1:
    print("Result:", add(num1, num2))
elif choice == 2:
    print("Result:", subtract(num1, num2))
elif choice == 3:
    print("Result:", multiply(num1, num2))
elif choice == 4:
    print("Result:", divide(num1, num2))
else:
    print("Invalid choice")
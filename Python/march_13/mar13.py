# Positional Arguments
def student(name, age):
    print(name, age)

student("Rahul", 20)


# Keyword Arguments
def student_info(name, age):
    print(name, age)

student_info(age=21, name="Amit")


# Default Arguments
def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Alice")


# Variable Length Arguments (*args)
def add_numbers(*numbers):
    total = sum(numbers)
    print("Sum:", total)

add_numbers(1, 2, 3, 4, 5)


# Variable Length Keyword Arguments (**kwargs)
def display_info(**data):
    print(data)

display_info(name="Rahul", age=20, city="Delhi")


# Returning Values
def add(a, b):
    return a + b

result = add(5, 3)
print(result)


# Multiple Return Values
def calculation(a, b):
    return a + b, a - b

sum_val, diff_val = calculation(10, 5)

print(sum_val)
print(diff_val)


# Early Return Logic
def check_number(num):
    if num < 0:
        return "Negative number"
    
    return "Positive number"

print(check_number(10))
print(check_number(-5))

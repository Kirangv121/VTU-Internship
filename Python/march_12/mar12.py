# Break Example
for i in range(10):
    if i == 5:
        break
    print(i)


# Continue Example
for i in range(5):
    if i == 2:
        continue
    print(i)


# Pass Example
for i in range(3):
    pass


# Infinite Loop Handling
count = 0

while True:
    print(count)
    count += 1
    
    if count == 5:
        break


# Defining and Calling a Function
def greet():
    print("Hello, Welcome to Python")

greet()


# Function with Parameters
def add(a, b):
    result = a + b
    print(result)

add(5, 3)


# Local Scope Example
def show():
    x = 10
    print(x)

show()


# Global Scope Example
y = 20

def display():
    print(y)

display()
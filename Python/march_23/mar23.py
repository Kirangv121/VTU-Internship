# Class Definition
class Student:
    
    # Constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # Method
    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)


# Creating Objects
s1 = Student("Rahul", 20)
s2 = Student("Amit", 22)


# Calling Methods
print("Student 1 Details:")
s1.display()

print("\nStudent 2 Details:")
s2.display()
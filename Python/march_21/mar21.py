# Creating Dictionary
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}

print("Student Dictionary:", student)


# Key-Value Access
print("\nAccessing Values")
print(student["name"])
print(student["age"])


# Using get() method
print("\nUsing get()")
print(student.get("course"))


# Creating Empty Dictionary
data = {}
data["city"] = "Bangalore"
data["country"] = "India"

print("\nEmpty Dictionary after adding values:", data)


# Using dict() constructor
info = dict(name="Alice", age=25)
print("\nDictionary using dict():", info)


# Nested Dictionary
students = {
    "student1": {
        "name": "Rahul",
        "age": 20
    },
    "student2": {
        "name": "Amit",
        "age": 22
    }
}

print("\nNested Dictionary:", students)


# Accessing Nested Dictionary
print("\nAccess Nested Values")
print(students["student1"]["name"])
print(students["student2"]["age"])
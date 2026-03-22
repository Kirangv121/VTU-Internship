# Creating Dictionary
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}

print("Original Dictionary:", student)


# keys()
print("\nKeys:")
print(student.keys())


# values()
print("\nValues:")
print(student.values())


# items()
print("\nItems:")
print(student.items())


# get()
print("\nUsing get():")
print(student.get("name"))
print(student.get("marks"))  # key not present


# update()
print("\nUsing update():")
student.update({"age": 21})
student.update({"city": "Bangalore"})
print(student)


# pop()
print("\nUsing pop():")
removed = student.pop("age")
print("Removed value:", removed)
print("Updated Dictionary:", student)



emp = {
    "name": "Kiran",
    "role": "SDE-2",
    "company": "Google",
	"age": 22,
}
# 2. pop()
print("\nUsing pop() example 2:")
removed = emp.pop("age")
print("Removed value:", removed)
print("Updated Dictionary:", emp)
# List-Based Data Management Program

# Creating a list of five student names
students = ["Rahul", "Anita", "Kiran", "Meena", "Arjun"]

print("Original Student List:")
print(students)

# Adding a new student
students.append("Ravi")
print("\nAfter adding a new student:")
print(students)

# Removing a student
students.remove("Meena")
print("\nAfter removing a student:")
print(students)

# Sorting the list
students.sort()
print("\nSorted Student List:")
print(students)

# Another list of new students
new_students = ["Sita", "Vikas", "Pooja"]

# List concatenation
combined_list = students + new_students

print("\nCombined Student List:")
print(combined_list)
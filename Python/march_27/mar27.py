# Student Class
class Student:
    def __init__(self, student_id, name, age, course):
        self.id = student_id
        self.name = name
        self.age = age
        self.course = course

    def display(self):
        print(f"ID: {self.id}, Name: {self.name}, Age: {self.age}, Course: {self.course}")


# Student Management System Class
class StudentManagementSystem:
    def __init__(self):
        self.students = []

    # Add Student
    def add_student(self):
        student_id = input("Enter ID: ")
        name = input("Enter Name: ")
        age = input("Enter Age: ")
        course = input("Enter Course: ")

        student = Student(student_id, name, age, course)
        self.students.append(student)
        print("Student added successfully!\n")

    # View Students
    def view_students(self):
        if not self.students:
            print("No students found.\n")
            return

        for student in self.students:
            student.display()
        print()

    # Search Student
    def search_student(self):
        student_id = input("Enter ID to search: ")
        for student in self.students:
            if student.id == student_id:
                student.display()
                return
        print("Student not found.\n")

    # Update Student
    def update_student(self):
        student_id = input("Enter ID to update: ")
        for student in self.students:
            if student.id == student_id:
                student.name = input("Enter new name: ")
                student.age = input("Enter new age: ")
                student.course = input("Enter new course: ")
                print("Student updated successfully!\n")
                return
        print("Student not found.\n")

    # Delete Student
    def delete_student(self):
        student_id = input("Enter ID to delete: ")
        for student in self.students:
            if student.id == student_id:
                self.students.remove(student)
                print("Student deleted successfully!\n")
                return
        print("Student not found.\n")


# Main Program
def main():
    system = StudentManagementSystem()

    while True:
        print("1. Add Student")
        print("2. View Students")
        print("3. Search Student")
        print("4. Update Student")
        print("5. Delete Student")
        print("6. Exit")

        choice = input("Enter choice: ")

        if choice == '1':
            system.add_student()
        elif choice == '2':
            system.view_students()
        elif choice == '3':
            system.search_student()
        elif choice == '4':
            system.update_student()
        elif choice == '5':
            system.delete_student()
        elif choice == '6':
            print("Exiting program...")
            break
        else:
            print("Invalid choice!\n")


if __name__ == "__main__":
    main()
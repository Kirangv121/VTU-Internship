# Student Result Evaluation System

marks = int(input("Enter student marks: "))

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 40:
    grade = "D"
else:
    grade = "Fail"

print("Grade:", grade)

# Pass/Fail message

if marks >= 40:
    print("Result: Pass")
else:
    print("Result: Fail")
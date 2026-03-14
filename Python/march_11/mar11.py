# if statement
age = 18

if age >= 18:
    print("You are eligible to vote")


# if-else statement
age = 16

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")


# if-elif-else statement
marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Grade D")


# Nested condition
age = 20
citizen = True

if age >= 18:
    if citizen:
        print("Eligible to vote")


# for loop
for i in range(5):
    print(i)


# while loop
count = 1

while count <= 5:
    print(count)
    count += 1


# range() examples
for i in range(5):
    print(i)

for i in range(1, 6):
    print(i)

for i in range(1, 10, 2):
    print(i)
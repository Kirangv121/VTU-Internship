# Encapsulation Example

class Student:
    
    def __init__(self, name, age):
        self.name = name
        self.__age = age   # private variable

    # Getter method
    def get_age(self):
        return self.__age

    # Setter method
    def set_age(self, age):
        self.__age = age


# Creating object
s1 = Student("Rahul", 20)

# Access using getter
print("Age:", s1.get_age())

# Modify using setter
s1.set_age(25)
print("Updated Age:", s1.get_age())


# Data Hiding Example
class BankAccount:
    
    def __init__(self, balance):
        self.__balance = balance

    def get_balance(self):
        return self.__balance

    def deposit(self, amount):
        self.__balance += amount


account = BankAccount(1000)

print("\nBalance:", account.get_balance())

account.deposit(500)
print("Updated Balance:", account.get_balance())
# Encapsulation and Data Protection Program

class BankAccount:
    
    def __init__(self, balance):
        # Private variable
        self.__balance = balance

    # Method to deposit money
    def deposit(self, amount):
        self.__balance += amount
        print("Deposited:", amount)

    # Method to withdraw money
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            print("Withdrawn:", amount)
        else:
            print("Insufficient balance")

    # Getter method to access balance
    def get_balance(self):
        return self.__balance


# Creating object by using account 
account = BankAccount(1000)
print("Initial Balance:", account.get_balance())
# Performing operations
account.deposit(500)
account.withdraw(300)
account.withdraw(1400)

# Accessing balance using getter
print("Current Balance:", account.get_balance())

# Trying to access private variable directly (not allowed)
# print(account.__balance)  # This will cause an error
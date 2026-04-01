# Bank Account Class
class BankAccount:
    def __init__(self, acc_no, name, balance=0):
        self.acc_no = acc_no
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print("Amount deposited successfully!")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Withdrawal successful!")
        else:
            print("Insufficient balance!")

    def check_balance(self):
        print("Current Balance:", self.balance)


# Banking System Class
class BankingSystem:
    def __init__(self):
        self.accounts = []

    # Create Account
    def create_account(self):
        acc_no = input("Enter Account Number: ")
        name = input("Enter Name: ")
        account = BankAccount(acc_no, name)
        self.accounts.append(account)
        print("Account created successfully!\n")

    # Find Account
    def find_account(self, acc_no):
        for acc in self.accounts:
            if acc.acc_no == acc_no:
                return acc
        return None

    # Deposit
    def deposit_money(self):
        acc_no = input("Enter Account Number: ")
        account = self.find_account(acc_no)
        if account:
            amount = float(input("Enter amount: "))
            account.deposit(amount)
        else:
            print("Account not found!")

    # Withdraw
    def withdraw_money(self):
        acc_no = input("Enter Account Number: ")
        account = self.find_account(acc_no)
        if account:
            amount = float(input("Enter amount: "))
            account.withdraw(amount)
        else:
            print("Account not found!")

    # Check Balance
    def check_balance(self):
        acc_no = input("Enter Account Number: ")
        account = self.find_account(acc_no)
        if account:
            account.check_balance()
        else:
            print("Account not found!")


# Main Program
def main():
    system = BankingSystem()

    while True:
        print("\n1. Create Account")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Check Balance")
        print("5. Exit")

        choice = input("Enter choice: ")

        if choice == '1':
            system.create_account()
        elif choice == '2':
            system.deposit_money()
        elif choice == '3':
            system.withdraw_money()
        elif choice == '4':
            system.check_balance()
        elif choice == '5':
            print("Exiting application...")
            break
        else:
            print("Invalid choice!")


if __name__ == "__main__":
    main()
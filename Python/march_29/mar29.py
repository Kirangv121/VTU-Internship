# Product Class
class Product:
    def __init__(self, product_id, name, quantity, price):
        self.id = product_id
        self.name = name
        self.quantity = quantity
        self.price = price

    def display(self):
        print(f"ID: {self.id}, Name: {self.name}, Quantity: {self.quantity}, Price: {self.price}")


# Inventory System Class
class InventorySystem:
    def __init__(self):
        self.products = []

    # Add Product
    def add_product(self):
        product_id = input("Enter Product ID: ")
        name = input("Enter Product Name: ")
        quantity = int(input("Enter Quantity: "))
        price = float(input("Enter Price: "))

        product = Product(product_id, name, quantity, price)
        self.products.append(product)
        print("Product added successfully!\n")

    # View Products
    def view_products(self):
        if not self.products:
            print("No products available.\n")
            return

        for product in self.products:
            product.display()
        print()

    # Search Product
    def search_product(self):
        product_id = input("Enter Product ID to search: ")
        for product in self.products:
            if product.id == product_id:
                product.display()
                return
        print("Product not found.\n")

    # Update Product
    def update_product(self):
        product_id = input("Enter Product ID to update: ")
        for product in self.products:
            if product.id == product_id:
                product.name = input("Enter new name: ")
                product.quantity = int(input("Enter new quantity: "))
                product.price = float(input("Enter new price: "))
                print("Product updated successfully!\n")
                return
        print("Product not found.\n")

    # Delete Product
    def delete_product(self):
        product_id = input("Enter Product ID to delete: ")
        for product in self.products:
            if product.id == product_id:
                self.products.remove(product)
                print("Product deleted successfully!\n")
                return
        print("Product not found.\n")


# Main Program
def main():
    system = InventorySystem()

    while True:
        print("1. Add Product")
        print("2. View Products")
        print("3. Search Product")
        print("4. Update Product")
        print("5. Delete Product")
        print("6. Exit")

        choice = input("Enter choice: ")

        if choice == '1':
            system.add_product()
        elif choice == '2':
            system.view_products()
        elif choice == '3':
            system.search_product()
        elif choice == '4':
            system.update_product()
        elif choice == '5':
            system.delete_product()
        elif choice == '6':
            print("Exiting system...")
            break
        else:
            print("Invalid choice!\n")


if __name__ == "__main__":
    main()
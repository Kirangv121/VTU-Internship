# Book Class
class Book:
    def __init__(self, book_id, title, author):
        self.id = book_id
        self.title = title
        self.author = author
        self.available = True

    def display(self):
        status = "Available" if self.available else "Issued"
        print(f"ID: {self.id}, Title: {self.title}, Author: {self.author}, Status: {status}")


# Library Management System Class
class LibrarySystem:
    def __init__(self):
        self.books = []

    # Add Book
    def add_book(self):
        book_id = input("Enter Book ID: ")
        title = input("Enter Book Title: ")
        author = input("Enter Author Name: ")

        book = Book(book_id, title, author)
        self.books.append(book)
        print("Book added successfully!\n")

    # View Books
    def view_books(self):
        if not self.books:
            print("No books available.\n")
            return

        for book in self.books:
            book.display()
        print()

    # Search Book
    def search_book(self):
        book_id = input("Enter Book ID to search: ")
        for book in self.books:
            if book.id == book_id:
                book.display()
                return
        print("Book not found.\n")

    # Issue Book
    def issue_book(self):
        book_id = input("Enter Book ID to issue: ")
        for book in self.books:
            if book.id == book_id:
                if book.available:
                    book.available = False
                    print("Book issued successfully!\n")
                else:
                    print("Book is already issued.\n")
                return
        print("Book not found.\n")

    # Return Book
    def return_book(self):
        book_id = input("Enter Book ID to return: ")
        for book in self.books:
            if book.id == book_id:
                if not book.available:
                    book.available = True
                    print("Book returned successfully!\n")
                else:
                    print("Book was not issued.\n")
                return
        print("Book not found.\n")

    # Delete Book
    def delete_book(self):
        book_id = input("Enter Book ID to delete: ")
        for book in self.books:
            if book.id == book_id:
                self.books.remove(book)
                print("Book deleted successfully!\n")
                return
        print("Book not found.\n")


# Main Program
def main():
    system = LibrarySystem()

    while True:
        print("1. Add Book")
        print("2. View Books")
        print("3. Search Book")
        print("4. Issue Book")
        print("5. Return Book")
        print("6. Delete Book")
        print("7. Exit")

        choice = input("Enter choice: ")

        if choice == '1':
            system.add_book()
        elif choice == '2':
            system.view_books()
        elif choice == '3':
            system.search_book()
        elif choice == '4':
            system.issue_book()
        elif choice == '5':
            system.return_book()
        elif choice == '6':
            system.delete_book()
        elif choice == '7':
            print("Exiting system...")
            break
        else:
            print("Invalid choice!\n")


if __name__ == "__main__":
    main()
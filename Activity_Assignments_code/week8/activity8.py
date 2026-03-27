# Multithreading Demonstration Program

import threading

# Function to print numbers
def print_numbers():
    for i in range(1, 6):
        print("Number:", i)

# Function to print letters
def print_letters():
    for ch in ['A', 'B', 'C', 'D', 'E','F']:
        print("Letter:", ch)

# Creating threads
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# Starting threads
thread1.start()
thread2.start()

# Waiting for threads to complete
thread1.join()
thread2.join()

print("Both threads have finished execution.")
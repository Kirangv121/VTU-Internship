import threading
import time


# Function 1
def print_numbers():
    for i in range(1, 6):
        print("Number:", i)
        time.sleep(1)


# Function 2
def print_letters():
    for ch in ['A', 'B', 'C', 'D', 'E']:
        print("Letter:", ch)
        time.sleep(1)


# Creating threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)


# Starting threads
t1.start()
t2.start()


# Waiting for threads to finish
t1.join()
t2.join()


print("Main program finished")
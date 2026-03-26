# Polymorphism using built-in function
print(len("Hello"))
print(len([1, 2, 3, 4]))


# Method Overriding
class Animal:
    def speak(self):
        print("Animal makes sound")


class Dog(Animal):
    def speak(self):
        print("Dog barks")


d = Dog()
print("\nMethod Overriding:")
d.speak()


# Method Overloading (Conceptual)
class Math:
    def add(self, a, b=0, c=0):
        return a + b + c


m = Math()
print("\nMethod Overloading:")
print(m.add(2, 3))
print(m.add(2, 3, 4))


# Duck Typing
class Dog:
    def speak(self):
        print("Dog barks")


class Cat:
    def speak(self):
        print("Cat meows")


def make_sound(animal):
    animal.speak()


print("\nDuck Typing:")
d = Dog()
c = Cat()

make_sound(d)
make_sound(c)


# Combined Polymorphism Example
class Bird:
    def fly(self):
        print("Bird can fly")


class Sparrow(Bird):
    def fly(self):
        print("Sparrow flies")


class Ostrich(Bird):
    def fly(self):
        print("Ostrich cannot fly")


print("\nPolymorphism with Loop:")
birds = [Sparrow(), Ostrich()]

for b in birds:
    b.fly()
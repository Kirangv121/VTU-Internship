# Base Class
class Animal:
    
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("Animal makes sound")


# Derived Class
class Dog(Animal):
    
    def __init__(self, name, breed):
        super().__init__(name)   # calling parent constructor
        self.breed = breed

    def bark(self):
        print("Dog barks")


# Creating object
d = Dog("Tommy", "Labrador")

print("Name:", d.name)
print("Breed:", d.breed)

d.speak()
d.bark()


# Example of Multiple Inheritance
class Father:
    def show_father(self):
        print("This is father")


class Mother:
    def show_mother(self):
        print("This is mother")


class Child(Father, Mother):
    pass


c = Child()
print("\nMultiple Inheritance Example:")
c.show_father()
c.show_mother()
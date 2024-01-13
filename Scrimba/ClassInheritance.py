class Person:
    def move(self):
        print(f"Moves 4 paces")
    def rest(self):
        print(f"Gains 4 health points")

class Doctor(Person):
    def heal(self):
        print(f"Heals 10 health points")

class Fighter(Person):
    def fight(self):
        print("Do 10 health points of damage")
    def move(self):
        print(f"Moves 6 paces")

class Wizard(Doctor, Fighter):
    def cast_spell(self):
        print(f"Turns invisible")
    def heal(self):
        print(f"Heals 15 health points")

obj_character1 = Wizard()
obj_character1.move()
obj_character1.heal()
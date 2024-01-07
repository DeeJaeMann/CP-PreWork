# From Scrimba
# For loops - Exercise
# Party invitation
#
# You're having a party and want to invite your friends.
# you want the print out invitations for each friend using for loops
# the names are in two lists, 'names' and 'names1'
# you also need to add two extra names to the list using an input
# box, when you run the code
# Printout one invitation to each friend per line
# Names should be properly capitalized
#
# Example:  John Cheese! You are invited to the party on saturday.
# Eric Idle! You are invited to the party on saturday.
# This may need two loops

names = ['john ClEEse','Eric IDLE','michael']
names1 = ['graHam chapman', 'TERRY', 'terry jones']
intNamesToAdd = 2
arrNames = names + names1
for index in range(intNamesToAdd) :
    strAddName = input(f"Please enter name {index + 1}: ")
    arrNames.append(strAddName)

for strName in arrNames :
    print(f"{strName.title()}! You are invited to the party on saturday.")

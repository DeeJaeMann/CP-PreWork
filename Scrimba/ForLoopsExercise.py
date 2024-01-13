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
int_names_to_add = 2
arr_names = names + names1
for int_index in range(int_names_to_add) :
    str_add_name = input(f"Please enter name {int_index + 1}: ")
    arr_names.append(str_add_name)

for str_name in arr_names :
    print(f"{str_name.title()}! You are invited to the party on saturday.")

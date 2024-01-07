# User Input Exercise
# Distance conferter converting kilometers to miles
#
# Takes two inputs from user:
# Their first name and the distance in km
#
# Ouput:
# Greet user by name and show km, and mile values
#
# 1 mile is 1.609 km
# Use correct types
# Capitalize the first name

strName = input('Please enter your name:  ')
floatKM = float(input('Enter a distance in km:  '))
floatMI = floatKM / 1.609

print(f"Hello {strName.capitalize()}.  {floatKM}km is {round(floatMI, 1)}mi.")
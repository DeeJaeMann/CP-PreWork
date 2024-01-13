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

str_name = input('Please enter your name:  ')
flt_km = float(input('Enter a distance in km:  '))
flt_mi = flt_km / 1.609

print(f"Hello {str_name.capitalize()}.  {flt_km}km is {round(flt_mi, 1)}mi.")
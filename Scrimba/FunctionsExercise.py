def greeting(str_name, int_age=28, str_color="red"):
    #Greets user with 'name' from 'input box' and 'age', if available, default age is used
    #print('Hello '  +  strName + ', you are ' + str(intAge) +'!')
    print(f'Hello {str_name.title()}, you will be {int_age +1} years old your next birthday!')
    print(f'We hear you like the color {str_color.lower()}!')

str_input_name = input('Enter your name: ')
int_input_age = int(input('Enter your age: '))
str_input_color = input('What is your favorite color?: ')
greeting(str_input_name, int_input_age, str_input_color)
# 1. Add new print statement - on a new line
#    which says 'We hear you like the color xxx! xxx is a string with color 
# 2. extend the function with another  input parameter 'color', that defaults to 'red'
# 3. Capture the color via an input box as variable:color 
# 4. Change the 'You are xx!' text to say 'you will be xx+1 years old next birthday 
#  adding 1 to the age
# 5. Capitalize first letter of the 'name', and rest are small caps 
# 6. Favorite color should be in lowercase 
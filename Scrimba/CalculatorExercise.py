# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

def PerformCalculation(flt_first_number, flt_second_number=0, str_operation = "+") :
    if(str_operation == "+") :
        return flt_first_number + flt_second_number
    elif(str_operation == "-") :
        return flt_first_number - flt_second_number
    elif(str_operation == "*") :
        return flt_first_number * flt_second_number
    elif(str_operation == "/") :
        return flt_first_number / flt_second_number
    elif(str_operation == "f") :
        return (f"{flt_first_number * 9/5 + 32} degrees fahrenheight")
    else :
        return "Invalid Operation"
    
str_operation_input = input("Please enter an operation (+, -, *, /, f (C to F conversion)): ")
fltFirstInput = float(input(f"Enter first number (operation {str_operation_input}): "))
if(str_operation_input != "f") :
    flt_second_input = float(input(f"Enter second number (operation {str_operation_input}): "))
else :
    flt_second_input = 0
print(f"The answer is: {PerformCalculation(fltFirstInput, flt_second_input, str_operation_input)}")
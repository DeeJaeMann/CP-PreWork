# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

def PerformCalculation(fltFirstNumber, fltSecondNumber=0, strOperation = "+") :
    if(strOperation == "+") :
        return fltFirstNumber + fltSecondNumber
    elif(strOperation == "-") :
        return fltFirstNumber - fltSecondNumber
    elif(strOperation == "*") :
        return fltFirstNumber * fltSecondNumber
    elif(strOperation == "/") :
        return fltFirstNumber / fltSecondNumber
    elif(strOperation == "f") :
        return (f"{fltFirstNumber * 9/5 + 32} degrees fahrenheight")
    else :
        return "Invalid Operation"
    
strOperationInput = input("Please enter an operation (+, -, *, /, f (C to F conversion)): ")
fltFirstInput = float(input(f"Enter first number (operation {strOperationInput}): "))
if(strOperationInput != "f") :
    fltSecondInput = float(input(f"Enter second number (operation {strOperationInput}): "))
else :
    fltSecondInput = 0
print(f"The answer is: {PerformCalculation(fltFirstInput, fltSecondInput, strOperationInput)}")
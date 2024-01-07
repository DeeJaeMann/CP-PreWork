#try:
    #code you want to run
#except:
    #executed if error occurs
#else:
    #executed if no error
#finally:
    #always executed 

try :
    intNum = int(input("Enter a number between 1 and 30: "))
    intNumResult = 30/intNum
    if(intNum > 30):
       raise ValueError(intNum)
except ZeroDivisionError as err:
    print(err, "You can't divide by Zero!!!")
except ValueError as err:
    print(err, intNum, "Bad Value Not Between 1 and 30!")
except:
    print("Invalid Input!")
else:
    print(f"30 divided by {intNum} is: {intNumResult}")
finally:
    print("**Thank you for playing!**")
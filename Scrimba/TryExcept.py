#try:
    #code you want to run
#except:
    #executed if error occurs
#else:
    #executed if no error
#finally:
    #always executed 

try :
    int_num = int(input("Enter a number between 1 and 30: "))
    int_num_result = 30/int_num
    if(int_num > 30):
       raise ValueError(int_num)
except ZeroDivisionError as err:
    print(err, "You can't divide by Zero!!!")
except ValueError as err:
    print(err, int_num, "Bad Value Not Between 1 and 30!")
except:
    print("Invalid Input!")
else:
    print(f"30 divided by {int_num} is: {int_num_result}")
finally:
    print("**Thank you for playing!**")
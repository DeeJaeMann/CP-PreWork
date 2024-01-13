# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game. 
# Give user input box: 1. To capture guesses, 
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements durng execution, so If you want to see prints during 
# whle loop, then print to the input box

#Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution, so If you want to see prints during 
# whle loop, print to the input box (This is specific to this platform)
import random

def GetGuess(int_this_guess_count) :
    int_this_guess = int(input(f"\nPlease enter guess #{int_this_guess_count}: "))
    if (int_this_guess > 100) or (int_this_guess < 0) :
        print("Please enter a number between 1 and 100!")
        GetGuess(int_this_guess_count)
    else :
        return int_this_guess

int_guess = 0
int_total_guesses = 5
int_correct_number = random.randint(1, 100)
#print(f"{intCorrectNumber} is the target number")
print(f"Guess a number between 1 and 100.  You have {int_total_guesses} tries.")

while int_guess < int_total_guesses:
    int_guess += 1
    int_my_guess = GetGuess(int_guess)
    if (int_my_guess == int_correct_number) :
        print(f"That is correct!  You guessed {int_guess} times!")
        break
    elif (int_guess < int_total_guesses) :
        print(f"I'm sorry, try again! {int_total_guesses - int_guess} tries left!")
        if(int_my_guess < int_correct_number) :
            print("Your guess is too low!")
        else :
            print("Your guess is too high!")
    else :
        print(f"You lose!  The number was {int_correct_number}")

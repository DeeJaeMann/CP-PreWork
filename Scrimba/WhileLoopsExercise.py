# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game. 
# Give user input box: 1. To capture guesses, 
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements durng execution, so If you want to see prints during 
# whle loop, then print to the input box

#Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution, so If you want to see prints during 
# whle loop, print to the input box (This is specific to this platform)
import random

def GetGuess(intThisGuessCount) :
    intThisGuess = int(input(f"\nPlease enter guess #{intThisGuessCount}: "))
    if (intThisGuess > 100) or (intThisGuess < 0) :
        print("Please enter a number between 1 and 100!")
        GetGuess(intThisGuessCount)
    else :
        return intThisGuess

intGuess = 0
intTotalGuesses = 5
intCorrectNumber = random.randint(1, 100)
#print(f"{intCorrectNumber} is the target number")
print(f"Guess a number between 1 and 100.  You have {intTotalGuesses} tries.")

while intGuess < intTotalGuesses:
    intGuess += 1
    intMyGuess = GetGuess(intGuess)
    if (intMyGuess == intCorrectNumber) :
        print(f"That is correct!  You guessed {intGuess} times!")
        break
    elif (intGuess < intTotalGuesses) :
        print(f"I'm sorry, try again! {intTotalGuesses - intGuess} tries left!")
        if(intMyGuess < intCorrectNumber) :
            print("Your guess is too low!")
        else :
            print("Your guess is too high!")
    else :
        print(f"You lose!  The number was {intCorrectNumber}")

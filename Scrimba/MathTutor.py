#!/usr/bin/python3

# From Scrimba Python Tutorial
# Project - Math Tutor

# Object: Create application to practice multiplication tables
#
# User specifies number of random practice questions
# User is presented with a prompt e.g. 5 X 5 = and inputs the answer for each of the questions
# When all questions are answered: printout following info
#   a. Some form of 'Thanks for Playing Greeting'
#   b. Number of correct answers/Total answers
#   c. % Correct
#
# use different rows as you wish
# 
# Bonus 1:  Also measure/present the time it took to answer questions: in total and per question
#
# Bonus 2: Let user specify how high numbers used should be
#
# Bonus 3: Show all questions and answers at end

# We're going to be using random numbers so import the module
import random
# Bonus 1 - Import the time module
from time import time as myTime

intScore = 0
intCorrect = 0
intMaxQuestions = 1
# Default max multiplier to 10
intMaxMultiplier = 10
# For Bonus #2 - Limit how low the multiplier can be
intMinMultiplier = 2
# For Bonus #3 - Show all questions and answers at end
dictResultsSheet = {}
strAnswers = "*****\nAnswers\n*****\n"
# Get the user input and typecast to int
intMaxQuestions = int(input("Enter the number of practice questions: "))
intMaxMultiplier = int(input("Enter the largest number to multiply by: "))

# Bonus 1 - Record start time
timeStart = myTime()

# Thank you message
strThankYou = "Thank you for playing!"

# Check if our Multiplier entered is greater than our minimum allowed
if(intMaxMultiplier >= intMinMultiplier) :
    # Loop to prompt for questions
    for intQuestion in range(intMaxQuestions) :
        # Random First number
        intFirstMult = random.randint(0,intMaxMultiplier)
        # Random Second number
        intSecondMult = random.randint(0,intMaxMultiplier)
        # Calculate our answer
        intAnswer = intFirstMult * intSecondMult



        # Prompt for the question using a formatted string
        intThisQuestion = int(input(f"Question {intQuestion + 1}: {intFirstMult} X {intSecondMult} = "))

        # Bonus 3 - Add this question to our dictionary
        dictResultsSheet[f"Question {intQuestion+1}"] = f"{intFirstMult} X {intSecondMult} = {intAnswer} (You: {intThisQuestion})"

        # Check if the entered answer is correct
        if(intThisQuestion == intAnswer) :
            intCorrect += 1

    # Bonus 1 - Record end time
    timeEnd = myTime()
    # Bonus 3 - Formatting the string for pretty print
    # Loop through the keys and append the key and value to strAnswers in a pretty way
    for strKey in dictResultsSheet.keys() :
        strAnswers += f"{strKey} : {dictResultsSheet.get(strKey)}\n"

    strAnswers += "*****"

    # Update our score (percentage correct)
    intScore = int((intCorrect / intMaxQuestions) * 100)
    # Bonus 1 - Calculate our time difference
    timeDiff = timeEnd - timeStart
    # Bonus 1 - Calculate the average time per question
    timeAvg = round(timeDiff/intMaxQuestions, 2)
    # Format our results strings
    strResults = f"Correct Answers: {intCorrect} / Total Questions: {intMaxQuestions}"
    strPercentage = f"{intScore}% Correct"
    # Bonus 1 - Output the time difference
    strTimeResult = f"{round(timeDiff,2)} seconds (Average of {timeAvg} seconds per question)"

    # print(f"\n{strThankYou}\n*****\n{dictResultsSheet}\n*****\n{strResults}\n{strPercentage}")
    # The final output message including all of our information
    print(f"\n{strThankYou}\n{strAnswers}\n{strResults}\n{strPercentage} in {strTimeResult}")
else :
    # The number entered was lower than our minimum multiplier
    print(f"Please enter a number greater than {intMinMultiplier-1}.")

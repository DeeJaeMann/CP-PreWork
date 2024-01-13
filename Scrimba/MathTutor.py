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
from time import time as my_time

int_score = 0
int_correct = 0
int_max_questions = 1
# Default max multiplier to 10
int_max_multiplier = 10
# For Bonus #2 - Limit how low the multiplier can be
int_min_multiplier = 2
# For Bonus #3 - Show all questions and answers at end
dct_results_sheet = {}
str_answers = "*****\nAnswers\n*****\n"
# Get the user input and typecast to int
int_max_questions = int(input("Enter the number of practice questions: "))
int_max_multiplier = int(input("Enter the largest number to multiply by: "))

# Bonus 1 - Record start time
time_start = my_time()

# Thank you message
str_thank_you = "Thank you for playing!"

# Check if our Multiplier entered is greater than our minimum allowed
if(int_max_multiplier >= int_min_multiplier) :
    # Loop to prompt for questions
    for int_question in range(int_max_questions) :
        # Random First number
        int_first_mult = random.randint(0,int_max_multiplier)
        # Random Second number
        int_second_mult = random.randint(0,int_max_multiplier)
        # Calculate our answer
        int_answer = int_first_mult * int_second_mult



        # Prompt for the question using a formatted string
        int_this_question = int(input(f"Question {int_question + 1}: {int_first_mult} X {int_second_mult} = "))

        # Bonus 3 - Add this question to our dictionary
        dct_results_sheet[f"Question {int_question+1}"] = f"{int_first_mult} X {int_second_mult} = {int_answer} (You: {int_this_question})"

        # Check if the entered answer is correct
        if(int_this_question == int_answer) :
            int_correct += 1

    # Bonus 1 - Record end time
    time_end = my_time()
    # Bonus 3 - Formatting the string for pretty print
    # Loop through the keys and append the key and value to strAnswers in a pretty way
    for strKey in dct_results_sheet.keys() :
        str_answers += f"{strKey} : {dct_results_sheet.get(strKey)}\n"

    str_answers += "*****"

    # Update our score (percentage correct)
    int_score = int((int_correct / int_max_questions) * 100)
    # Bonus 1 - Calculate our time difference
    time_diff = time_end - time_start
    # Bonus 1 - Calculate the average time per question
    time_avg = round(time_diff/int_max_questions, 2)
    # Format our results strings
    str_results = f"Correct Answers: {int_correct} / Total Questions: {int_max_questions}"
    str_percentage = f"{int_score}% Correct"
    # Bonus 1 - Output the time difference
    str_time_result = f"{round(time_diff,2)} seconds (Average of {time_avg} seconds per question)"

    # print(f"\n{strThankYou}\n*****\n{dictResultsSheet}\n*****\n{strResults}\n{strPercentage}")
    # The final output message including all of our information
    print(f"\n{str_thank_you}\n{str_answers}\n{str_results}\n{str_percentage} in {str_time_result}")
else :
    # The number entered was lower than our minimum multiplier
    print(f"Please enter a number greater than {int_min_multiplier-1}.")

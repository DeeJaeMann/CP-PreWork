#!/usr/bin/Python3

# Project - Crypto Machine
# From Scrimba Python Tutorial


# run encode or decode
# clean and beautify the code 

def EnigmaLight() :
    str_new_message = ""
    # Create keys string
    str_keys = "abcdefghijklmnopqrstuvwxyz !"
    # Autogenerate values string by offsetting original string
    str_values = str_keys[-1] + str_keys[0:-1]
    #print(strKeys)
    #print(strValues)

    # Option 1: Create two dictionaries
    dct_encrypt1 = dict(zip(str_keys, str_values))
    dct_decrypt1 = dict(zip(str_values, str_keys))

    # Option 2: Create one dictionary and flip
    dct_encrypt2 = dict(zip(str_keys, str_values))
    dct_decrypt2 = {value:key for key, value in dct_encrypt2.items()}

    # Get user input 'the message' and mode
    str_message = input("Enter your secret message: ")
    str_mode = input("Crypto Mode: (E)ncode or (D)ecode: ")

    # Run encode or decode
    # Example changed this to one case where D was default (if/else)
    if(str_mode.lower() == "e") :
        str_new_message = ''.join([dct_encrypt1[charLetter] for charLetter in str_message.lower()])
    elif(str_mode.lower() == "d") :
        str_new_message = ''.join([dct_decrypt1[charLetter] for charLetter in str_message.lower()])
    else :
        str_new_message = "Invalid mode!"

    # Return result
    return str_new_message.capitalize()

print(EnigmaLight())
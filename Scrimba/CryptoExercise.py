#!/usr/bin/Python3

# Project - Crypto Machine
# From Scrimba Python Tutorial


# run encode or decode
# return result
# clean and beautify the code 

def EnigmaLight() :
    strNewMessage = ""
    # Create keys string
    strKeys = "abcdefghijklmnopqrstuvwxyz !"
    # Autogenerate values string by offsetting original string
    strValues = strKeys[-1] + strKeys[0:-1]
    #print(strKeys)
    #print(strValues)

    # Option 1: Create two dictionaries
    dictEncrypt1 = dict(zip(strKeys, strValues))
    dictDecrypt1 = dict(zip(strValues, strKeys))

    # Option 2: Create one dictionary and flip
    dictEncrypt2 = dict(zip(strKeys, strValues))
    dictDecrypt2 = {value:key for key, value in dictEncrypt2.items()}

    # Get user input 'the message' and mode
    strMessage = input("Enter your secret message: ")
    strMode = input("Crypto Mode: (E)ncode or (D)ecode: ")

    # Run encode or decode
    if(strMode.lower() == "e") :
        strNewMessage = ''.join([dictEncrypt1[charLetter] for charLetter in strMessage.lower()])
    elif(strMode.lower() == "d") :
        strNewMessage = ''.join([dictDecrypt1[charLetter] for charLetter in strMessage.lower()])
    else :
        strNewMessage = "Invalid mode!"

    return strNewMessage.capitalize()

print(EnigmaLight())
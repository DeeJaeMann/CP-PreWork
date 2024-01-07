###
# From thge string "Welcome to Python 101: Strings", extract text and create/
# print a new string that says:
# "1 Welcome Ring To Tyler"
# * Every first letter in a word should be capitalized(title format)
#
# Print the same string backwards..

strSentence = "Welcome to Python 101: Strings"
strTyler = strSentence[8] + "" + strSentence[12] + "" + strSentence[2] + "" + strSentence[1] + "" + strSentence[-5]
strFirstResult = strSentence[-10:-9] + " " + strSentence[:7] + " " + strSentence[-5:-1] + " " + strSentence[8:10] + " " + strTyler

print(strFirstResult.title())
print(strFirstResult[::-1].title())
###
# From thge string "Welcome to Python 101: Strings", extract text and create/
# print a new string that says:
# "1 Welcome Ring To Tyler"
# * Every first letter in a word should be capitalized(title format)
#
# Print the same string backwards..

str_sentence = "Welcome to Python 101: Strings"
str_tyler = str_sentence[8] + "" + str_sentence[12] + "" + str_sentence[2] + "" + str_sentence[1] + "" + str_sentence[-5]
str_first_result = str_sentence[-10:-9] + " " + str_sentence[:7] + " " + str_sentence[-5:-1] + " " + str_sentence[8:10] + " " + str_tyler

print(str_first_result.title())
print(str_first_result[::-1].title())
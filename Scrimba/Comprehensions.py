numbers = [1,2,3,4,5,6,7,8,9]

# listNew = []

# for num in numbers:
#     listNew.append(num*num)

# print(listNew)

# listNew2 = [num for num in numbers if num % 2 == 0]

# print(listNew2)

# listNew3 = list(filter(lambda num: num % 2 == 0, numbers))

# print(listNew3)

new_list = [(letter,num) for letter in 'spam' for num in range(4)]
print(new_list)
#Sets - Exercise

#1. Check if ‘Eric’ and ‘John’ exist in friends
#2. combine or add the two sets 
#3. Find names that are in both sets
#4. find names that are only in friends
#5. Show only the names who only appear in one of the lists
#6. Create a new cars-list without duplicates

set_friends = {'John','Michael','Terry','Eric','Graham'}
set_my_friends = {'Reg','Loretta','Colin','John','Graham'}
arr_cars = ['900','420','V70','911','996','V90','911','911','S','328','900']

print('Eric' in set_friends and 'John' in set_friends)
#print('John' in setFriends)
print(set_friends.union(set_my_friends))  # can also use setFriends | setMyFriends
print(set_friends.intersection(set_my_friends)) # can also use setFriends & setMyFriends
print(set_friends.difference(set_my_friends)) # can also use setFriends - setMyFriends
print(set_friends.symmetric_difference(set_my_friends))  # can also use setFriends ^ setMyFriends
set_cars = set(arr_cars)
print(set_cars)
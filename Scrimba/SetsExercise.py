#Sets - Exercise

#1. Check if ‘Eric’ and ‘John’ exist in friends
#2. combine or add the two sets 
#3. Find names that are in both sets
#4. find names that are only in friends
#5. Show only the names who only appear in one of the lists
#6. Create a new cars-list without duplicates

setFriends = {'John','Michael','Terry','Eric','Graham'}
setMyFriends = {'Reg','Loretta','Colin','John','Graham'}
arrCars = ['900','420','V70','911','996','V90','911','911','S','328','900']

print('Eric' in setFriends and 'John' in setFriends)
#print('John' in setFriends)
print(setFriends.union(setMyFriends))  # can also use setFriends | setMyFriends
print(setFriends.intersection(setMyFriends)) # can also use setFriends & setMyFriends
print(setFriends.difference(setMyFriends)) # can also use setFriends - setMyFriends
print(setFriends.symmetric_difference(setMyFriends))  # can also use setFriends ^ setMyFriends
setCars = set(arrCars)
print(setCars)
#objMyFile = open("greeting.txt","r")
#print(objMyFile.read())
#print(objMyFile.readline())
#objMyFile.close()

# with open("friends.csv", "r") as objFriendsFile:
#     #print(objMyFile.read())
#     strFriendsList = objFriendsFile.read().splitlines()
#     print(strFriendsList)
#     for strFriend in strFriendsList:
#         strFriend = strFriend.split(',')
#         strName = strFriend[0]
#         intYear = int(strFriend[1].strip())
#         print(f"In 2030 {strName} will be {2030 - intYear} years old")

with open("movies.txt", "r") as objMoviesFile :
    for strLine in objMoviesFile :
        print(strLine)
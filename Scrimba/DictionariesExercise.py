# Exercise: Dictionary
#
# Ver 1.0
# Your village is being attacked by 'a germanic tribe' and you need to run the stores
# and get the right things to save your villate, and probably some good looking girl
# or boy you want to marry.  All prices in gold pieces excl. VAT... chop chop!! ze
# germanz are coming!
#
# The code should allow you to get 1 thing from each store and each item you get
# should be removed from the store inventory, then do the same for the next store...
# one way to buy by typing the key 'newt' in an input box... or something
#
# Ver 1.2
# Add ability to exit a store without buying and go to the next by typing 'exit', 
# and to exit if a nonexistant item is bought(typed)
# Add purse with 1000 gold pieces and payment for the items during or at end of
# code and show a message about total cost and how much gold you have left
#
# Ver 1.4
# random bug fix, 'browser compatability', refactoring code... basically being lazy...
# stop scrolling TikTok/Facebook!
#
# Ver 1.5
# print inventory before and after purchases as one department_store of stuff(combine
# inventories from all stores into one... pretend Big Biz bought all the local stores,
# and want constant reporting for inventory management...)
#
# as in all games there is a special way to do this that actually makes money and solves
# the problem... can you find 'them'? Do you know why? May require knowledge of actual
# python 'lore'

# create stores
dictFreelancers = {'name':'freelancing Shop','brian': 70, 'black knight':20, 'biccus diccus':100, 'grim reaper':500, 'minstrel':-15}
dictAntiques = {'name':'Antique Shop','french castle':400, 'wooden grail':3, 'scythe':150, 'catapult':75, 'german joke':5}
dictPetShop = {'name':'Pet Shop','blue parrot':10, 'white rabbit':5, 'newt': 2}

#create an dempty shopping cart
dictCart = {}
intWallet = 1000
strBuyItemList = ""

# Beginning inventory
dictDepartmentStoreBegin = {}
for strDepartment in (dictFreelancers, dictAntiques, dictPetShop) : 
    dictDepartmentStoreBegin.update(strDepartment)
dictDepartmentStoreBegin.pop('name')

print(f"Morning inventory: {sorted(dictDepartmentStoreBegin.items())}")
print(f"**********")
#loop through stores/dicts
for strShop in (dictFreelancers, dictAntiques, dictPetShop) :

    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    strBuyItem = input(f"Welcome to {strShop['name'].title()}! (type exit to exit store) What do you want to buy: \n{strShop}\nItem: ").lower()
    # v1.2 code
    # exit on exit or buying non existant item
    if(strBuyItem == "exit") :
        continue
    elif strBuyItem not in strShop :
        continue
    # to make output pretty
    elif (len(strBuyItemList) > 0) : 
        strBuyItemList += ", "

    strBuyItemList += f"{strBuyItem.title()} : {strShop[strBuyItem]} gp"
    #update the cart
    dictCart.update({strBuyItem:strShop.pop(strBuyItem)}) # use pop...
    # variables for string output
#strItemsList = ", ".join(list(dictCart.keys()))
intCartTotal = sum(dictCart.values())
intWallet = intWallet - intCartTotal

print(f"You Purchased: {strBuyItemList}. Your total is {intCartTotal} gp.  Your change is {intWallet} gp. Have a nice day of mayhem!")
# End inventory
dictDepartmentStoreEnd = {}
for strDepartment in (dictFreelancers, dictAntiques, dictPetShop) : 
    dictDepartmentStoreEnd.update(strDepartment)
dictDepartmentStoreEnd.pop('name')

print(f"**********")
print(f"Evening inventory: {sorted(dictDepartmentStoreEnd.items())}")

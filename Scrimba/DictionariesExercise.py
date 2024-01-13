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
dct_freenlancers = {'name':'freelancing Shop','brian': 70, 'black knight':20, 'biccus diccus':100, 'grim reaper':500, 'minstrel':-15}
dct_antiques = {'name':'Antique Shop','french castle':400, 'wooden grail':3, 'scythe':150, 'catapult':75, 'german joke':5}
dct_pet_shop = {'name':'Pet Shop','blue parrot':10, 'white rabbit':5, 'newt': 2}

#create an dempty shopping cart
dct_cart = {}
int_wallet = 1000
str_buy_item_list = ""

# Beginning inventory
dct_dept_store_begin = {}
for str_dept in (dct_freenlancers, dct_antiques, dct_pet_shop) : 
    dct_dept_store_begin.update(str_dept)
dct_dept_store_begin.pop('name')

print(f"Morning inventory: {sorted(dct_dept_store_begin.items())}")
print(f"**********")
#loop through stores/dicts
for str_shop in (dct_freenlancers, dct_antiques, dct_pet_shop) :

    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    str_buy_item = input(f"Welcome to {str_shop['name'].title()}! (type exit to exit store) What do you want to buy: \n{str_shop}\nItem: ").lower()
    # v1.2 code
    # exit on exit or buying non existant item
    if(str_buy_item == "exit") :
        continue
    elif str_buy_item not in str_shop :
        continue
    # to make output pretty
    elif (len(str_buy_item_list) > 0) : 
        str_buy_item_list += ", "

    str_buy_item_list += f"{str_buy_item.title()} : {str_shop[str_buy_item]} gp"
    #update the cart
    dct_cart.update({str_buy_item:str_shop.pop(str_buy_item)}) # use pop...
    # variables for string output
#strItemsList = ", ".join(list(dictCart.keys()))
int_cart_total = sum(dct_cart.values())
int_wallet = int_wallet - int_cart_total

print(f"You Purchased: {str_buy_item_list}. Your total is {int_cart_total} gp.  Your change is {int_wallet} gp. Have a nice day of mayhem!")
# End inventory
dct_dept_store_end = {}
for str_dept in (dct_freenlancers, dct_antiques, dct_pet_shop) : 
    dct_dept_store_end.update(str_dept)
dct_dept_store_end.pop('name')

print(f"**********")
print(f"Evening inventory: {sorted(dct_dept_store_end.items())}")

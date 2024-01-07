# def NameAndAlias(strName, strAlias) :
#     return f"{strName.strip().title()} : {strAlias.strip().title()}"

# NameAndAliasLambda = lambda strName, strAlias: f"{strName.strip().title()} : {strAlias.strip().title()}"

# print(NameAndAlias(" john ClEEse    ", "HECKLER"))
# print(NameAndAliasLambda("  JoHN clEEse   ", "hecKLER   "))

# listMontyPython = ['John Marwood Cleese','Eric Idle','Michael Edward Palin','Terrence Vance Gilliam','Terry Graham Perry Jones', 'Graham Arthur Chapman']

# listMontyPython.sort(key = lambda strName:strName.split(' '))  # First name sort
# listMontyPython.sort(key = lambda strName:strName.split(' ')[-1])  # Last name sort

# print(listMontyPython)

# def func(n) :
#     return lambda a: a*n
#     # return n

# doubler = func(2)
# print(doubler(3))
# print(type(func(3)))
# quintipler = func(3)
# print(quintipler(3))

# def PriceCalc(intStart, intHourlyRate) :
#     return lambda intHours: intStart + intHourlyRate * intHours

# walkinCost = PriceCalc(10,30)
# premiumCost = PriceCalc(1,25)

# print(walkinCost(2))
# print(premiumCost(2))

# print((lambda a,b,c: a+b+c)(2,3,4))
print((lambda *args: sum(args))(2,3,4,50))
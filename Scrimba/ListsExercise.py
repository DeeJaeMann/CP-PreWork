# Lists Exercise
#
# You sell lemonade over two weeks, the lists show
# number of lemonades sold per week
# Profit for each lemonade sold is $1.5
# Add another day to week 2 list by caputring a
# number as input
# Combine the two lists into the list called 'sales'
# Calculate/print how much you have earned on:
# Best Day
# Worst Day
# Separately and in total
#  3 prints in total

arrSalesW1 = [7,3,42,19,15,35,9]
arrSalesW2 = [12,4,26,10,7,28]
arrSales = []

intDayAdded = int(input('Please enter sales for the last day:  '))
arrSalesW2.append(intDayAdded)
arrSales = arrSalesW1 + arrSalesW2
#print(arrSales)
floatProfit = 1.5
arrBestSales = max(arrSales) * floatProfit
arrWorstSales = min(arrSales) * floatProfit
intSalesSum = sum(arrSales) * floatProfit
intW1Sum = sum(arrSalesW1) * floatProfit
intW2Sum = sum(arrSalesW2) * floatProfit

print(f"Best Day: {arrBestSales}")
print(f"Worst Day:  {arrWorstSales}")
print(f"Total Sales: {intSalesSum}, Week 1: {intW1Sum}, Week 2: {intW2Sum}")

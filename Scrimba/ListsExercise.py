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

arr_sales_w1 = [7,3,42,19,15,35,9]
arr_sales_w2 = [12,4,26,10,7,28]
arr_sales = []

int_day_added = int(input('Please enter sales for the last day:  '))
arr_sales_w2.append(int_day_added)
arr_sales = arr_sales_w1 + arr_sales_w2
#print(arrSales)
flt_profit = 1.5
arr_best_sales = max(arr_sales) * flt_profit
arr_worst_sales = min(arr_sales) * flt_profit
int_sales_sum = sum(arr_sales) * flt_profit
int_w1_sum = sum(arr_sales_w1) * flt_profit
int_w2_sum = sum(arr_sales_w2) * flt_profit

print(f"Best Day: {arr_best_sales}")
print(f"Worst Day:  {arr_worst_sales}")
print(f"Total Sales: {int_sales_sum}, Week 1: {int_w1_sum}, Week 2: {int_w2_sum}")

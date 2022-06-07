import sys 

first_num = float(sys.argv[1])
second_num = float(sys.argv[2])

result_sum = first_num + second_num
result_difference = first_num - second_num
result_product = first_num * second_num
result_quotient = first_num / second_num

print(f"{first_num} plus {second_num} equals {result_sum}")
print(f"{first_num} minus {second_num} equals {result_difference}")
print(f"{first_num} times {second_num} equals {result_product}")
print(f"{first_num} divided by {second_num} equals {result_quotient}")
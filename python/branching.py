import sys

first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
final_sum = first_num + second_num

if final_sum <= 0:
    print("You have chosen the path of destitution.")
elif final_sum > 1 and final_sum <= 100:
    print("You have chosen the path of plenty.")
else:
    print("You have chosen the path of excess.")
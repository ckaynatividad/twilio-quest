import sys 

inputs = sys.argv
inputs.pop(0)

def conv(num):
    return int(num)


for index, num in enumerate(inputs, start=1):
    if conv(num) % 3 == 0 and conv(num) % 5 ==0:
        print("fizzbuzz")
    elif conv(num) % 5 == 0:
        print("buzz")
    elif conv(num) % 3 == 0:
        print("fizz")
    else:
        print(f"{num}")

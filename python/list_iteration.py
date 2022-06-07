import sys

succession = sys.argv
succession.pop(0)

for index, person in enumerate(succession, start=1):
    list_print = f"{index}. {person}"
    print(list_print)
def binary_to_int(binary: str) -> int:
    value = 1
    total = 0
    for i in range(len(binary)-1, -1, -1):
        if int(binary[i]) == 1:
            total += value
        # print(binary[i], value)
        value *= 2
    print(total)

binary_to_int('11010')
binary_to_int(input('Enter a binary number: '))

def int_to_binary(num: int) -> str:
    ...


# int_to_binary(26) -> '11010'

# binary:  1 1 0 1 0
# value:  16 8 4 2 1

# 1 + 4


# value = 1


    



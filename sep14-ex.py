total = 0
output = 'Total = '

length = 5

for i in range(length):
    num = int(input(f'{i+1}. Enter a number: '))
    total += num
    output += str(num)
    # last index
    if i == length - 1:
        output += ' = '
    else:
        output += ' + '

output += str(total)

print(output)
# i = index

# range(stop)
# for i in range(10):
#     print(i)

# # range(start, stop)
# for i in range(5, 10):
#     print(i)

# # range(start, stop, step)
# for i in range(10, 30, 2):
#     print(i)


# while condition is true:
#     do this

# is_raining = True

# while is_raining:
#     print('stay indoor')
    
# Ctrl-C to stop

# num = 1
# while num < 10:
#     print(num)
#     # manually update the condition
#     num = num + 2
    
# print('outside while:', num)


# %: modulus: get the remainder
# /: division

# print(10/5)
# print(10%2)

# print(10/3)
# print(10%3)

# num = int(input('enter a num: '))

# if num % 2 == 0:
#     print('even number')
# else:
#     print('odd number')


# 1: odd
# 2: even
# 3: odd
# ...
# 10: even

# print(str(num) + ': odd')

name = 'brian'
year = 1995
love_ramen = True

# String concatenation
# print('Hi my name is ' + name + '. I was born in ' + str(year) + ' and I love ramen is ' + str(love_ramen) + '!')

# String format
# print(f'Hi my name is {name}. I was born in {year} and I love ramen is {love_ramen}!')

# old fashions
# print('Hi my name is {}. I was born in {} and I love ramen is {}!'.format(name, year, love_ramen))
# print('Hi my name is {name_placeholder}. I was born in {year_goes_here} and I love ramen is {ramen_here}!'.format(ramen_here=love_ramen, year_goes_here=year, name_placeholder=name))


# totalling

# input number 1: 5
# input number 2: 7
# input number 3: 10

# total = 12

# for...
#     input...
    
# print(total)

# total = 0
# for i in range(1, 4):
#     num = int(input(f'Enter number {i}: '))
#     total = total + num
    
# print(f'total = {total}')



# factorial of 5:
#     5! = 5 x 4 x 3 x 2 x 1 = 120

# Factorial of: 6
# Output: '6! = 720'

# for i in range(6, 0, -1):
#     print(i)

# output = ''
# total = 0

# #
# for n in range(1, 10):
#     output = output + str(n)    # build string
#     total = total + n           # sum a number

# print(f'output = {output}')
# print(f'total = {total}')



# emote = '='

# hilarious_level = int(input('input level of hilarious (1-10): '))

# for i in range(hilarious_level):
#     # emote = emote + ')'
#     emote += ')'
    
# print(emote)


# HW:
    
#     1. Total = 1 + 2 + 3 + 5 + 4 = 15
#     2. 6! = 720
#     => 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
    
    
# for + if (is it the last number?)

output = ''
for i in range(10):
    output += f'{i}'
    
    # last number
    if i == 9:
        output += ' = '
    else:
        output += ' + '

print(output)
# divisors = []

# # task a
# n = int(input('Enter a number: '))

# for i in range(1, n):
#     if n % i == 0:
#         divisors.append(i)
        
# print(divisors)

# # task b
# div_total = 0
# for div in divisors:
#     div_total += div
    
# if n == div_total:
#     print(f'{n} is a perfect number')
# elif n < div_total:
#     print(f'{n} is a abundant number')
# elif n > div_total:
#     print(f'{n} is a deficient number')


def isAbundant(n):
    divisors = []

    for i in range(1, n):
        if n % i == 0:
            divisors.append(i)
            
    # print('divisors:', divisors)

    # task b
    div_total = 0
    for div in divisors:
        div_total += div
        
    if n < div_total:
        # print(f'{n} is a abundant number')
        print('divisors:', divisors)
        return True
    else:
        return False
    
    
# n = int(input('Enter a number: '))
# print(isAbundant(n))



# for i in range(1, 100):
#     if isAbundant(i):
#         print(i)
    
# 12
# 18
# 20
# 24
# 30
# 36
# 40
# 42
# 48

DATA = [40, 41, 42, 43, 48, 50]

odds = 0
evens = 0

for n in DATA:
    if isAbundant(n):
        if n % 2 == 0:
            evens += 1
        else:
            odds += 1
        print(f'- Abundant number = {n}')

print(f'Odd integers = {odds}')
print(f' | Even integers = {evens}')
        
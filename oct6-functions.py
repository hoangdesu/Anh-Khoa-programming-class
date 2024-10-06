# 1 input, 0 ouput
def say_hi(name):
    print('Hiii ' + name)

# say_hi('Khoa')
# say_hi('Brian')

import math

# 1 input, 1 ouput
def calculate_1_circle_area(radius):
    area = radius ** 2 * math.pi
    return area
    

# area_of_1_circle = calculate_1_circle_area(4)
# print('area of 3 circles: ', area_of_1_circle * 3)


# multiple inputs
def introduce(name, age, country):
    print(f'Hi my name is {name}. I came from {country} and I am {age} years old!')
    
# introduce('Hoang', 29, 'Vietnam')
# introduce('Khoa', 16, 'England')


# default params
def hello(name='World'):
    print('Hello ' + name)
    
# hello()
# hello('Tommy')

# default param must come last
def hello2(age, name='world'):
    print(f'Name: {name}, age: {age}')

hello2(16, 'Tommy')


# arbitrary number of arguments
def sum_them_all_up(*nums):
    # print(nums)
    # print(len(nums))
    
    total = 0
    for i in range(len(nums)):
        total += nums[i]
    return total


print(sum_them_all_up(1, 2, 3))
print(sum_them_all_up(6, 5, 4, 2, 9, 1, 2, 3))
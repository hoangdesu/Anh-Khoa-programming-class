# R / G / B: 0 -> 255

# get_random_rgb() -> 'rgb(110, 61, 69)'

# def get_random_rgb() -> str:

import random

# print(random.randint(0, 255))

# 1. function definition
def generate_random_rgb() -> str:
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return f'rgb({r}, {g}, {b})'


# 2. execute the function
# while input() != 'stop':

# color = generate_random_rgb()
# print(color)

    

# Hex: 0-9, a-f

# Hexadecimal: 16

# Hex color: '#rrggbb'

    
def get_random_hex_color() -> str:
    # 0-9, a-f
    # string: list of characters
    # options = ['0', '1', '2', ... 'a', 'b', 'c']
    hex_characters = '0123456789abcdef'
    
    # sử dụng randint để lấy 1 random index trong khoảng từ 0 -> 15
    # random_index = random.randint(0, len(hex_characters) - 1)
    
    # lấy ra 1 kí tự từ trong string sử dụng index
    # random_hex_character = hex_characters[random_index]
    # print(random_hex_character)

    color = '#'
    for i in range(6):
        random_index = random.randint(0, len(hex_characters) - 1)
        random_hex_character = hex_characters[random_index]
        color += random_hex_character
        
    return color
    

hex_color = get_random_hex_color()
print(hex_color)
    
    
# get_random_hex_color() -> '#33807c', '#c7246a'

# => use List

# string = list of characters
# name = 'Khoa'

# print(name[0])
# print(name[1])
# print(name[2])
# print(name[3])
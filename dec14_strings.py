# print(chr(97)) # chr(ascii cua 1 chu cai) => character
# print(ord('z')) # => decimal

# ascii = random.randint(33, 126)
# print(chr(ascii))


def generate_random_password(pwd_length: int) -> str:
    import random
    
    # Zones:
    # 1: numbers
    # 2: upper-cases
    # 3: lower-cases

    password = ''
    for i in range(pwd_length):
        zone = random.randint(1, 3)

        if zone == 1:
            # print('generate a number')
            password += str(random.randint(0, 9))
        elif zone == 2:
            # print('generate an uppercase')
            password += chr(random.randint(65, 90))
        elif zone == 3:
            # print('generate an lowercase')
            password += chr(random.randint(97, 122))
        
    return password

print(generate_random_password(16))


generate_random_password_2
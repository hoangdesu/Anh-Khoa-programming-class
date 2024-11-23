# day = 1
# if day > 1:
#     print('monday')
# elif day == 2:
#     print('tuesday')
# elif day == 3:
#     print('monday')
# elif day == 4:
#     print('tuesday')
# elif day == 5:
#     print('monday')
# elif day == 6:
#     print('tuesday')
    
    
# day = int(input('enter a day: '))

# match day:
#     case 1 | 8:
#         print('monday')
#     case 2:
#         print('tuesday')
#     case 3:
#         print('wednesday')
#     case 4:
#         print('thursday')
#     # default case
#     case _:
#         print('invalid day. please enter a number 1-7')
        

# Mapping: connect a column of data to a more meaningful column


# a,b,c -> 2
# d,e,f -> 3


# Phoneword:
# 1-800-APPLE
# 1-800-27753


def get_phone_word(name: str) -> str:
    phone_word = '1-800-'
    
    # for i in range(len(name)):
    # shorthand for loop
    for char in name.lower():
        match char:
            case 'a' | 'b' | 'c':
                phone_word += '2'
            case 'd' | 'e' | 'f':
                phone_word += '3'
            case 'd' | 'e' | 'f':
                phone_word += '3'
    
    return phone_word

phone_word = get_phone_word('ABCDEF')
print(phone_word)



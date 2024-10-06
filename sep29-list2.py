menu = ['sushi', 'ramen', 'takoyaki', 'sashimi', 'udon']

# print(menu[5])

# neu co: your order ... is on the way
# neu ko co: sorry we dont have ...

# order == menu ?

# print(len(menu))
# 5

print('--- Menu: ')
for i in range(len(menu)):
    print(f'{i+1}. {menu[i]}')
    
print('-' * 20)
order = input("What's your order: ")

found = False # flagging

for i in range(len(menu)):
    # switch to True if found
    if order == menu[i]:
        # print(f'Your order of {order} is on the way!')
        
        found = True
        break
    
    # else:
    #     print(f"Sorry we don't have {order}")

if found:
    print(f'Your order of {order} is on the way!')
else:
    print(f"Sorry we don't have {order}")

# Linear Search
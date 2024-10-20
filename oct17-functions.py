def get_num_list(start: int, stop: int, type='') -> list:
    # default value: di len
    step = 1
    
    # di xuong
    if start > stop:
        step = -1
        
    num_list = []
    for i in range(start, stop+step, step):
        if type == 'even' and i % 2 == 0:
            num_list.append(i)
        elif type == 'odd' and i % 2 != 0:
            num_list.append(i)
        elif type == '':
            num_list.append(i)
        
    
    return num_list

print(get_num_list(10, 4))
print(get_num_list(5, 9))

print(get_num_list(5, 19, 'even'))
print(get_num_list(30, 11, 'odd'))


print(8 % 2 == 0) # -> even num
print(9 % 2)
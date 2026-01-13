data = [2, 3, 3, 6, 5, 9, 10, 100, 14, 17]

# a) find mean
total = 0
for i in range(len(data)):
    total += data[i]
    
print(total)

mean = total / len(data)


# b) find median
# data.sort()
# print(data)


# print(data[10])

# leave 1 space for j, as j = i + 1
for i in range(len(data) - 1):
    temp_smallest = data[i]
    temp_j = -1
    # print('data[i]:', data[i], end=" ")
    
    need_to_swap = False
    for j in range(i+1, len(data)):
        if data[j] < temp_smallest:
            temp_smallest = data[j]
            temp_j = j
            need_to_swap = True
            # print('temp smallest:', temp_smallest)
            
    if need_to_swap:
        temp_variable = data[i]
        data[i] = temp_smallest
        data[temp_j] = temp_variable
        
print(data)
# array is now sorted

# 1 2 3 len arr == lẻ => len(arr) % 2 == 1
# 1 2 3 4 len(arr) % 2 == 0
4 / 2
# even length
if len(data) % 2 == 0:
    a = len(data) // 2
    b = a - 1
    median = (data[a] + data[b]) / 2
# odd length
else:
    middle_index = len(data) // 2
    median = data[middle_index]
    
print('median:', median)

    
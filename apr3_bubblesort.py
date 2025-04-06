# [3 5 2 1]

# 3 5 2 1
# 3 2 5 1
# 3 2 1 5
# 2 3 1 5
# 2 1 3 5
# 2 1 3 5
# 1 2 3 5
# 1 2 3 5

arr = [3, 5, 2, 1]

# round = 1
# for i in range(len(arr) - 1):
#     for j in range(i+1, len(arr)):
#         # swap the values if they are out of order
#         if arr[i] > arr[j]:
#             temp = arr[i]
#             arr[i] = arr[j]
#             arr[j] = temp
        
#         print(f'i={i}, j={j}, round = {round}, array = {arr}')
#         round+=1



while True:
    swapped = False
    for i in range(len(arr) - 1):
        j = i + 1
        
        # swap the values if they are out of order
        if arr[i] > arr[j]:
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            swapped = True

        print(f'i={i}, j={j}, array = {arr}')
            
    if not swapped:
        break

print('after sorted:', arr)
        
    

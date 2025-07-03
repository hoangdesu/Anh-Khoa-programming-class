names = ['Smith', 'Jane', 'Uysal', 'Rafael', 'Ahmed', 'Ishmael', 'Jonsonn', 'Sara']

# for name in names:
#     print(name)
    
# list comprehension
surnames = [name for i, name in enumerate(names) if i % 2 == 0]
firstnames = [name for i, name in enumerate(names) if i % 2 != 0]

# for i in range(len(names)):
#     # print(names[i])
#     if i % 2 == 0:
#         surnames.append(names[i])
#     else:
#         firstnames.append(names[i])
        
print(surnames)
print(firstnames)

# b

# for i in range(len(surnames) - 1):
#     for j in range(i+1, len(surnames)):

while True:
    swapped = False
    for i in range(len(surnames) - 1):
        j = i + 1
        
        # swap the values if they are out of order
        if surnames[i] > surnames[j]:
            temp = surnames[i]
            surnames[i] = surnames[j]
            surnames[j] = temp
            
            temp = firstnames[i]
            firstnames[i] = firstnames[j]
            firstnames[j] = temp

            swapped = True

        # print(f'i={i}, j={j}, array = {arr}')
            
    if not swapped:
        break
        
        
print(surnames)
print(firstnames)



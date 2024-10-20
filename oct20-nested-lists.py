# 2D lists: lists nested inside a big list

# students = [
#     ['a', 'b', 'c'], # 0
#     ['d', 'e', 'f', 'g'], # 1
#     ['h', 'i', 'j', 'k', 'l', 'm'] # 2
# ]

# print(students)

# print(students[1])

# print(students[1][2])

# print(students[2][4])

# for i in range(len(students)):
#     for j in range(len(students[i])):
#         print(students[i][j], end=" ")
#     print()


phone_number = []

counter = 1
for row in range(3):
    small_list = []
    for col in range(3):
        small_list.append(counter)
        counter += 1
    phone_number.append(small_list)



# print(phone_number)
# => [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]

for i in range(len(phone_number)):
    for j in range(len(phone_number[i])):
        print(phone_number[i][j], end=" ")
    print()
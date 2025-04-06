# 2 main algorithms:
#     1. Search algos:
#         - linear search (sequential)
#         - binary search -> array must already be sorted
#     2. Sort algos:
#         - selection sort
#         - bubble sort
#         - quicks sort
#         - merge sort
#         - insertion sort



# f1_teams = ['RedBull', 'McLaren', 'Mercedes']

# fav_team = input('What is your favorite team: ')

# # Linear search
# found = False   # placing a boolean flag
# for i in range(len(f1_teams)):
#     if fav_team.lower() == f1_teams[i].lower():
#         print(f'Found: {f1_teams[i]}')
#         found = True
#         break
        
#     # print(f'finish comparing: {f1_teams[i]}')
#     # else:
#     #     print('I dont like ' + fav_team)

# # conclusion at the end
# if not found:
#     print(fav_team + ' not found')
 


# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# big O notation
# time complexity of an algo
# binary search: O(log(n))

# linear: 10
# binary: 3

nums = []

for n in range(1, 100_000+1):
    nums.append(n)

# num_to_search = int(input('Enter num to search: '))

# found = False
# search_count = 1
# for i in range(len(nums)):
#     if num_to_search == nums[i]:
#         print('Found: ', num_to_search)
#         print('Search counts:', search_count)
#         break
#     search_count += 1



      # h           m              t
# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      # h           m              t
      #                h     m     t
search_num = 60

#index of the head and tail
headIndex = 0
tailIndex = len(nums) - 1 # 9

found = False
count = 0
while True:
    midIndex = (headIndex + tailIndex) // 2
    if search_num > nums[midIndex]:
        headIndex = midIndex + 1
        print('search num is found on the right array')
    elif search_num < nums[midIndex]:
        tailIndex = midIndex - 1
        print('search num is found on the left array')
    elif search_num == nums[midIndex]:
        print('Found number:', search_num)
        found = True
        break
    count += 1
    print(f'midIndex={midIndex}, headIndex={headIndex}, tailIndex={tailIndex}, middle number={nums[midIndex]}, search count={count}')
    
if not found:
    print('Number:', search_num, 'not found')

# nums = [1, 2, 3]

# nums[1] = 5

# direct access elements using index
# for i in range(len(nums)):
#     print(nums[i])

# shorthand for loop
# for num in nums:
#     num = num * 2
#     print(num)
    
# print(nums)

# list comprehension
# print([i for i in nums])

# doubled = [i*2 for i in nums]
# print(doubled)

# nums = []

# for i in range(1, 11):
#     nums.append(i)
    
# # print(nums)

# even_nums = [n for n in nums if n % 2 == 0]
# # for n in nums:
# #     if n % 2 == 0:
# #         even_nums.append(n)
# print(even_nums)


# large_nums: [6-10]

nums = [i for i in range(1, 11)]
print(nums)

num_types = ['even' if n % 2 == 0 else 'odd' for n in nums]
# num_types = []
# for num in nums:
#     if num % 2 == 0:
#         num_types.append('even')
#     else:
#         num_types.append('odd')
    
print(num_types)
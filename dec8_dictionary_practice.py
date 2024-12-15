# JSON ?

# text vs binary (executable -> .exe)

# API?

# requests library


def contains_duplicate(num_list: list[int]) -> bool:
    seen = {}
    for num in num_list:
        # nếu chưa thấy số đó, bỏ vào seen:
        # chỉ quan tâm key thôi, ko quan trọng value
        if seen.get(num) is None:
            # seen[num] = 1
            seen.update({ num: 1 })
        # đã có số đó trong seen => kết luận luôn
        else:
            return True
    return False
            



print(contains_duplicate([1, 2, 3, 4])) # -> false

print(contains_duplicate([1, 2, 1, 3, 2])) # -> true


# tips: dictionary


# numbers = {
#     2: 10
# }

# print(numbers.get(1))

# numbers.update({1: 'a'})

# # add using direct access
# numbers[2] = 'hai'
# numbers[9] = 1

# print(numbers)
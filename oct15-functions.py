# last_name   middle_name     first_name
# Nguyen      Anh             Khoa
# Nguyen      Quoc            Hoang


# Lv 1:
# convert_vietnamese_name_to_english_name(last_name, middle_name, first_name)

# english_name = convert_vietnamese_name_to_english_name("Nguyen", "Anh", "Khoa")
# print(english_name) -> "Khoa Nguyen"


# 1. function definition
def convert_vietnamese_name_to_english_name(last_name, middle_name, first_name):
    english_name = f'{first_name} {last_name}'
    return english_name


# 2. function execution
# khoa_english_name = convert_vietnamese_name_to_english_name('Nguyen', 'Anh', 'Khoa')
# print(khoa_english_name)


# hoang_english_name = convert_vietnamese_name_to_english_name('Nguyen', 'Quoc', 'Hoang')
# print(hoang_english_name)

# Lv2:
# get_viet_name('Nguyen Anh Khoa')        -> Khoa Nguyen
# get_viet_name('Phan Anh')               -> Anh Phan
# get_viet_name('Le Thanh Thien Nhan')    -> Nhan Le

def get_viet_name(full_name: str):
    # split strings into small strings using spaces -> we get a list back
    name_list = full_name.split(' ')
    
    last_name = name_list[0]    # get the first element of the list
    first_name = name_list[-1]   # get the last element of the list
    
    return f'{first_name} {last_name}'


# khoa_name = get_viet_name('Nguyen Anh Khoa')
# print(khoa_name)

# print(get_viet_name('Phan Anh'))
# print(get_viet_name('Le Thanh Thien Nhan'))


# add(a, b)

# print(add(2, 7)) -> 9

# enter number a: 2
# enter number b: 8
# "Result = 2 + 8 = 10"


# def calculate_average(nums: list) -> float:
    # 1. get total from the list
    
    # 2. calculate average
    
    # 3. return the value


# calculate_average([2, 4, 5, 1, 4]) -> 3.2

Homework:
    
def get_number_list(start: int, stop: int, type: str) -> list:
    ...

    
# NOTE: inclusive start and stop

get_number_list(68, 72) -> [68, 69, 70, 71, 72]
get_number_list(10, 4)  -> [10, 9, 8, 7, 6, 5, 4]


extra:
get_number_list(10, 4, 'even') -> [10, 8, 6, 4]

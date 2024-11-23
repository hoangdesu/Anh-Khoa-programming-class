def binary_to_int(binary: str) -> int:
    value = 1
    total = 0
    for i in range(len(binary)-1, -1, -1):
        if int(binary[i]) == 1:
            total += value
        # print(binary[i], value)
        value *= 2
    print(total)

# binary_to_int('11010')
# binary_to_int(input('Enter a binary number: '))


# index:   0 1 2 3
# value:   8 4 2 1
# binary: "1 1 0 1"




# total = 1 + 4 + 8 = 13


def int_to_binary(num: int) -> str:
    binary = ''
    while True:
        remainder = num % 2
        num = num // 2
        
        # print('num =', num)
        # print('remainder =',remainder)
        
        binary = str(remainder) + binary
        
        if num == 0:
            # print(binary)
            # break
            return binary
    
        
    
    
binary = int_to_binary(int(input('Enter a number: ')))
print(binary)
    

# int_to_binary(21) -> "10101"    

# 13 = "1101"
# 13 / 2 = 6 dư 1  ⬇️ (phải qua trái)
# 6 / 2 = 3 dư 0
# 3 / 2 = 1 dư 1
# 1 / 2 = 0 dư 1

# => 1101



# # 10101 = 21

# 21 / 2 = 10 remains 1
# 10 / 2 = 5  remains 0
# 5 / 2  = 2  remains 1
# 2 / 2  = 1  remains 0
# 1 / 2  = 0  remains 1


# is_palindrome(word: str) -> bool

''


Homework:
is_palindrome('abba') -> true
is_palindrome('rotator') -> true
is_palindrome('rotaetor') -> false


ma[d]am
ab | ba


hint: using 2 pointers technique

⬇️          ⬇  => OK
r o t a t o r



  ⬇️      ⬇    => OK 
r o t a t o r


    ⬇️  ⬇      => OK 
r o t a t o r


      ⬇
      ⬇️        => OK 
r o t a t o r


=> is a palindrome! => TRUE
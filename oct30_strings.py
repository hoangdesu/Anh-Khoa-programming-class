# strings: array of characters

# name = 'Anh Khoa'

# print('first char:', name[0])

# print('last char:', name[len(name) - 1])

# print('last char:', name[-2]) # only in python

# for i in range(len(name)):
#     print(name[i])
    
    
# function to count vowels inside a string

# vowels: a, e, i, o, u

# count_vowels(text: str) -> int:
    
# count_vowels("anh khoa!:D!!") -> 3
# count_vowels("brian nguyen") -> 4


def count_consonants(text: str) -> int:
    consonants = 0
    
    for i in range(len(text)):
        # is_vowel = text[i] == 'a' or text[i] == 'i' or text[i] == 'u' or text[i] == 'e' or text[i] == 'o'
        is_vowel = text[i] in ['a', 'i', 'u', 'e', 'o']
        # print(text[i], is_vowel)
        
        is_valid_characters = text[i] >= 'a' and text[i] <= 'z'
        
        if is_valid_characters and (not is_vowel):
            consonants += 1
    
    return consonants
        
        
# Ternary
consonants = count_consonants('anh khoa')
print('consonants' if consonants > 1 else 'consonant', consonants, )


# Enter something: anh khoa
# "anh khoa" has 3 vowels, 4 consonants and 1 special character
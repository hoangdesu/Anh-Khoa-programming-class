def get_char_frequency(word: str) -> dict:
    frequency_dictionary = {}
    for i in range(len(word)):
        char = word[i]
        # if char in frequency_dictionary.keys()
        if char.isalpha():
            if frequency_dictionary.get(char) is None:
                # print('dictionary not having char: ', char)
                frequency_dictionary[char] = 1
            else:
                frequency_dictionary[char] += 1
    
    return frequency_dictionary
        

freq_dict = get_char_frequency('heyyy how are your doing!?113456')
print(freq_dict)
    
# get_char_frequency('hello')
# {
#     'h': 1,
#     'e': 1,
#     'l': 2,
#     'o': 1
# }

# get_word_frequency("i am trying to buy a piano and the piano has to be grand piano")
# {
#     'piano': 3,
#     'i': 1,
#     'am': 1,
#     ...
    
# }
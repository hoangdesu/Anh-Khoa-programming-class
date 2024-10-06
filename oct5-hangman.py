hint = 'A car brand from the UK'
word = 'astonmartin'

guess_list = []

for i in range(len(word)):
    guess_list.append('_')

# print(len(word))
# print(len(guess_list))

# print(guess_list)


# - cho user enter sth
# - replace index tương ứng trong guess list nếu có
    
lives = 5


while lives > 0:
    print(f'Hint: {hint} ({len(word)} characters)')
    
    for i in range(len(guess_list)):
        print(guess_list[i], end=" ")
        
    guess = input('\n\nEnter your guess: ')
    
    found = False
    win = True
    
    # loop over every character of the word
    # find if the guess exists
    for i in range(len(word)):
        if guess == word[i]:
            # replace the character in the guess list at this index
            guess_list[i] = guess
            found = True
        if guess_list[i] == '_':
            win = False
            
    if found == False:
        lives -= 1
        print(f'Wrong guess. Your have {lives} lives left.')

    # Win condition
    if win:
        print('You won!!')
        print('The final word is ' + word)
        for i in range(len(guess_list)):
            print(guess_list[i], end=" ")
        break

    # print(guess_list)
    print()



# word length: 11
# _ _ _ _ _ _ _ _ _ _ _


# enter your guess: a

# a _ _ _ _ _ a _ _ _ _




# a s t o n m a r t i n


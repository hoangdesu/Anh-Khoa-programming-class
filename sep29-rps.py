import random

moves = ['rock', 'paper', 'scissors']

# print(rand_index)
# print()

score = 0

while True:
    print('-' * 30)
    
    rand_index = random.randint(0, len(moves) - 1)
    bot_move = moves[rand_index]
    
    player_move = input('Enter your move: ')

    # if player_move == 'rock' and bot_move == 'rock':
    #     ...
    # elif player_move == 'rock' and bot_move == 'paper':
    #     ...
    # elif player_move == 'rock' and bot_move == 'scissors':
    #     ...

    print('Bot: ' + bot_move)

    if player_move == 'rock':
        if bot_move == 'rock':
            print('Draw!')
        elif bot_move == 'paper':
            print('Winner: Bot')
            score -= 1
        elif bot_move == 'scissors':
            print('Winner: Player')
            score += 1
    elif player_move == 'paper':
        if bot_move == 'rock':
            print('Winner: Player')
            score += 1
        elif bot_move == 'paper':
            print('Draw!')
        elif bot_move == 'scissors':
            print('Winner: Bot')
            score -= 1
    elif player_move == 'scissors':
        if bot_move == 'rock':
            print('Winner: Bot')
            score -= 1
        elif bot_move == 'paper':
            print('Winner: Player')
            score += 1
        elif bot_move == 'scissors':
            print('Draw!')
    elif player_move == 'exit':
        break
    else:
        print('Invalid move. Please enter "rock", "paper", "scissors"')
            
    print(f'Your score: {score}')

print(f'Your final score: {score}')
print('Thanks for playing!')
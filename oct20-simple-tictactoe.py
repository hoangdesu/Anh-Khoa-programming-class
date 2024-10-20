# 3 x 3 matrix:

# 1 2 3
# 4 5 6
# 7 8 9

# counter = 1
# for row in range(3):
#     for i in range(3):
#         print(counter, end=" ")
#         counter += 1
#     print()


# 1 2 3
# 4 5 6
# 7 8 9

# X, enter your move: 5

# 1 2 3
# 4 X 6
# 7 8 9

board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# x always goes first
player = 'x'

while True:
    # print the game board
    for row in range(len(board)):
        for col in range(len(board[row])):
            print(board[row][col], end=" ")
        print()
    
    move = int(input(f'\nPlayer {player}, enter your move: '))
    
    # replace the number in the board with an 'x'
    if move >= 1 and move <= 9:
        for row in range(len(board)):
            for col in range(len(board[row])):
                if move == board[row][col]:
                    board[row][col] = player
    else:
        print('Invalid move')
        
    # alternating between player 'x' and 'o'
    if player == 'x':
        player = 'o'
    elif player == 'o':
        player = 'x'
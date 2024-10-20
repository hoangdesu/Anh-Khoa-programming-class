#     *
#    ***
#   *****
#  *******
# *********


# line    space    char
# 1       4        1  
# 2       3        3
# 3       2        5   
# 4       1        7
# 5       0        9
# ...
# 76               151


# char = line * 2 - 1

def print_pyramid(total_lines: int, character: str):
    # Initial values
    space = total_lines - 1
    char = 1

    for line in range(1, total_lines+1):
        # print spaces before chars
        for s in range(space):
            print(' ', end="")
        
        # print chars    
        for c in range(char):
            print(character, end="")
            
        # break onto a new line
        print()
            
        # modify the variables for the next run
        space -= 1
        char += 2
      

def print_diamond(total_lines: int, character: str):
    ...
    
#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *


# 3 / 2 = 1.5
# 3 // 2 = 1
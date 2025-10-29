Denary -> Binary

37

- continue dividing the num by 2
- get the remainders (binary)
- until the result is 0

         res    remainder (from top to bottom = from right to left)
37 / 2 = 18     1
18 / 2 = 9      0
9  / 2 = 4      1
4  / 2 = 2      0
2  / 2 = 1      0
1  / 2 = 0      1


37 = 100101
padding with 2 0's: 00100101



Binary -> Denary

10011110 = 158


[1001] [1110]
 9      14
=> 9E



distance = float(input('distance from the vehicle in front: '))
speed = float(input('speed of the car'))

while distance < 20 or speed > 130:
    notify_user()
    <!-- print('helo helo') -->

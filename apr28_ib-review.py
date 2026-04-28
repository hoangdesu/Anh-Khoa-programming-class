# Construct an algorithm in pseudocode that repeats the following steps while the car is moving:
# y Input the value for the distance from the vehicle in front.
# y Input the value for the speed of the car.
# y Check the inputs and notify the user if either the distance from the car in front is less than 20 metres or if the speed of the car is more than 130 kilometres per hour.
# The algorithm will only terminate when the car stops moving.

car_is_moving = True

while car_is_moving:
    distance_from_front = float(input('Input the value for the distance from the vehicle in front: '))
    car_speed = float(input('Input the value for the speed of the car: '))
    
    if distance_from_front < 20 or car_speed > 130:
        # notify the user
        print('Slow down!')

    if car_speed == 0:
        car_is_moving = False


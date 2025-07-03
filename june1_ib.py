import sys

def costperkm(age) -> float:
    cost = 0.2
    if age < 5:
        return 0
    elif 5 <= age <= 15:
        return cost * 0.5
    elif age > 65:
        return cost * 0.7
    else:
        return cost

names = [
  'Oppox',
  'Thamesley',
  'Brinkley',
  'Kiko',
  'Endsley',
  'Kingsley',
  'Allapay',
  'Kronos',
  'Longlines',
  'Dovely',
];

distances = [0, 1.2, 1.0, 2.2, 1.3, 1.4, 0.9, 1.1, 1.2, 0.9];

def calcdistance(p1, p2) -> float:
    if p1 >= len(distances) - 1 or p2 >= len(distances):
        print('Wrong indexes')
        return
    
    if p1 >= p2:
        print('P1 must be smaller than P2')
        return    
    
    total_distance = 0
    for i in range(p1 + 1, p2 + 1):
        total_distance += distances[i]
        
    return total_distance


# print(calcdistance(3, 6))

station1 = input('Enter station 1: ')
station2 = input('Enter station 2: ')
age = int(input('Enter age: '))

# def get_station_index(station: str) -> int:
#     for i in range(len(names)):
#         if station == names[i]:
#             return i
#     return -1

# print(get_station_index(station1))
# print(get_station_index(station2))

p1 = -1
p2 = -1
for i in range(len(names)):
    if station1 == names[i]:
        p1 = i
    elif station2 == names[i]:
        p2 = i

# print(p1, p2)

# check if p1 and p2 have indexes
if p1 == - 1 or p2 == -1:
    print('One or more stations not found.')
    sys.exit()
    

# swap values if in wrong order
if p1 > p2:
    temp = p1
    p1 = p2
    p2 = temp

# print(calcdistance(p1, p2))
distance = calcdistance(p1, p2)
cost = costperkm(age)

total_cost = distance * cost
print(f'€ {total_cost:.2f}')


    
        
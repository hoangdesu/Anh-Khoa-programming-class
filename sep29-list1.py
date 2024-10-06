# List / Array

# collection of similar items

fav_cars = ['porsche', 'ferary', 'mercedes']

print(fav_cars)

# access using index
# index starts from 0

print(fav_cars[2] + ' is my favorite car')

# re-assign a single item
fav_cars[1] = 'ferrari'

# add item at the end of list
fav_cars.append('mclaren')


fav_cars.insert(2, 'lamborghini')

# remove by value -> ensure item is in list
fav_cars.remove('mclaren')

# remove by index (last item)
removed_car = fav_cars.pop()
print('removed car:', removed_car)

# remove by index (index)
removed_car = fav_cars.pop(0)
print('removed car:', removed_car)

found_index = fav_cars.index('mclaren')
print(found_index)

# mutable method
fav_cars.reverse()
fav_cars.sort()

print(fav_cars)

# name = 'Khoa'
# print(name.upper()) # immutable method
# print(name)


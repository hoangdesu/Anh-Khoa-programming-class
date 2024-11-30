import json

# JSON is similar to Python's dictionary

# 1. open the file to read
with open('./data/cars.json') as my_file_hehe:
    # 2. parse (convert) JSON to python dictionary
    car_list = json.load(my_file_hehe)
    # print(car_list)
    for i in range(len(car_list)):
        print(f'{i+1}. {car_list[i]}')

        
with open('./data/instruments.json') as f:
    instruments = json.load(f)
    # print(instruments['piano'])
    
    print('Instruments in my collection:')
    
    counter = 1
    total = 0
    for key in instruments.keys():
        print(f'{counter}. {key.title()}: ${instruments.get(key)}')
        counter += 1
        total += instruments.get(key)
    print(f'Total collection is worth: ${total}')
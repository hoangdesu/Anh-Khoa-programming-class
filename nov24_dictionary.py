# Data structure

# Dictionary:

# key-value pairs: entry / record

capitals = {
    'vietnam': 'ha noi',
    'japan': 'tokyo',
    'korea': 'seoul',
    'china': 'shanghai',
}

# Accessing a value from a key
print(f'my favorite city is {capitals.get('japan')}')

print(capitals['korea'])

# print(capitals['france']) # key error -> stop code execution
# print(capitals.get('france')) # None -> more safe


# Add more entries
capitals['uk'] = 'london'

# Overwrite value using the same key
capitals['china'] = 'guangzhou'
capitals.update({'china': 'beijing'}) # update a new dictionary


# Insert multiple entries
capitals.update({ 'usa': 'washing d.c', 'germany': 'berlin', 'italy': 'rome' })

# remove an entry
removed_capital = capitals.pop('usa')
print('removed:', removed_capital)

# capitals.clear()


print(capitals)


print('keys:', capitals.keys())

print('values:', capitals.values())

print('items:', capitals.items())

counter = 1
print(f'\nCountry\t\tCapital')
for key in capitals.keys():
    # print(key)
    # print(f'{counter}. {capitals.get(key).title()}')
    print(f'{key.title()}\t\t{capitals.get(key).title()}')
    counter += 1
    

print()

# nested dictionaries
khoa = {
    'name': {
        'first': 'Khoa',
        'last': 'Nguyen',
    },
    'hobbies': ['F1', 'football', 'guitar'],
    'class': {
        'computer_science': {
            'python': ['🧡', '😼', {
                'emoji': '🐍',
                'rating': 10,
                'is_happy': True
            }]
        }
    }
    
}

print(f"{khoa['name']['first']} {khoa['name']['last']} loves {khoa['hobbies'][2]}")
print(khoa['class']['computer_science']['python'][2]['emoji'])
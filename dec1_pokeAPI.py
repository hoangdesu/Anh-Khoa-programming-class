import requests

id = input('Enter a pokemon ID or name: ')
URL = f'https://pokeapi.co/api/v2/pokemon/{id}'

response = requests.get(URL)

if response.ok:
    data = response.json()
    
    name = data.get('name')
    id = data.get('id')
    height = data.get('height')
    weight = data.get('weight')
    moves = data.get('moves')
    sprite = data.get('sprites').get('other').get('official-artwork').get('front_default')
    
    print('Name:', name)
    print('ID:', id)
    print('Height:', height)
    print('Weight:', weight)
    print('Sprite:', sprite)
    
    # print(moves)
    
    # for move in moves:
    #     # name = move.get('move').get('name')
    #     name = move['move']['name']
    #     print('-', name)
    
        # Types:
        #     - grass
        #     - poison
        
    types = data.get('types')
    print('Types:')
    for i in range(len(types)):
        type = types[i].get('type').get('name')
        print('-', type)
else:
    print(response.text)
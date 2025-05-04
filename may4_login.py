# mo phong database
users = [
    {
        'username': 'anhkhoa',
        'password': 'gt3'
    },
    {
        'username': 'brian',
        'password': 'sf90'
    }
]


# controller code

username_input = input('Enter username: ')

found = False
for user in users:
    # print(user)
    # print('username:', user['username'])
    # print('password:', user.get('password'))

    if username_input == user['username']:
        found = True
        password_input = input(f'Enter password for "{username_input}": ')
        if password_input == user['password']:
            print(f'Login successfully! Welcome {user['username']}')
        else:
            print('Wrong password...')
    
if not found:
    print('Error. Username not found')



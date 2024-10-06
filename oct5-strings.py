# K - 0
# h - 1
# o - 2
# a - 3

name = 'Khoa'

print(name[2])

# Strings: list of characters
# name[2] = 'a' -> error
name = 'ToM nGuYen' # -> must reassign the whole string

print(name)

# String methods: immutable (modifies copied value)
print(name.upper())
print(name.lower())
print(name.capitalize())
print(name.title())

# String slicing
first_name = name[0:3]  # string[start:stop+1]
last_name = name[4:10]

print(first_name)
print(last_name)

print(name.index('n'))



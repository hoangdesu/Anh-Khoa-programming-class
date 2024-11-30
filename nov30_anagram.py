# is_anagram(s1, s2) -> bool

# is_anagram('tea', 'eat') -> true

# is_anagram('tea', 'ear') -> false

tea = {
    't': 1,
    'e': 1,
    'a': 1
}

eat = {
    'e': 1,
    'a': 1,
    't': 1
}

print(tea == eat) # -> True if all pairs match
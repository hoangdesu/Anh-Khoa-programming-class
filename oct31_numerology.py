def calculate_numerology(dob: str) -> int:
    numerology = 0
    for i in range(len(dob)):
        # print(i, dob[i], end=" ")
        if dob[i].isdigit():
            num = int(dob[i])
            numerology += num
            
    if numerology > 9:
        ones = numerology % 10
        tens = numerology % 100 // 10
        numerology = ones + tens
        
    return numerology
        
num = calculate_numerology('21/09/2008')
print(num)
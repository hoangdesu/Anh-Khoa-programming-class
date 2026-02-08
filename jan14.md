
moving = true

WHILE moving:
    INPUT distance
    INPUT speed

    IF distance < 20 OR speed > 130 THEN
        OUTPUT "ALARM!!" // notify the user
    ENDIF
    
    IF speed = 0 THEN
        moving = false
    ENDIF
ENDWHILE
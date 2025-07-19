# Simple pg program

# Import and initialize the pg library
import pygame as pg
pg.init()
import random

# from pygame.locals import K_UP

pg.display.set_caption("Need More Speed 🏎️")

# Set up the drawing window
SCREEN_WIDTH = 960
SCREEN_HEIGHT = 800
screen = pg.display.set_mode([SCREEN_WIDTH, SCREEN_HEIGHT])

car_sprite = pg.image.load('f1.png').convert_alpha()
# car = pg.transform.rotate(car_sprite, 180)
car = pg.transform.scale(car_sprite, (70, 150))


# Opponent cars
pagani_sprite = pg.image.load('pagani.png').convert_alpha()
pagani = pg.transform.scale(pagani_sprite, (70, 70*1.5))
pagani_coordinates = (400, -50)
pagani_speed = 2


coin_sprites = [
    pg.image.load('coin1.png').convert_alpha(), # [0]
    pg.image.load('coin2.png').convert_alpha(), # [1]
    pg.image.load('coin3.png').convert_alpha(),  # [2]
]
coin_index = 0
coin_x = random.randint(100, 860)
coin_y = 20
coin_speed = 3

color = (250, 255, 112)

# inital positions
x = 90
y = 350

circle_radius = 50
speed = 10

direction = 'right'

FPS = pg.time.Clock()

car_x = SCREEN_WIDTH/2 - 35
car_y = SCREEN_HEIGHT - 200

angle = 0

# Text and font:
score = 0

f1_font = pg.font.Font('Formula1-Wide.otf', 32)


# Mixer: for playing sound
pg.mixer.init()
coin_sound = pg.mixer.Sound('coin-sound.mp3')
coin_sound.set_volume(0.4) # 0 (0%) -> 1.0 (100%)

background_music = pg.mixer.Sound('Lil Jon ft. Eastside Boys - Get Low.mp3')
background_music.set_volume(0.5)
background_music.play(loops=-1) # loop the background music when done playing


is_sound_on = True
sound_on_icon = pg.image.load('sound-on.png')
sound_on_icon = pg.transform.scale(sound_on_icon, (40, 40))

sound_off_icon = pg.image.load('sound-off.png')
sound_off_icon = pg.transform.scale(sound_off_icon, (40, 40))


# Run until the user asks to quit
running = True
while running:

    # Did the user click the window close button?
    for event in pg.event.get():
        if event.type == pg.QUIT:
            running = False
            
        # capturing keyboard inputs
        # if event.type == pg.KEYUP:
            # if event.key == pg.K_UP:
            #     y -= speed
            # elif event.key == pg.K_DOWN:
            #     y += speed

            # if event.key == pg.K_p:
            #     running = False
                
                
        # clicking on the icon
        if event.type == pg.MOUSEBUTTONDOWN and event.button == 1:
            # event.pos is the mouse position.
            if sound_on_icon.get_rect().collidepoint(event.pos):
                # print('clicking on the sound icon')
                # toggle the boolean
                is_sound_on = not is_sound_on
        
        
    key_pressed = pg.key.get_pressed()
    
    # hover effect
    mouse_pos = pg.mouse.get_pos()
    # print(mouse_pos)
    if sound_on_icon.get_rect().collidepoint(mouse_pos):
        pg.mouse.set_cursor(*pg.cursors.diamond)
        # print('hovering...')
    else:
        pg.mouse.set_cursor(*pg.cursors.arrow)
        
    
    
        
    # if key_pressed[pg.K_UP]:
    #     if y >= circle_radius:
    #         y -= speed
    # elif key_pressed[pg.K_DOWN]:
    #     if y <= SCREEN_HEIGHT - circle_radius:
    #         y += speed
            

    if key_pressed[pg.K_LEFT]:
        if car_x >= 0:
            car_x -= speed
    elif key_pressed[pg.K_RIGHT]:
        if car_x <= SCREEN_WIDTH - car.get_width():
            car_x += speed

                

    # Fill the background with white
    screen.fill((255, 100, 100))
    # TODO: replace the background with an image
    
    # Draw the score after background
    score_text = f1_font.render(str(score), True, (252, 249, 71))
    screen.blit(score_text, (SCREEN_WIDTH - score_text.get_width() - 20, 20))
    
    coordinates = (x, y)
    
    
    # Draw sound icon
    if is_sound_on:
        screen.blit(sound_on_icon, (10, 10))
        background_music.set_volume(0.5)
    else:
        screen.blit(sound_off_icon, (10, 10))
        background_music.set_volume(0)
    

    # Draw a solid blue circle in the center
    # pg.draw.circle(screen, color, coordinates, circle_radius)
    
    car_coordinates = (car_x, car_y)
    screen.blit(car, car_coordinates)
    screen.blit(pagani, pagani_coordinates)

    current_coint_sprite = coin_sprites[coin_index]
    screen.blit(current_coint_sprite, (coin_x, coin_y))
    
    # print('current coint rect():', current_coint_sprite.get_rect())
    # print(current_coint_sprite.get_width(), current_coint_sprite.get_height())
    # print(current_coint_sprite.get_bounding_rect().topleft)

    # if (
    #     rect1.x < rect2.x + rect2.w &&
    #     rect1.x + rect1.w > rect2.x &&
    #     rect1.y < rect2.y + rect2.h &&
    #     rect1.y + rect1.h > rect2.y
    # ) {
    #     // Collision detected!
    #     this.color("green");
    # } else {
    #     // No collision
    #     this.color("blue");
    # }
        
    # TODO: play sound effects
    
    
    if (pg.time.get_ticks() % 40 == 0 or pg.time.get_ticks() % 40 == 1):
        if coin_index < len(coin_sprites) - 1:
            coin_index += 1
        else:
            coin_index = 0
    
    if coin_y > SCREEN_HEIGHT:
        coin_y = -20
        coin_x = random.randint(50, SCREEN_WIDTH - current_coint_sprite.get_width() - 50)

    else:
        coin_y += coin_speed
        

    if pagani_coordinates[1] > SCREEN_HEIGHT:
        random_x = random.randint(50, SCREEN_WIDTH - pagani.get_width())
        pagani_coordinates = (random_x, -100)
    else:
        pagani_coordinates = (pagani_coordinates[0], pagani_coordinates[1] + pagani_speed)
        
    
    # AABB: Collision detection between the coin and the car
    car_y_hitbox_offset = 50
    if (coin_x < car_x + car.get_width() and
        coin_x + current_coint_sprite.get_width() > car_x and
        coin_y < car_y + car.get_height() and
        coin_y + current_coint_sprite.get_height() > car_y + car_y_hitbox_offset):
        
        # reset the coin position
        coin_y = -20
        coin_x = random.randint(50, SCREEN_WIDTH - current_coint_sprite.get_width() - 50)
        
        # give user 1 point
        score += 1

        # play sound effect
        coin_sound.play()
        
        # increase the speed and difficulty
        # coin_speed += 1
        # print(coin_speed)
        
        
    # Draw boxes around sprites to detect collision
    # pg.draw.rect(screen, (0,255,0), (coin_x, coin_y, current_coint_sprite.get_width(), current_coint_sprite.get_height()), 2)
    # pg.draw.rect(screen, (255,0,0), (car_x, car_y + car_y_hitbox_offset, car.get_width(), car.get_height() - car_y_hitbox_offset), 2)

        
    # print('pygame.time.get_ticks:', pg.time.get_ticks())

    # Flip the display
    pg.display.flip()
    FPS.tick(120)
    
    # move the circle
    # if direction == 'right':
    #     x += speed
    #     if x >= (SCREEN_WIDTH - circle_radius):
    #         direction = 'left'
            
    # elif direction == 'left':
    #     x -= speed
    #     if x <= circle_radius:
    #         direction = 'right'
        
    

# Done! Time to quit.
pg.quit()


# Refactor: cleaning up and re-structure the code
# Axis-aligned bounding box (AABB): Collision detection algorithm in 2D environment
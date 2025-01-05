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

coin_sprites = [
    pg.image.load('coin1.png').convert_alpha(), # [0]
    pg.image.load('coin2.png').convert_alpha(), # [1]
    pg.image.load('coin3.png').convert_alpha(),  # [2]
]
coin_index = 0
coin_x = random.randint(100, 860)
coin_y = 20

color = (250, 255, 112)

# inital positions
x = 90
y = 350

circle_radius = 50
speed = 5

direction = 'right'

FPS = pg.time.Clock()

car_x = SCREEN_WIDTH/2 - 35
car_y = SCREEN_HEIGHT - 200

angle = 0

# Run until the user asks to quit
running = True
while running:

    # Did the user click the window close button?
    for event in pg.event.get():
        if event.type == pg.QUIT:
            running = False
            
        # capturing keyboard inputs
        # if event.type == pg.KEYUP:
        #     if event.key == pg.K_UP:
        #         y -= speed
        #     elif event.key == pg.K_DOWN:
        #         y += speed

        
        
    key_pressed = pg.key.get_pressed()
        
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
    
    coordinates = (x, y)

    # Draw a solid blue circle in the center
    pg.draw.circle(screen, color, coordinates, circle_radius)
    
    car_coordinates = (car_x, car_y)
    screen.blit(car, car_coordinates)

    
    screen.blit(coin_sprites[coin_index], (coin_x, coin_y))
    if (pg.time.get_ticks() % 40 == 0 or pg.time.get_ticks() % 40 == 1):
        if coin_index < len(coin_sprites) - 1:
            coin_index += 1
        else:
            coin_index = 0
    
    if coin_y > SCREEN_HEIGHT:
        coin_y = 0
        coin_x = random.randint(100, 860)
    else:
        coin_y += 3
        
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
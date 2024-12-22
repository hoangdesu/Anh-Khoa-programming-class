# Simple pg program

# Import and initialize the pg library
import pygame as pg
pg.init()

# from pygame.locals import K_UP



# Set up the drawing window
SCREEN_WIDTH = 960
SCREEN_HEIGHT = 800
screen = pg.display.set_mode([SCREEN_WIDTH, SCREEN_HEIGHT])

car = pg.image.load('f1.png').convert_alpha()

color = (250, 255, 112)

# inital positions
x = 90
y = 350

circle_radius = 50
speed = 5

direction = 'right'

FPS = pg.time.Clock()

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
        
    if key_pressed[pg.K_UP]:
        if y >= circle_radius:
            y -= speed
    elif key_pressed[pg.K_DOWN]:
        if y <= SCREEN_HEIGHT - circle_radius:
            y += speed
            
                
            

    # Fill the background with white
    screen.fill((255, 100, 100))
    
    coordinates = (x, y)

    # Draw a solid blue circle in the center
    pg.draw.circle(screen, color, coordinates, circle_radius)
    
    screen.blit(car, (200, 200))

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
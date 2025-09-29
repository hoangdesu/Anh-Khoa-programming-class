CREATE TABLE users (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL
);


INSERT INTO users
VALUES ("anh khoa", "gta5");


INSERT INTO users (password, username)
VALUES ("sf90", "brian");

SELECT * FROM users;



CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    image VARCHAR(50) NOT NULL, 
    description VARCHAR(50) NOT NULL,
    rating REAL DEFAULT 0.0
);

INSERT INTO restaurants (name, address, phone_number, image, description)
VALUES ('Katinat Xuan Thuy', '50 Xuân Thủy, Thảo Điền, Thủ Đức, Hồ Chí Minh', '0846522793', 'https://lh3.googleusercontent.com/p/AF1QipOT2KTAuMsZzyPhWO1E3f8r2YBtD9H_3ECws22s=s1360-w1360-h1020-rw', 'cafe song ao');

INSERT INTO restaurants (name, address, phone_number, image, description)
VALUES ('Ciao Ciao Gelato cafe', '80C Xuân Thủy, Thảo Điền, Thủ Đức, Hồ Chí Minh', '0938657690', 'https://lh3.googleusercontent.com/p/AF1QipMz7WG5Dn4J7DMiqkqJ81j_seuYkGpsKJMdX-ad=s1360-w1360-h1020-rw', 'quan kem ngon nhat Quan 2');


PRAGMA foreign_keys = ON;
CREATE TABLE favorites (
    username VARCHAR(50) REFERENCES users(username),
    restaurant_id INTEGER REFERENCES restaurants(id),
    UNIQUE(username, restaurant_id)
);

INSERT INTO favorites
VALUES ('anhkhoa', 1);

INSERT INTO favorites
VALUES ('totowolf', 2);

DROP TABLE IF EXISTS favorites;

INSERT INTO favorites
VALUES 
    ('brian', 1),
    ('brian', 2)
;

SELECT name FROM restaurants
JOIN favorites ON restaurants.id = favorites.restaurant_id
WHERE favorites.username = 'anhkhoa';



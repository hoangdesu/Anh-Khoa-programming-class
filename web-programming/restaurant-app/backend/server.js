const express = require('express');
const fs = require('fs');
const cors = require('cors');

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./data/restaurant-app.db');

// Switch over to using built-in sqlite3 from node

const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('./data/restaurant-app.db');

const app = express();
const port = 3000;

// Middleware: plugins/extensions
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/restaurants', (req, res) => {
  // const restaurants = ['a', 'b', 'c', 'd'];

  // no longer using json file
  // const file = fs.readFileSync('mock-data.json');
  // const restaurants = JSON.parse(file);

  // using actual data from db
  const query = `
    SELECT id, name, address, image
    FROM restaurants
  `;

  const getAllRestaurants = db.prepare(query);

  const restaurants = getAllRestaurants.all();

  res.json(restaurants);
});

// POST request: to protect sentitive data
app.post('/login', (req, res) => {
  // console.log(req);

  // console.log('>> form:', req.body);

  // const form = JSON.parse(req.body);

  const { usrname, psword } = req.body;

  console.log(usrname, psword);

  // Data validation
  if (!usrname) return res.send('Missing username');
  else if (!psword) return res.send('Missing password');

  // console.log(form.usrname, form.psword);

  // Switch over to using REAL database instead of mock database
  // read data from a user database
  // const file = fs.readFileSync('mock-user-data.json');
  // const users = JSON.parse(file);

  // // check if the user is already in the database
  // let found = false;
  // for (let user of users) {
  //   if (form.usrname === user.username) {
  //     console.log(`user ${form.usrname} exists`);
  //     found = true;

  //     if (form.psword === user.password) {
  //       // return res.send(`Login successfully. Welcome ${form.usrname}!`);
  //       return res.redirect('http://127.0.0.1:5500/home.html');
  //     } else {
  //       return res.send(`Login failed. Wrong password :(`);
  //     }
  //   }
  // }

  // if (!found) {
  //   console.log(`user ${form.usrname} does NOT exist`);
  //   return res.send(`user ${form.usrname} does NOT exist`);
  // }

  // sqlite3
  // db.serialize(() => {
  //   // const query = `SELECT * FROM users WHERE username = ${form.usrname}`;

  //   // db.each(query, (err, row) => {
  //   //   console.log('Found:', row.username + ': ' + row.password);
  //   // });

  //   db.get(
  //     'SELECT * FROM users WHERE username = ?',
  //     form.usrname,
  //     (err, user) => {
  //       if (err) {
  //         console.error(err.message);
  //         return res.send('Login failed. Server error');
  //       }

  //       // console.log('Retrieved row:', user);

  //       if (!user) {
  //         return res.send(`user ${form.usrname} does NOT exist`);
  //       }

  //       if (form.psword === user.password) {
  //         console.log(`Login successfully. Welcome ${form.usrname}!`);

  //         return res.redirect('http://127.0.0.1:5501/home.html');
  //       }
  //     }
  //   );
  // });

  const queryStr = 'SELECT * FROM users WHERE username = ?';
  const getUserByUsername = db.prepare(queryStr);

  const user = getUserByUsername.get(usrname);

  if (!user) {
    return res.send(`user ${usrname} does NOT exist`);
  }

  if (user.password === psword) {
    console.log(`Login successfully. Welcome ${usrname}!`);
    // return res.redirect('http://127.0.0.1:5501/home.html');
    return res.json({ username: usrname, loggedIn: true });
  } else {
    console.log(`Wrong password. Get out!`);
    return res.redirect('http://127.0.0.1:5501/sign-in.html');
  }

  // console.log('/login: ', user);
});

// Endpoint to get detail for a single restaurant
// e.g. /restaurants/1?username=anhkhoa => id: path param, username: query string
app.get('/restaurants/:id', (req, res) => {
  const { id } = req.params; // :id

  const restaurantQuery = 'SELECT * FROM restaurants WHERE id = ?';
  const getRestaurant = db.prepare(restaurantQuery);
  const results = getRestaurant.all(id);

  const { username } = req.query;
  if (!username) return res.json(results[0]);

  const favoriteQuery = `
    SELECT EXISTS (
      SELECT restaurant_id FROM favorites
      WHERE username = ? AND restaurant_id = ?
    ) AS isFavorite`;

  const getIsFavorite = db.prepare(favoriteQuery);
  const isFavoriteRow = getIsFavorite.get(username, id);

  if (results.length === 1) {
    const restaurant = {
      ...results[0],
      isFavorite: isFavoriteRow?.isFavorite ? true : false,
    };

    return res.json(restaurant);
  } else {
    return res.sendStatus(404);
  }
});

app.post('/sign-up', (req, res) => {
  const form = req.body;

  // console.log(form);

  // const database = 'mock-user-data.json';

  // read data from a user database
  // const file = fs.readFileSync(database);
  // const users = JSON.parse(file);

  // // data processing
  // const newUser = {
  //   username: form.uname,
  //   password: form.password,
  //   email: form.email,
  // };

  // // add new user to the list
  // users.push(newUser);

  // console.log('new database: ', users);

  // // update the new list back to the database (file)
  // fs.writeFileSync(database, JSON.stringify(users, null, 4));

  // res.redirect('http://127.0.0.1:5500/sign-in.html');

  // db.serialize(() => {
  //   const stmt = db.prepare(
  //     'INSERT INTO users (username, password) VALUES (?, ?)'
  //   );

  //   stmt.run(form.uname, form.password, function (err) {
  //     if (err) {
  //       console.error(err.message);
  //     } else {
  //       console.log(`A new user has beed added with rowid ${this.lastID}`);
  //     }
  //   });
  //   stmt.finalize();
  //   return res.redirect('http://127.0.0.1:5501/sign-in.html');
  // });

  // check if user not already exists
  const queryStr = 'SELECT * FROM users WHERE username = ?';
  const getUserByUsername = db.prepare(queryStr);

  const user = getUserByUsername.get(form.uname);

  if (user) {
    return res.send('Error. User already exists');
  }

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  const createUser = db.prepare(query);
  createUser.run(form.uname, form.password);

  return res.redirect('http://127.0.0.1:5501/sign-in.html');
});

// Endpoint:
// GET /favorites
app.get('/favorites', async (req, res) => {
  // const file = fs.readFileSync('mock-favorites.json');
  // const favorites = JSON.parse(file);

  const { username } = req.query;
  // console.log(req.query)

  // console.log('username:', username);

  const query = `
    SELECT id, name, address, phone_number, image, description, rating
    FROM favorites
    JOIN restaurants ON restaurants.id = favorites.restaurant_id
    WHERE username = ?`;

  const getFavorites = db.prepare(query);

  const favorites = getFavorites.all(username);

  console.log(favorites);

  if (!favorites) {
    return res.send(`user ${username} does NOT exist`);
  }

  // if (user.password === psword) {
  //   console.log(`Login successfully. Welcome ${usrname}!`);
  //   // return res.redirect('http://127.0.0.1:5501/home.html');
  //   return res.json({ "username": usrname, "loggedIn": true });

  // } else {
  //   console.log(`Wrong password. Get out!`);
  //   return res.redirect('http://127.0.0.1:5501/sign-in.html');
  // }

  res.json(favorites);
});

// PUT /favorites
app.put('/favorites', (req, res) => {
  console.log('received a PUT request at /favorites');

  const { restaurantId, username } = req.body;

  console.log('restaurant:', restaurantId, username);

  // No longer using a json fie to store temp data
  // const file = fs.readFileSync('mock-favorites.json');
  // const favorites = JSON.parse(file);

  // favorites.push(restaurant);

  // fs.writeFileSync('mock-favorites.json', JSON.stringify(favorites, null, 4));

  const favoriteQuery = `
    SELECT EXISTS (
      SELECT restaurant_id FROM favorites
      WHERE username = ? AND restaurant_id = ?
    ) AS isFavorite`;

  const getIsFavorite = db.prepare(favoriteQuery);
  const isFavoriteRow = getIsFavorite.get(username, restaurantId);
  const isFavorite = isFavoriteRow?.isFavorite ? true : false;

  // if not yet inside favorite, add it to the list
  if (!isFavorite) {
    const query = `
      INSERT INTO favorites (restaurant_id, username)
      VALUES (?, ?);
    `;

    const addToFavorite = db.prepare(query);
    addToFavorite.run(restaurantId, username);

    // no data needed to be sent back
    return res.status(201).send(true); // 201 = OK
  } 

  // if restaurant is already in fav, remove it
  else {
    const query = `
      DELETE FROM favorites
      WHERE restaurant_id = ? AND username = ?`;

    const removeFromFavorite = db.prepare(query);
    removeFromFavorite.run(restaurantId, username);

    // no data needed to be sent back
    return res.status(200).send(false); // 200 = OK
  }
});


app.post('/reservations', (req, res) => {
  console.log('received a new reservation');
  
  console.log(req.body);
  
  res.send('received a new reservation');
});


// REVIEWS
app.get('/reviews/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;

  const reviewsQuery = 'SELECT * FROM reviews WHERE restaurant_id = ?';
  const getReviews = db.prepare(reviewsQuery);
  const reviews = getReviews.all(restaurantId);

  return res.json(reviews);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

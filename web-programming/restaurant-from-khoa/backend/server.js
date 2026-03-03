const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000
const cors = require('cors')


const { DatabaseSync } = require('node:sqlite')
const { log } = require('console')
const db = new DatabaseSync('./database/restaurant.db')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'));


app.get('/restaurants', (req, res) => {

  const queryStr = 'SELECT * FROM new_restaurants';
  const query = db.prepare(queryStr);

  const restaurants = query.all();

  console.log(restaurants);

  res.json(restaurants)
});

app.post('/filtered-restaurants', (req, res) => {
  const { price_range, category } = req.body;

  console.log('filtering...', price_range, category);

  let restaurants = [];
  if (price_range && category) {
    queryStr = 'SELECT * FROM new_restaurants WHERE price_range = ? AND category = ?';
    const query = db.prepare(queryStr);
    restaurants = query.all(price_range, category);
  } else if (price_range) {
    queryStr = 'SELECT * FROM new_restaurants WHERE price_range = ?';
    const query = db.prepare(queryStr);
    restaurants = query.all(price_range);
  } else if (category) {
    queryStr = 'SELECT * FROM new_restaurants WHERE category = ?';
    const query = db.prepare(queryStr);
    restaurants = query.all(category);
  } else {
    const queryStr = 'SELECT * FROM new_restaurants';
    const query = db.prepare(queryStr);
    restaurants = query.all();
  }

  // let queryStr = 'SELECT * FROM new_restaurants WHERE price_range = ?';
  // const query = db.prepare(queryStr);

  console.log(restaurants);

  res.json(restaurants);
});

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
      isFavorite: isFavoriteRow?.isFavorite ? true : false
    };

    return res.json(restaurant);
  } else {
    return res.sendStatus(404);
  }
});


app.get('/reviews/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;

  const query = 'SELECT * FROM reviews WHERE restaurant_id = ?';
  const getReviews = db.prepare(query);
  const reviews = getReviews.all(restaurantId);

  return res.json(reviews);

});


app.post('/reviews/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;

  console.log('review...', req.body);
  const { username, content, rating } = req.body;

  const query = `
    INSERT INTO reviews (username, restaurant_id, content, ratings)
    VALUES (?, ?, ?, ?)
  `;
  const createReview = db.prepare(query);
  try {
    createReview.run(username, restaurantId, content, rating);
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});




app.post('/login', (req, res) => {

  const { usrname, psword } = req.body;

  const queryStr = 'SELECT * FROM users WHERE username = ?';
  const getUserByUsername = db.prepare(queryStr);

  const user = getUserByUsername.get(usrname)

  if (!user)
    return res.status(401).json({ message: "User not found. Please enter a correct username" });


  if (user.password === psword) {
    return res.json({ "username": usrname, "loggedIn": true })

  } else {
    console.log(`wrong password, get out`);
    return res.status(401).json({ message: "Password is incorrect. Please enter a correct password" });

  }
})

app.post('/sign-up', (req, res) => {

  const form = req.body;

  const queryStr = 'SELECT * FROM users WHERE username = ?';
  const getUserByUsername = db.prepare(queryStr);

  const user = getUserByUsername.get(form.uname)

  if (user) {
    return res.status(401).json({ message: "User already exist. Please enter another username" });

  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const createUser = db.prepare(query);
  createUser.run(form.uname, form.password)

  return res.redirect('http://127.0.0.1:5500/signin.html')
})





app.get('/favorites', (req, res) => {

  const { username } = req.query;

  const query = `
    SELECT id, name, address, rating, image FROM restaurants
    JOIN favorites ON restaurants.id = favorites.restaurant_id
    WHERE username = ?`;

  const getFavorites = db.prepare(query);

  const favorites = getFavorites.all(username);

  console.log(favorites);



  res.json(favorites)


})




app.put('/favorites', (req, res) => {

  const { username, restaurant_id } = req.body;

  const favoriteQuery = `
    SELECT EXISTS (
      SELECT restaurant_id FROM favorites
      WHERE username = ? AND restaurant_id = ?
    ) AS isFavorite`;

  const getIsFavorite = db.prepare(favoriteQuery);
  const isFavoriteRow = getIsFavorite.get(username, restaurant_id);
  const isFavorite = isFavoriteRow?.isFavorite ? true : false;

  if (!isFavorite) {
    const query = 'INSERT INTO favorites (username, restaurant_id) VALUES (?, ?)';

    const addFavorite = db.prepare(query);
    addFavorite.run(username, restaurant_id)

    return res.status(201).send(true);
  }

  else {
    const query = 'DELETE FROM favorites WHERE username = ? AND restaurant_id = ?';

    const removeFavorite = db.prepare(query);
    removeFavorite.run(username, restaurant_id)

    return res.status(200).send(false);
  }
})


app.post('/reservations', (req, res) => {
  console.log('received a new reservation');

  console.log(req.body);

  const { restaurant_id, username, date, time, guests } = req.body;

  const query = 'INSERT INTO reservations (username, restaurant_id, date, time, guests) VALUES (?, ?, ?, ?, ?)';
  const addReservation = db.prepare(query);
  addReservation.run(username, restaurant_id, date, time, guests)


  res.status(201)
  return res.status(201).json({ message: "Reservation has been succesfully created! Enjoy!" });
  // res.send('received a new reservation');



});



app.get('/reservations', (req, res) => {

  const { username } = req.query;

  const query = `
    SELECT 
      restaurants.name,
      restaurants.address,
      restaurants.image,
      restaurants.phone_number,
      reservations.date,
      reservations.time,
      reservations.guests
    FROM reservations
    JOIN restaurants ON restaurants.id = reservations.restaurant_id
    WHERE reservations.username = ?;
  `;

  const getBooking = db.prepare(query);
  const booking = getBooking.all(username);

  console.log(booking);
  res.json(booking);

})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

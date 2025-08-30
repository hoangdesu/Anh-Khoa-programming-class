const express = require('express')
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;


// Middleware: plugins/extensions
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Root route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/restaurants', (req, res) => {
    // const restaurants = ['a', 'b', 'c', 'd'];

    const file = fs.readFileSync('mock-data.json');
    const restaurants = JSON.parse(file);

    res.send(restaurants);
});


// POST request: to protect sentitive data
app.post('/login', (req, res) => {
  // console.log(req);
  
  // console.log('form:', req.body);

  const form = req.body;

  // Data validation
  if (!form.usrname)
    return res.send('Missing username');
  else if (!form.psword)
    return res.send('Missing password');

  // read data from a user database
  const file = fs.readFileSync('mock-user-data.json');
  const users = JSON.parse(file);

  // check if the user is already in the database
  let found = false;
  for (let user of users) {
    if (form.usrname === user.username) {
      console.log(`user ${form.usrname} exists`);
      found = true;
      
      if (form.psword === user.password) {
        // return res.send(`Login successfully. Welcome ${form.usrname}!`);
        return res.redirect('http://127.0.0.1:5500/home.html');
      } else {
        return res.send(`Login failed. Wrong password :(`);
      }
    }
  }

  if (!found) {
    console.log(`user ${form.usrname} does NOT exist`);
    return res.send(`user ${form.usrname} does NOT exist`);
  }

});


app.post('/sign-up', (req, res) => {
    const form = req.body;

    // console.log(form);

    const database = 'mock-user-data.json';

    // read data from a user database
    const file = fs.readFileSync(database);
    const users = JSON.parse(file);

    // data processing
    const newUser = {
      username: form.uname,
      password: form.password,
      email: form.email
    }

    // add new user to the list
    users.push(newUser);

    console.log('new database: ', users);

    // update the new list back to the database (file)
    fs.writeFileSync(database, JSON.stringify(users, null, 4));
    
    res.redirect('http://127.0.0.1:5500/sign-in.html');
    
});


// Endpoint:
// GET /favorites
app.get('/favorites', (req, res) => {
    const file = fs.readFileSync('mock-favorites.json');
    const favorites = JSON.parse(file);

    res.json(favorites);
});


// PUT /favorites
app.put('/favorites', (req, res) => {
    console.log('received a PUT request at /favorites');

    const restaurant = req.body;

    console.log('restaurant:', restaurant);

    const file = fs.readFileSync('mock-favorites.json');
    const favorites = JSON.parse(file);

    favorites.push(restaurant);
  
    fs.writeFileSync('mock-favorites.json', JSON.stringify(favorites, null, 4));

    // no data needed to be sent back
    return res.sendStatus(200); // 200 = OK
});


// DELETE /favorites



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

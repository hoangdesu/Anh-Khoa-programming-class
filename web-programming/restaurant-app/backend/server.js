const express = require('express')
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;


// Middleware: plugins/extensions
app.use(cors());
app.use(express.urlencoded({ extended: true }));



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
        return res.send(`Login successfully. Welcome ${form.usrname}!`);
      } else {
        return res.send(`Login failed. Wrong password :(`);
      }
    }
  }

  if (!found) {
    console.log(`user ${form.usrname} does NOT exist`);
    res.send(`user ${form.usrname} does NOT exist`);
  }
   

  res.send("Received a request to login");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

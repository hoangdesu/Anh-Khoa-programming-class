Get user

Before:

```js
app.post('/login', (req, res) => {
  // console.log(req);

  // console.log('form:', req.body);

  const form = req.body;

  // Data validation
  if (!form.usrname) return res.send('Missing username');
  else if (!form.psword) return res.send('Missing password');

  // Switch over to using REAL database instead of mock database
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
});
```

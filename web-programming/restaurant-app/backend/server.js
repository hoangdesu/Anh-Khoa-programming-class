const express = require('express')
const fs = require('fs');
const cors = require('cors')

const app = express();

app.use(cors());


const port = 3000


// Root route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/restaurants', (req, res) => {
    // const restaurants = ['a', 'b', 'c', 'd'];

    const file = fs.readFileSync('mock-data.json');
    const restaurants = JSON.parse(file);

    res.send([restaurants[0], restaurants[1]]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

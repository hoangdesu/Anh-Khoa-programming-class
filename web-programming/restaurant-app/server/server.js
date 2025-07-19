import express from 'express';

const app = express();

const PORT = 7483;

app.get('/', (req, res) => {
    res.send('Hello Khoa!');
});

app.get('/menu', (req, res) => {
    const menu = ['com tam', 'pho', 'bun bo'];
    res.json(menu);
});

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
});

app.listen(PORT);

const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/home', (req, res) => {
    res.send('Daffodil International University');
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
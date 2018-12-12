const express = require('express');
const bodyParser = require('body-parser');

const category = require('./routes/categories');
const books = require('./routes/books');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/category', category);
app.use('/books', books);
app.use('/users', users);


app.listen(3000);

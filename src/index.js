const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');

// DB init
db.connect();

// Route init
route(app);

// Static dir
app.use(express.static(path.join(__dirname, 'public')));

// Morgan
app.use(morgan('combined'));

// Parse
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// View engines
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port);

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');

const methodOverride = require('method-override');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// DB init
db.connect();

// Static dir
app.use(express.static(path.join(__dirname, 'public')));

// Morgan
app.use(morgan('combined'));

// Parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use(SortMiddleware);

// Route init
route(app);

// View engines
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: require('./config/view'),
  }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port);

const newsRouter = require('./news');
const sitesRouter = require('./sites');
const courseRouter = require('./course');
const personalRouter = require('./personal');

function route(app) {
  app.use('/', sitesRouter);

  app.use('/news', newsRouter);

  app.use('/course', courseRouter);

  app.use('/personal', personalRouter);
}

module.exports = route;

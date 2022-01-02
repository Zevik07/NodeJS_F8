const newsRouter = require('./news');
const sitesRouter = require('./sites');
const courseRouter = require('./course');

function route(app) {
  app.use('/', sitesRouter);

  app.use('/news', newsRouter);

  app.use('/course', courseRouter);
}

module.exports = route;

module.exports = (req, res, next) => {
  res.locals._sort = {
    enabled: false,
    type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')) {
    res.locals._sort.enabled = true;
    res.locals._sort.type = req.query.type;
    res.locals._sort.col = req.query.col;

    if (req.query.type == 'default') req.query.type = '';
  }

  next();
};

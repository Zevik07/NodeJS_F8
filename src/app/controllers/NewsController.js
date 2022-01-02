class NewsController {
  index(req, res, next) {
    res.render('news');
  }

  // [GET] /news/:slugslugparam
  show(req, res, next) {
    res.send(req.params);
  }
}

module.exports = new NewsController();

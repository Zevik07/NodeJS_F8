class NewsController {
  // [GET] /news/:slugslugparam
  index(req, res, next) {
    res.render('news');
  }

  show(req, res, next) {
    res.send(req.params);
  }
}

module.exports = new NewsController();

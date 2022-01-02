const CourseModel = require('../models/Course');

class SitesController {
  // [GET]
  index(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => {
        res.render('home', {
          courses,
        });
      })
      .catch(next); // next(err)

    // res.render('home');
  }

  search(req, res, next) {
    res.render('search');
  }
}

module.exports = new SitesController();

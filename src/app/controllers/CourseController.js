const CourseModel = require('../models/Course');

class CourseController {
  index(req, res, next) {}

  // [GET] /course/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        if (course) res.render('course', { course });
      })
      .catch(next); // next(err)
  }
}

module.exports = new CourseController();

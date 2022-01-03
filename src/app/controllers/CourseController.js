const CourseModel = require('../models/Course');

class CourseController {
  index(req, res, next) {}

  // [GET] /course/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        if (course) res.render('course/course', { course });
      })
      .catch(next); // next(err)
  }

  create(req, res, next) {
    res.render('course/create');
  }

  // [POST] /course/:slug
  store(req, res, next) {
    const data = req.body;
    const newCourse = new CourseModel(data);
    newCourse
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = new CourseController();

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

  // [GET] /course/:id/edit
  edit(req, res, next) {
    CourseModel.findOne({ _id: req.params.id })
      .lean()
      .then((course) => {
        if (course) res.render('course/edit', { course });
      })
      .catch(next); // next(err)
  }

  // [PUT] /course/:id
  update(req, res, next) {
    CourseModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((course) => {
        if (course) res.redirect(`/course/${req.params.id}/edit`);
      })
      .catch(next); // next(err)
  }
}

module.exports = new CourseController();

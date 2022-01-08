const CourseModel = require('../models/Course');

class PersonalController {
  // [GET] /personal/stored-courses
  storedCourses(req, res, next) {
    let courses = CourseModel.find({});

    if (req.query.hasOwnProperty('_sort'))
      courses = courses.sort({
        [req.query.col]: req.query.type,
      });

    Promise.all([CourseModel.countDocuments().lean(), courses.lean()])
      .then(([courseNum, courses]) => {
        res.render('personal/stored-courses', {
          courseNum,
          courses,
        });
      })
      .catch(next);
  }

  // [GET] /personal/stored-courses/deleted
  storedCoursesDeleted(req, res, next) {
    Promise.all([
      CourseModel.countDocumentsDeleted().lean(),
      CourseModel.findDeleted({}).lean(),
    ])
      .then(([courseNum, courses]) => {
        res.render('personal/stored-courses-deleted', {
          courseNum,
          courses,
        });
      })
      .catch(next);
  }
}

module.exports = new PersonalController();

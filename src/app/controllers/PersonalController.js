const CourseModel = require('../models/Course');

class PersonalController {
  // [GET] /personal/stored-courses
  storedCourses(req, res, next) {
    Promise.all([
      CourseModel.countDocuments().lean(),
      CourseModel.find({}).lean(),
    ])
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

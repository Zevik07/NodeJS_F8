const CourseModel = require('../models/Course');

class PersonalController {
  // [GET] /personal/stored-courses
  storedCourses(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => {
        res.render('personal/stored-courses', {
          courses,
        });
      });
  }

  // [GET] /personal/stored-courses/deleted
  storedCoursesDeleted(req, res, next) {
    CourseModel.findDeleted({})
      .lean()
      .then((courses) => {
        res.render('personal/stored-courses-deleted', {
          courses,
        });
      });
  }
}

module.exports = new PersonalController();

const CourseModel = require('../models/Course');

class PersonalController {
  // [GET] /personal/courses
  storedCourses(req, res, next) {
    CourseModel.find({})
      .lean()
      .then((courses) => {
        res.render('personal/stored-courses', {
          courses,
        });
      });
  }
}

module.exports = new PersonalController();

const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/PersonalController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  console.log('----personal controller----');
  next();
});

router.get('/stored-courses', controller.storedCourses);

module.exports = router;

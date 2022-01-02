const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/CourseController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  console.log('----courses controller----');
  next();
});

router.get('/:slug', controller.show);

module.exports = router;

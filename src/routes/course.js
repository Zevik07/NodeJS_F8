const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/CourseController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  console.log('----courses controller----');
  next();
});

router.get('/create', controller.create);

router.post('/store', controller.store);

router.get('/edit/:id', controller.edit);

router.put('/:id', controller.update);

router.patch('/:id', controller.restore);

router.delete('/:id', controller.destroy);

router.delete('/permanently-delete/:id', controller.permanentlyDestroy);

router.get('/:slug', controller.show);

module.exports = router;

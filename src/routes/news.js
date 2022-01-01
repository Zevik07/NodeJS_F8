const express = require('express')
const router = express.Router()
const controller = require('../app/controllers/NewsController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    console.log('----news controller----');
    next()
})

router.get('/', controller.index);

router.get('/:slug', controller.show);

module.exports = router
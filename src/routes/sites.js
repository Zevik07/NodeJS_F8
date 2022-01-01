const express = require('express')
const router = express.Router()
const controller = require('../app/controllers/SitesController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    console.log('----sites controller----');
    next()
})
router.get('/', controller.index);

router.get('/search', controller.search);


module.exports = router
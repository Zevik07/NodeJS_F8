
class SitesController {

    // [GET]
    index(req, res,next) {
        res.render('home');
    }
    
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new SitesController
// const Course = require('../models/Course');
// const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class ContactController {

    // [GET] /contact
    index(req, res, next) {
        res.render('user/contact', {
            title: "Liên hệ |",
            student: req.session.username,
        });
    }
    
}

module.exports = new ContactController;
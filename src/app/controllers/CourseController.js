const Course = require('../models/Course');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses
    index(req, res, next) {
        Course.find({})
            .then(courses =>
                res.render('user/courses/courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /courses/:slug
    detail(req, res, next) {
        Promise.all([Course.findOne({ slug: req.params.slug }), Course.find({})])
            .then(([course, courses]) =>
                res.render('user/courses/detail', {
                    course: mongooseToObject(course),
                    courses: multipleMongooseToObject(courses),
                    active: req.params.slug,
                }),
            )
            .catch(next);
    }
}

module.exports = new CourseController;
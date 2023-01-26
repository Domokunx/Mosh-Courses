const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
];

// Courses
router.get('/', (req, res) => {
    res.render('courses');
});

router.post('/', (req, res) => {
    // Validate course
    const { error } = validateCourse(req.body)

    // If invalid, return 400 Bad Request
    if (error) return res.status(400).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req, res) => {
    // Look up course,
    // If not found, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found') // 404 object not found

    // Validate course
    const { error }= validateCourse(req.body)
    // If invalid, return 400 Bad Request
    if (error) return res.status(400).send(error.details[0].message)

    // Update course
    course.name = req.body.name;


    // Return updated course to client
    res.send(course)
})

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return result = schema.validate(course)
}

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found') // 404 object not found
    res.send(course);
});

router.delete('/:id', (req, res) => {
    // Look up course, if not found return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found') // 404 object not found

    // Find index of course within coursesArr
    const index = courses.indexOf(course);

    // Remove course
    courses.splice(index, 1);

    // Update site
    res.send(course)
})

module.exports = router;
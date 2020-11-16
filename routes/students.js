let express = require('express');
let router = express.Router();
let StudentsModel = require('../models/studentsModel');

//Returns a list of all students
router.get('/', function (req, res) {
    res.json(StudentsModel.getAllStudents());
});

//Returns a single student with respective units and grades
router.get('/:pos', function (req, res) {
    let pos = req.params.pos;
    res.json(StudentsModel.getStudent(pos));
});


router.post('/:pos', function (req, res) {
    let pos = req.params.pos;
    let unit = req.body;
    let result = StudentsModel.saveGrade(pos, unit);
    res.json(result);
});

module.exports = router;
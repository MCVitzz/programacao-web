const { get } = require("../routes");

const units = [
    {
        name: 'Mathematics',
        semester: '3rd Semester',
        ects: 6
    },
    {
        name: 'Literature',
        semester: '2nd Semester',
        ects: 6
    },
    {
        name: 'Laws',
        semester: '1st Semester',
        ects: 3
    },
    {
        name: 'Informatics',
        semester: '1st Semester',
        ects: 6
    },
    {
        name: 'Cooking',
        semester: '2nd Semester',
        ects: 3
    }
]

function getAllUnits() {
    return units;
}

module.exports = { getAllUnits };
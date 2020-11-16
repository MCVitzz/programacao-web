const students = [
    {
        name: 'John Smith',
        number: 202,
        id: 12,
        grades: [
            {
                name: 'Mathematics',
                grade: 8.3,
            },
            {
                name: 'Literature',
                grade: 11.2,
            },
            {
                name: 'Laws',
                grade: 18.5,
            },
            {
                name: 'Informatics',
                grade: 14.3,
            },
            {
                name: 'Cooking',
                grade: 7.4,
            }
        ]
    },
    {
        name: 'Mary Jane',
        number: 512,
        id: 31,
        grades: [
            {
                name: 'Mathematics',
                grade: 14.5,
            },
            {
                name: 'Literature',
                grade: 10.6,
            },
            {
                name: 'Laws',
                grade: 8.7,
            },
        ]
    },
    {
        name: 'Jane Dow',
        number: 45,
        id: 3,
        grades: [
            {
                name: 'Mathematics',
                grade: 12.3,
            },
            {
                name: 'Literature',
                grade: 14.8,
            },
        ],
    },
];



function getAllStudents() {
    return students;
}

function getStudent(idx) {
    return students[idx];
}

function saveGrade(idx, grade) {
    let studentGrade = students[idx].grades.find((a) => a.name == grade.name);
    if (studentGrade) {
        studentGrade.grade = grade.grade;
        return { msg: `“Changed grade of unit ${grade.name}` };
    }
    else {
        students[idx].grades.push(grade);
        return { msg: `Added grade for unit ${grade.name}` };
    }
}

module.exports = { getAllStudents, getStudent, saveGrade }
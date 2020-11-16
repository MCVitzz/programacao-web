const students = [
    {
        name: 'Francis Lamb',
        number: 50037624
    },
    {
        name: 'Hugh Pole',
        number: 50037566
    },
    {
        name: 'Dwight Saints',
        number: 50037782
    },
    {
        name: 'Andy Passion',
        number: 50037236
    },
    {
        name: 'Charles Martins',
        number: 50037128
    },
];

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
    },
];


window.onload = () => {

    addOptions();

    document.getElementById('calculate').onclick = () => {
        calculate();
    };

    document.getElementById('reset').onclick = () => {
        var fields = document.querySelectorAll('input[type=text]');
        for (field of fields) {
            field.value = '';
        }
    };
};

function addOptions() {
    let selectStudent = document.getElementById('studentName');
    let selectUnit = document.getElementById('unitName');

    selectStudent.innerHTML += `<option value="">Select..</option>`;
    selectUnit.innerHTML += `<option value="">Select..</option>`;

    for (let idx in students) {
        selectStudent.innerHTML += `<option value="${idx}">${students[idx].name}</option>`;
    }
    for (let idx in units) {
        selectUnit.innerHTML += `<option value="${idx}">${units[idx].name}</option>`;
    }
}

function calculate() {

    var output = document.getElementById('output');

    var studentIdx = document.getElementById('studentName').value;

    var unitIdx = document.getElementById('unitName').value;

    var projectGrade = parseFloat(document.getElementById('projectGrade').value);
    var projectPercentage = parseFloat(document.getElementById('projectPercentage').value);

    var testGrade = parseFloat(document.getElementById('testGrade').value);
    var testPercentage = parseFloat(document.getElementById('testPercentage').value);

    var fields = document.querySelectorAll('input[type=text], select');

    for (field of fields) {
        if (field.value == '') {
            alert('Please fill out all fields.');
            return;
        }
    }

    if (testPercentage + projectPercentage != 100) {
        alert('The percentages don\'t add up to 100.');
        return;
    }

    var finalGrade = projectGrade * projectPercentage * 0.01 + testGrade * testPercentage * 0.01;
    Math.ceil(finalGrade);

    let student = students[studentIdx];
    let unit = units[unitIdx];


    output.innerHTML = `Student ${student.name} with the number ${student.number} obtained ${finalGrade.toFixed(1)} on the ${unit.name} unit (${unit.ects} ECTS) of the ${unit.semester}.`;
}
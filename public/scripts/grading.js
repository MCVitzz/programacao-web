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

    let values = {};

    let output = document.getElementById('output');

    let verificationFlag = false;

    if (!verifyStudent(values)) verificationFlag = true;
    if (!verifyUnit(values)) verificationFlag = true;
    if (!verifyProject(values)) verificationFlag = true;
    if (!verifyTest(values)) verificationFlag = true;
    if (!verifyPercentages(values)) verificationFlag = true;

    if (verificationFlag) return;

    var finalGrade = values.projectGrade * values.projectPercentage * 0.01 + values.testGrade * values.testPercentage * 0.01;
    Math.ceil(finalGrade);

    let student = students[values.studentIdx];
    let unit = units[values.unitIdx];


    output.innerHTML = `Student ${student.name} with the number ${student.number} obtained ${finalGrade.toFixed(1)} on the ${unit.name} unit (${unit.ects} ECTS) of the ${unit.semester}.`;

    let saveValue = {
        proj: { grade: values.projectGrade, percentage: values.projectPercentage },
        test: { grade: values.testGrade, percentage: values.testPercentage },
        student: { name: student.name, number: student.number },
        unit: { name: unit.name, semester: unit.semester, ects: unit.ects }
    }

    sessionStorage.setItem('grade', JSON.stringify(saveValue));
    window.location = 'gradeConfirmation.html';
}


function verifyStudent(values) {
    let studentIdx = document.getElementById('studentName').value;
    let studentP = document.getElementById('studentP');

    if (studentIdx != '') {
        values.studentIdx = studentIdx;
        studentP.classList.add('hidden');
        return true;
    }
    else {
        studentP.classList.remove('hidden');
        return false;
    }
}

function verifyUnit(values) {
    let unitIdx = document.getElementById('unitName').value;
    let unitP = document.getElementById('unitP');

    if (unitIdx != '') {
        values.unitIdx = unitIdx;
        unitP.classList.add('hidden');
        return true;
    }
    else {
        unitP.classList.remove('hidden');
        return false;
    }
}

function verifyProject(values) {

    let projectGrade = document.getElementById('projectGrade').value;
    let projectPercentage = document.getElementById('projectPercentage').value;
    let projectP = document.getElementById('projectP');

    if (projectGrade != '' && projectPercentage != '') {
        values.projectGrade = parseFloat(projectGrade);
        values.projectPercentage = parseFloat(projectPercentage);
        projectP.classList.add('hidden');
        return true;
    }
    else {
        projectP.classList.remove('hidden');
        return false;
    }
}

function verifyTest(values) {

    let testGrade = document.getElementById('testGrade').value;
    let testPercentage = document.getElementById('testPercentage').value;
    let testP = document.getElementById('testP');

    if (testGrade != '' && testPercentage != '') {
        values.testGrade = parseFloat(testGrade);
        values.testPercentage = parseFloat(testPercentage);
        testP.classList.add('hidden');
        return true;
    }
    else {
        testP.classList.remove('hidden');
        return false;
    }
}


function verifyPercentages(values) {
    let percentageError = document.getElementById('sumPercentages');
    if (values.testPercentage + values.projectPercentage == 100) {
        percentageError.classList.add('hidden');
        return true;
    }
    else {
        percentageError.classList.remove('hidden');
        return false;
    }
}
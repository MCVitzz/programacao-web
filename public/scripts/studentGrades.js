let studentName;

const allGrades = [
    [
        {
            name: 'Mathematics',
            grade: 8.3,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 11.2,
            semester: '2nd Semester',
            ects: 6
        },
        {
            name: 'Laws',
            grade: 18.5,
            semester: '1st Semester',
            ects: 3
        },
        {
            name: 'Informatics',
            grade: 14.3,
            semester: '1st Semester',
            ects: 6
        },
        {
            name: 'Cooking',
            grade: 7.4,
            semester: '2nd Semester',
            ects: 3
        },
    ],
    [
        {
            name: 'Mathematics',
            grade: 14.5,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 10.6,
            semester: '2nd Semester',
            ects: 6
        },
        {
            name: 'Laws',
            grade: 8.7,
            semester: '1st Semester',
            ects: 3
        },
    ],
    [
        {
            name: 'Mathematics',
            grade: 12.3,
            semester: '3rd Semester',
            ects: 6
        },
        {
            name: 'Literature',
            grade: 14.8,
            semester: '2nd Semester',
            ects: 6
        },
    ],
];

window.onload = () => {

    studentName = sessionStorage.getItem('studentName');

    studentIdx = sessionStorage.getItem('studentId');

    let { unitsFailed, gradeSum, ectsSum } = getCalcs(allGrades[studentIdx]);

    let unitsFinished = allGrades[studentIdx].length - unitsFailed;

    let average = gradeSum / ectsSum;

    setSummaryValues(unitsFailed, unitsFinished, average);


    setStudentTag(`${studentName} grades`);

    showCards(allGrades[studentIdx]);
};

function setStudentTag(text) {
    document.getElementById('student').innerHTML = text;
}

function showCards(unitGrades) {
    for (let grade of unitGrades) {
        let card = buildCard(grade);
        document.getElementById('container').innerHTML += card;
    }
}

function getCalcs(unitGrades) {
    let gradeSum = 0;
    let ectsSum = 0;
    let unitsFailed = 0;
    for (let unit of unitGrades) {
        if (unit.grade < 9.5) {
            unitsFailed++;
        }
        gradeSum += unit.grade * unit.ects;
        ectsSum += unit.ects;
    }
    return {
        'gradeSum': gradeSum,
        'ectsSum': ectsSum,
        'unitsFailed': unitsFailed
    };
}

function setSummaryValues(passed, failed, average) {
    setAverageTag(average.toFixed(1));
    let element = document.getElementById('summary');
    element.innerHTML += getParagraph(`${failed} failed units`);
    element.innerHTML += getParagraph(`${passed} passed units`);
}

function getParagraph(text) {
    return `<p>${text}</p>`;
}

function setAverageTag(average) {
    document.getElementById('summaryText').innerHTML = average;
}

function buildCard(unit) {
    var html = `<div class="card ${(unit.grade <= 9.5) ? 'failed' : ''}">`;
    html += '<section class="card-grade-title ">';
    html += '<div class="card-head">';
    html += `<h1>${unit.name.substring(0, 2)}</h1>`;
    html += '</div>';
    html += `<h4>${unit.name}</h4>`;
    html += '<div>';
    html += '</section>';
    html += `<p>Grade: ${unit.grade}</p>`
    html += '</div>';
    return html;
}